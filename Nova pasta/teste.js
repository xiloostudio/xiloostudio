document.addEventListener('DOMContentLoaded', () => {
    
    // Configurações de Áudio
    const frequencias = { 'C': 523.25, 'D': 587.33, 'E': 659.25, 'F': 698.46, 'G': 783.99, 'A': 880.00, 'B': 987.77 };
    let audioCtx = null;

    function iniciarAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }

    function tocarSom(nota) {
        if (!frequencias[nota] || !audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(frequencias[nota], audioCtx.currentTime);
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        osc.connect(gain); 
        gain.connect(audioCtx.destination);
        osc.start(); 
        osc.stop(audioCtx.currentTime + 0.5);
    }

    function animarTecla(nota) {
        const el = document.querySelector(`#xilo-gravador .key[data-nota="${nota}"]`);
        if (el) {
            el.classList.add('auto-play');
            setTimeout(() => el.classList.remove('auto-play'), 200);
        }
    }

    // Lógica do Gravador (Gerador de Código JS)
    const btnGravar = document.getElementById('btn-gravar');
    const areaLink = document.getElementById('area-link');
    const inputLink = document.getElementById('link-gerado');
    const btnCopiar = document.getElementById('btn-copiar');
    
    let gravando = false;
    let tempoUltimaNota = 0;
    let partituraGravada = [];
    let notaAtual = null;
    const mapaTeclado = { 'a':'C', 's':'D', 'd':'E', 'f':'F', 'g':'G', 'h':'A', 'j':'B' };

    btnGravar.onclick = () => {
        iniciarAudio();
        if (!gravando) {
            gravando = true;
            partituraGravada = [];
            notaAtual = null;
            areaLink.classList.add('hidden');
            btnGravar.innerText = "⏹ Finalizar Gravação";
            btnGravar.style.backgroundColor = "#E74C3C";
            btnGravar.style.color = "white";
        } else {
            gravando = false;
            btnGravar.innerText = "🔴 Iniciar Gravação";
            btnGravar.style.backgroundColor = "";
            btnGravar.style.color = "#E74C3C";
            
            // Fecha a última nota
            if (notaAtual) {
                partituraGravada.push(`{nota:'${notaAtual}', dur:800}`);
            }
            
            if (partituraGravada.length > 0) {
                // Formata o código exatamente como no bancoDeMusicas
                inputLink.value = "partitura: [\n    " + partituraGravada.join(", ") + "\n]";
                areaLink.classList.remove('hidden');
            } else {
                alert("Nenhuma nota foi gravada!");
            }
        }
    };

    btnCopiar.onclick = () => {
        inputLink.select();
        document.execCommand('copy');
        btnCopiar.innerText = "✅ Código Copiado!";
        setTimeout(() => btnCopiar.innerText = "📋 Copiar Código", 2000);
    };

    function processarNota(notaTocada) {
        animarTecla(notaTocada);
        tocarSom(notaTocada);

        if (gravando) {
            const agora = Date.now();
            if (notaAtual) {
                let duracao = agora - tempoUltimaNota;
                duracao = Math.round(duracao / 50) * 50; 
                partituraGravada.push(`{nota:'${notaAtual}', dur:${duracao}}`);
            }
            notaAtual = notaTocada;
            tempoUltimaNota = agora;
        }
    }

    document.querySelectorAll('#xilo-gravador .key').forEach(tecla => {
        tecla.addEventListener('pointerdown', (e) => { 
            e.preventDefault(); 
            iniciarAudio();
            processarNota(tecla.dataset.nota); 
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        const notaMapeada = mapaTeclado[e.key.toLowerCase()];
        if (notaMapeada) {
            iniciarAudio();
            processarNota(notaMapeada);
        }
    });
});