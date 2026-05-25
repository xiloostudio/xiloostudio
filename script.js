document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. REPERTÓRIO (MÚSICAS EXPANDIDAS)
    // ==========================================
    const musicas = [
        {
            id: 'asaBranca', nome: "Asa Branca", dificuldade: "Média",
 partitura: [
    {nota:'C', dur:200}, {nota:'D', dur:250}, {nota:'E', dur:450}, {nota:'G', dur:450}, {nota:'G', dur:450}, {nota:'E', dur:450}, {nota:'F', dur:450}, {nota:'F', dur:650}, {nota:'C', dur:200}, {nota:'D', dur:250}, {nota:'E', dur:450}, {nota:'G', dur:400}, {nota:'G', dur:450}, {nota:'F', dur:400}, {nota:'E', dur:850}, {nota:'C', dur:200}, {nota:'C', dur:250}, {nota:'D', dur:250}, {nota:'E', dur:500}, {nota:'G', dur:750}, {nota:'G', dur:250}, {nota:'F', dur:250}, {nota:'E', dur:250}, {nota:'C', dur:500}, {nota:'F', dur:850}, {nota:'F', dur:250}, {nota:'E', dur:250}, {nota:'D', dur:250}, {nota:'D', dur:800}, {nota:'E', dur:1000}, {nota:'D', dur:250}, {nota:'D', dur:200}, {nota:'C', dur:250}, {nota:'C', dur:800}
]
        },
        {
            id: 'rendeira', nome: "Mulher Rendeira", dificuldade: "Fácil",
            partitura: [
                {nota:'C', dur:400}, {nota:'E', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:400}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'E', dur:800},
                {nota:'C', dur:400}, {nota:'E', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:400}, {nota:'F', dur:400}, {nota:'D', dur:800},
                {nota:'C', dur:400}, {nota:'E', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:400}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'E', dur:800},
                {nota:'C', dur:400}, {nota:'E', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:400}, {nota:'F', dur:400}, {nota:'D', dur:800}
            ]
        },
        {
            id:'anunciacao', nome: "Anunciação", dificuldade: "Fácil",
            partitura: [
    {nota:'C', dur:350}, {nota:'D', dur:350}, {nota:'E', dur:350}, {nota:'F', dur:350}, {nota:'E', dur:350}, {nota:'D', dur:400}, {nota:'C', dur:350}, {nota:'A', dur:350}, {nota:'C', dur:350}, {nota:'D', dur:300}, {nota:'C', dur:400}, {nota:'D', dur:950}, {nota:'C', dur:350}, {nota:'D', dur:350}, {nota:'E', dur:350}, {nota:'F', dur:350}, {nota:'E', dur:300}, {nota:'D', dur:350}, {nota:'C', dur:350}, {nota:'A', dur:400}, {nota:'E', dur:350}, {nota:'D', dur:400}, {nota:'C', dur:350}, {nota:'C', dur:800}
]
        },
        {
            id: 'morenatropicanal', nome: "Morena Tropicana", dificuldade: "Média",
            partitura: [
    {nota:'E', dur:250}, {nota:'E', dur:450}, {nota:'C', dur:500}, {nota:'A', dur:650}, {nota:'E', dur:200}, {nota:'E', dur:450}, {nota:'C', dur:500}, {nota:'B', dur:950}, {nota:'F', dur:400}, {nota:'F', dur:450}, {nota:'E', dur:250}, {nota:'D', dur:400}, {nota:'C', dur:700}, {nota:'E', dur:200}, {nota:'E', dur:500}, {nota:'C', dur:450}, {nota:'A', dur:700}, {nota:'E', dur:200}, {nota:'E', dur:450}, {nota:'C', dur:500}, {nota:'B', dur:950}, {nota:'F', dur:450}, {nota:'F', dur:450}, {nota:'E', dur:250}, {nota:'D', dur:400}, {nota:'C', dur:800}
]
        },
        {
            id: 'labellejour', nome: "La Belle de Jour", dificuldade: "Difícil",
            partitura: [
    {nota:'C', dur:450}, {nota:'C', dur:200}, {nota:'C', dur:650}, {nota:'C', dur:450}, {nota:'C', dur:200}, {nota:'C', dur:600}, {nota:'E', dur:500}, {nota:'E', dur:200}, {nota:'E', dur:750}, {nota:'E', dur:450}, {nota:'E', dur:200}, {nota:'E', dur:650}, {nota:'C', dur:450}, {nota:'C', dur:150}, {nota:'C', dur:600}, {nota:'C', dur:450}, {nota:'C', dur:200}, {nota:'C', dur:650}, {nota:'E', dur:550}, {nota:'E', dur:200}, {nota:'E', dur:700}, {nota:'E', dur:400}, {nota:'E', dur:200}, {nota:'E', dur:600}, {nota:'A', dur:450}, {nota:'A', dur:200}, {nota:'A', dur:650}, {nota:'A', dur:400}, {nota:'A', dur:200}, {nota:'A', dur:300}, {nota:'E', dur:300}, {nota:'G', dur:450}, {nota:'G', dur:200}, {nota:'G', dur:650}, {nota:'G', dur:450}, {nota:'G', dur:200}, {nota:'G', dur:600}, {nota:'A', dur:450}, {nota:'A', dur:200}, {nota:'A', dur:700}, {nota:'A', dur:450}, {nota:'A', dur:200}, {nota:'A', dur:350}, {nota:'E', dur:350}, {nota:'G', dur:500}, {nota:'G', dur:200}, {nota:'G', dur:650}, {nota:'G', dur:450}, {nota:'G', dur:200}, {nota:'G', dur:600}, {nota:'F', dur:450}, {nota:'F', dur:200}, {nota:'F', dur:650}, {nota:'F', dur:400}, {nota:'F', dur:200}, {nota:'F', dur:600}, {nota:'G', dur:500}, {nota:'G', dur:200}, {nota:'G', dur:600}, {nota:'G', dur:450}, {nota:'C', dur:200}, {nota:'C', dur:350}, {nota:'C', dur:300}, {nota:'C', dur:800}
]
        },
            {
            id:'xotedasmeninas', nome: "Xote das Meninas", dificuldade: "Fácil",
            partitura: [
    {nota:'C', dur:200}, {nota:'C', dur:450}, {nota:'A', dur:450}, {nota:'D', dur:600}, {nota:'C', dur:200}, {nota:'C', dur:350}, {nota:'B', dur:150}, {nota:'B', dur:350}, {nota:'A', dur:200}, {nota:'A', dur:600}, {nota:'C', dur:200}, {nota:'C', dur:500}, {nota:'A', dur:400}, {nota:'D', dur:650}, {nota:'C', dur:150}, {nota:'C', dur:300}, {nota:'B', dur:200}, {nota:'B', dur:300}, {nota:'A', dur:200}, {nota:'A', dur:600}, {nota:'C', dur:200}, {nota:'C', dur:450}, {nota:'A', dur:400}, {nota:'D', dur:600}, {nota:'C', dur:200}, {nota:'C', dur:250}, {nota:'B', dur:150}, {nota:'B', dur:300}, {nota:'A', dur:150}, {nota:'A', dur:800}
]
            },
            {
                id:'queroxodo', nome:"Eu Só Quero Um Xodó", dificuldade:"Difícil",
                partitura: [
    {nota:'B', dur:300}, {nota:'G', dur:350}, {nota:'B', dur:250}, {nota:'G', dur:300}, {nota:'B', dur:300}, {nota:'G', dur:550}, {nota:'E', dur:350}, {nota:'B', dur:2000}, {nota:'B', dur:350}, {nota:'A', dur:300}, {nota:'C', dur:350}, {nota:'B', dur:350}, {nota:'G', dur:300}, {nota:'E', dur:550}, {nota:'A', dur:350}, {nota:'A', dur:550}, {nota:'G', dur:1550}, {nota:'B', dur:350}, {nota:'G', dur:300}, {nota:'B', dur:300}, {nota:'G', dur:300}, {nota:'B', dur:350}, {nota:'G', dur:600}, {nota:'E', dur:300}, {nota:'B', dur:1900}, {nota:'B', dur:350}, {nota:'A', dur:300}, {nota:'C', dur:350}, {nota:'B', dur:350}, {nota:'G', dur:350}, {nota:'E', dur:600}, {nota:'A', dur:300}, {nota:'A', dur:550}, {nota:'G', dur:800},{nota:'B', dur:300}, {nota:'D', dur:300}, {nota:'F', dur:550}, {nota:'E', dur:500}, {nota:'C', dur:550}, {nota:'B', dur:300}, {nota:'D', dur:1850}, {nota:'B', dur:300}, {nota:'D', dur:250}, {nota:'F', dur:600}, {nota:'E', dur:550}, {nota:'C', dur:500}, {nota:'B', dur:300}, {nota:'B', dur:600}, {nota:'A', dur:1150}, {nota:'E', dur:250}, {nota:'G', dur:350}, {nota:'B', dur:550}, {nota:'B', dur:300}, {nota:'A', dur:850}, {nota:'E', dur:300}, {nota:'G', dur:300}, {nota:'B', dur:600}, {nota:'B', dur:300}, {nota:'A', dur:850}, {nota:'E', dur:300}, {nota:'G', dur:300}, {nota:'C', dur:550}, {nota:'B', dur:600}, {nota:'G', dur:550}, {nota:'E', dur:350}, {nota:'G', dur:800}
]
        },
        {
            id:'aiquesaudade',nome:"Ai Que Saudade D'Ocê", dificuldade:"Média",
            partitura: [
    {nota:'C', dur:400}, {nota:'D', dur:350}, {nota:'C', dur:350}, {nota:'D', dur:350}, {nota:'C', dur:350}, {nota:'C', dur:350}, {nota:'G', dur:550}, {nota:'F', dur:800}, {nota:'G', dur:200}, {nota:'G', dur:400}, {nota:'G', dur:200}, {nota:'G', dur:400}, {nota:'F', dur:400}, {nota:'G', dur:350}, {nota:'E', dur:900}, {nota:'C', dur:350}, {nota:'D', dur:300}, {nota:'C', dur:350}, {nota:'D', dur:400}, {nota:'C', dur:350}, {nota:'C', dur:350}, {nota:'G', dur:550}, {nota:'F', dur:800}, {nota:'G', dur:200}, {nota:'G', dur:400}, {nota:'G', dur:400}, {nota:'F', dur:350}, {nota:'G', dur:350}, {nota:'E', dur:800}, {nota:'E', dur:350}, {nota:'E', dur:450}, {nota:'E', dur:250}, {nota:'E', dur:350}, {nota:'E', dur:350}, {nota:'E', dur:750}, {nota:'E', dur:200}, {nota:'E', dur:250}, {nota:'E', dur:350}, {nota:'G', dur:400}, {nota:'F', dur:400}, {nota:'E', dur:400}, {nota:'D', dur:950}, {nota:'D', dur:250}, {nota:'E', dur:350}, {nota:'D', dur:200}, {nota:'E', dur:350}, {nota:'D', dur:400}, {nota:'E', dur:400}, {nota:'E', dur:350}, {nota:'E', dur:400}, {nota:'E', dur:400}, {nota:'E', dur:400}, {nota:'E', dur:400}, {nota:'E', dur:350}, {nota:'C', dur:800}
]
        },
        {
            id:'reboco', nome:"Sala de Reboco", dificuldade:"Fácil",
            partitura: [
    {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'D', dur:250}, {nota:'F', dur:250}, {nota:'F', dur:300}, {nota:'A', dur:200}, {nota:'A', dur:300}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'D', dur:300}, {nota:'F', dur:250}, {nota:'F', dur:300}, {nota:'A', dur:200}, {nota:'A', dur:300}, {nota:'C', dur:450}, {nota:'C', dur:250}, {nota:'C', dur:350}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'C', dur:500}, {nota:'C', dur:250}, {nota:'C', dur:300}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'D', dur:300}, {nota:'F', dur:200}, {nota:'F', dur:300}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'D', dur:300}, {nota:'F', dur:250}, {nota:'F', dur:300}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'C', dur:500}, {nota:'C', dur:250}, {nota:'C', dur:300}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'C', dur:450}, {nota:'C', dur:250}, {nota:'C', dur:300}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'G', dur:200}, {nota:'G', dur:300}, {nota:'D', dur:800}
]
        },
        {
            id:'pagoderusso',nome:'Pagode Russo', dificuldade:'Média',
            partitura: [
    {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'C', dur:300}, {nota:'E', dur:750}, {nota:'E', dur:300}, {nota:'D', dur:300}, {nota:'C', dur:250}, {nota:'B', dur:300}, {nota:'A', dur:300}, {nota:'C', dur:550}, {nota:'E', dur:300}, {nota:'D', dur:500}, {nota:'C', dur:300}, {nota:'E', dur:250}, {nota:'C', dur:300}, {nota:'A', dur:500}, {nota:'E', dur:300}, {nota:'A', dur:300}, {nota:'C', dur:300}, {nota:'B', dur:350}, {nota:'B', dur:300}, {nota:'A', dur:300}, {nota:'A', dur:800},{nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'C', dur:300}, {nota:'E', dur:750}, {nota:'E', dur:300}, {nota:'D', dur:300}, {nota:'C', dur:250}, {nota:'B', dur:300}, {nota:'A', dur:300}, {nota:'C', dur:550}, {nota:'E', dur:300}, {nota:'D', dur:500}, {nota:'C', dur:300}, {nota:'E', dur:250}, {nota:'C', dur:300}, {nota:'A', dur:500}, {nota:'E', dur:300}, {nota:'A', dur:300}, {nota:'C', dur:300}, {nota:'B', dur:350}, {nota:'B', dur:300}, {nota:'A', dur:300}, {nota:'A', dur:800}
]
        },
        {
            id:'vidadoviajante', nome:"Vida de Viajante", dificuldade:"Fácil",
            partitura: [
    {nota:'A', dur:400}, {nota:'G', dur:950}, {nota:'F', dur:400}, {nota:'E', dur:1300}, {nota:'E', dur:350}, {nota:'G', dur:400}, {nota:'F', dur:250}, {nota:'E', dur:400}, {nota:'D', dur:500}, {nota:'G', dur:1150}, {nota:'A', dur:400}, {nota:'G', dur:1150}, {nota:'F', dur:400}, {nota:'E', dur:950}, {nota:'E', dur:350}, {nota:'G', dur:350}, {nota:'F', dur:250}, {nota:'E', dur:400}, {nota:'D', dur:550}, {nota:'C', dur:500},
    {nota:'C', dur:300}, {nota:'A', dur:700}, {nota:'A', dur:300}, {nota:'D', dur:750}, {nota:'D', dur:300}, {nota:'G', dur:650}, {nota:'G', dur:300}, {nota:'C', dur:800},{nota:'G', dur:450}, {nota:'F', dur:500}, {nota:'E', dur:450}, {nota:'E', dur:250}, {nota:'E', dur:250}, {nota:'D', dur:450}, {nota:'D', dur:250}, {nota:'C', dur:800}
]
        },
        {
            id:'espreandojanela',nome:"Esperando na Janela", dificuldade:"Fácil",
            partitura: [
    {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:350}, {nota:'G', dur:350}, {nota:'F', dur:1050}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'G', dur:250}, {nota:'A', dur:300}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:300}, {nota:'G', dur:350}, {nota:'E', dur:600},
    {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:350}, {nota:'G', dur:350}, {nota:'F', dur:1050}, {nota:'F', dur:250}, {nota:'F', dur:300}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'D', dur:350}, {nota:'F', dur:350}, {nota:'E', dur:200}, {nota:'E', dur:800},{nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:350}, {nota:'G', dur:350}, {nota:'F', dur:1050}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'G', dur:250}, {nota:'A', dur:300}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:300}, {nota:'G', dur:350}, {nota:'E', dur:600},{nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:250}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'A', dur:350}, {nota:'G', dur:350}, {nota:'F', dur:1000},
    {nota:'F', dur:200}, {nota:'F', dur:200}, {nota:'F', dur:250}, {nota:'E', dur:250}, {nota:'D', dur:450}, {nota:'F', dur:300}, {nota:'E', dur:250}, {nota:'C', dur:800}
]

        },
        {
            id:'seiscordas', nome:"Seis Cordas", dificuldade:"Média",
            partitura: [
    {nota:'G', dur:300}, {nota:'G', dur:250}, {nota:'B', dur:300}, {nota:'A', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:750}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'B', dur:250}, {nota:'A', dur:300}, {nota:'G', dur:250}, {nota:'E', dur:850}, {nota:'G', dur:550}, {nota:'B', dur:300}, {nota:'A', dur:600}, {nota:'E', dur:750}, {nota:'G', dur:550}, {nota:'B', dur:300}, {nota:'C', dur:550}, {nota:'G', dur:300}, {nota:'G', dur:300}, {nota:'G', dur:300}, {nota:'G', dur:300}, {nota:'B', dur:300}, {nota:'A', dur:350}, {nota:'G', dur:400}, {nota:'G', dur:900}, {nota:'G', dur:550}, {nota:'B', dur:300}, {nota:'A', dur:650}, {nota:'E', dur:700}, {nota:'G', dur:600}, {nota:'B', dur:300}, {nota:'C', dur:600}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'G', dur:300}, {nota:'G', dur:300}, {nota:'B', dur:300}, {nota:'A', dur:300}, {nota:'G', dur:250}, {nota:'G', dur:800}
]
        },
        {
            id:'meuvaqueiro', nome:"Meu Vaqueiro, Meu Peão", dificuldade:"Fácil",
            partitura: [
    {nota:'G', dur:150}, {nota:'G', dur:300}, {nota:'G', dur:350}, {nota:'A', dur:300}, {nota:'G', dur:250}, {nota:'F', dur:300}, {nota:'E', dur:350}, {nota:'D', dur:800}, {nota:'D', dur:200}, {nota:'D', dur:350}, {nota:'F', dur:350}, {nota:'E', dur:300}, {nota:'D', dur:350}, {nota:'C', dur:200}, {nota:'C', dur:750}, {nota:'C', dur:200}, {nota:'C', dur:350}, {nota:'E', dur:350}, {nota:'D', dur:300}, {nota:'C', dur:600}, {nota:'E', dur:550}, {nota:'D', dur:200}, {nota:'D', dur:300}, {nota:'E', dur:400}, {nota:'D', dur:1650}, {nota:'G', dur:200}, {nota:'G', dur:300}, {nota:'A', dur:300}, {nota:'G', dur:300}, {nota:'F', dur:300}, {nota:'E', dur:400}, {nota:'D', dur:600}, {nota:'D', dur:200}, {nota:'D', dur:350}, {nota:'F', dur:350}, {nota:'E', dur:300}, {nota:'D', dur:400}, {nota:'C', dur:250}, {nota:'C', dur:750}, {nota:'C', dur:250}, {nota:'C', dur:350}, {nota:'E', dur:300}, {nota:'D', dur:300}, {nota:'C', dur:700}, {nota:'E', dur:450}, {nota:'D', dur:250}, {nota:'D', dur:300}, {nota:'E', dur:350}, {nota:'D', dur:800},
]
        },
        {
            id:'juazeiro', nome:"Juazeiro", dificuldade:"Média",
            partitura: [
    {nota:'G', dur:400}, {nota:'B', dur:400}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:500}, {nota:'E', dur:250}, {nota:'D', dur:400}, {nota:'B', dur:400}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'B', dur:950}, {nota:'G', dur:400}, {nota:'B', dur:400}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:450}, {nota:'D', dur:300}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:350}, {nota:'B', dur:400}, {nota:'A', dur:400}, {nota:'B', dur:400}, {nota:'G', dur:800},{nota:'C', dur:750}, {nota:'E', dur:350}, {nota:'B', dur:400}, {nota:'G', dur:750}, {nota:'B', dur:350}, {nota:'D', dur:400}, {nota:'C', dur:350}, {nota:'B', dur:350}, {nota:'A', dur:350}, {nota:'G', dur:400}, {nota:'B', dur:1250}, {nota:'C', dur:750}, {nota:'E', dur:350}, {nota:'B', dur:400}, {nota:'G', dur:650}, {nota:'B', dur:350}, {nota:'D', dur:350}, {nota:'C', dur:400}, {nota:'B', dur:350}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:800},{nota:'G', dur:400}, {nota:'B', dur:400}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:500}, {nota:'E', dur:250}, {nota:'D', dur:400}, {nota:'B', dur:400}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'B', dur:950}, {nota:'G', dur:400}, {nota:'B', dur:400}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:450}, {nota:'D', dur:300}, {nota:'F', dur:450}, {nota:'E', dur:300}, {nota:'D', dur:350}, {nota:'B', dur:400}, {nota:'A', dur:400}, {nota:'B', dur:400}, {nota:'G', dur:800},{nota:'C', dur:750}, {nota:'E', dur:350}, {nota:'B', dur:400}, {nota:'G', dur:750}, {nota:'B', dur:350}, {nota:'D', dur:400}, {nota:'C', dur:350}, {nota:'B', dur:350}, {nota:'A', dur:350}, {nota:'G', dur:400}, {nota:'B', dur:1250}, {nota:'C', dur:750}, {nota:'E', dur:350}, {nota:'B', dur:400}, {nota:'G', dur:650}, {nota:'B', dur:350}, {nota:'D', dur:350}, {nota:'C', dur:400}, {nota:'B', dur:350}, {nota:'A', dur:400}, {nota:'G', dur:400}, {nota:'G', dur:800}
]
        },
        {
            id:'avidadoviajante', nome:"A Vida do Viajante", dificuldade:"Difícil",
            partitura: [
    {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:250}, {nota:'G', dur:350}, {nota:'A', dur:700}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'G', dur:250}, {nota:'G', dur:300}, {nota:'F', dur:650}, {nota:'F', dur:250}, {nota:'F', dur:450}, {nota:'G', dur:250}, {nota:'F', dur:300}, {nota:'E', dur:600}, {nota:'E', dur:200}, {nota:'E', dur:300}, {nota:'D', dur:300}, {nota:'C', dur:300}, {nota:'B', dur:800},
    {nota:'G', dur:700}, {nota:'E', dur:250}, {nota:'E', dur:550}, {nota:'E', dur:250}, {nota:'D', dur:450}, {nota:'D', dur:250}, {nota:'C', dur:1200}, {nota:'A', dur:1000}, {nota:'F', dur:300}, {nota:'F', dur:500}, {nota:'F', dur:250}, {nota:'E', dur:500}, {nota:'E', dur:250}, {nota:'D', dur:1100}, {nota:'G', dur:950}, {nota:'G', dur:250}, {nota:'G', dur:500}, {nota:'G', dur:250}, {nota:'F', dur:500}, {nota:'F', dur:300}, {nota:'E', dur:800}, {nota:'E', dur:250}, {nota:'F', dur:550}, {nota:'F', dur:250}, {nota:'E', dur:800}, {nota:'E', dur:250}, {nota:'D', dur:500}, {nota:'D', dur:300}, {nota:'C', dur:800},{nota:'A', dur:1300}, {nota:'E', dur:450}, {nota:'G', dur:1350}, {nota:'D', dur:500}, {nota:'F', dur:500}, {nota:'F', dur:250}, {nota:'F', dur:800}, {nota:'C', dur:450}, {nota:'E', dur:800},{nota:'A', dur:600}, {nota:'A', dur:200}, {nota:'A', dur:450}, {nota:'G', dur:800}, {nota:'G', dur:250}, {nota:'F', dur:500}, {nota:'F', dur:250}, {nota:'E', dur:850}, {nota:'E', dur:300}, {nota:'D', dur:500}, {nota:'D', dur:250}, {nota:'C', dur:800}
]
        }
    ];

    // ==========================================
    // 2. MOTOR DE ÁUDIO SINTÉTICO (COM DESTRAVA PARA IPHONE)
    // ==========================================
    const frequencias = { 'C': 523.25, 'D': 587.33, 'E': 659.25, 'F': 698.46, 'G': 783.99, 'A': 880.00, 'B': 987.77 };
    let audioCtx = null;
    let audioDestravado = false;

    function inicializarAudio() {
        if (audioDestravado) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!audioCtx) audioCtx = new AudioContext();
            
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            // Truque silencioso para o iPhone aceitar tocar som
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            gain.gain.value = 0; // Som no volume zero
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime); 
            osc.stop(audioCtx.currentTime + 0.1);

            audioDestravado = true;
        } catch (e) {
            console.error("Erro ao destravar áudio:", e);
        }
    }

    // Essencial para iOS - destravar no primeiro toque
    document.addEventListener('touchstart', inicializarAudio, {once:true});
    document.addEventListener('click', inicializarAudio, {once:true});

    function tocar(nota) {
        if (!frequencias[nota]) return;
        
        // Garante que o áudio acorda se o usuário for rápido
        if (!audioDestravado) inicializarAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine'; 
            osc.frequency.setValueAtTime(frequencias[nota], audioCtx.currentTime);
            
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
            
            osc.connect(gain); 
            gain.connect(audioCtx.destination);
            
            osc.start(audioCtx.currentTime); 
            osc.stop(audioCtx.currentTime + 0.5);
        } catch (e) {
            console.error("Erro no oscilador:", e);
        }
    }

    // ==========================================
    // 3. LÓGICA DA TELA: BIBLIOTECA
    // ==========================================
    const listaMusicasDOM = document.getElementById('lista-musicas');
    if (listaMusicasDOM) {
        musicas.forEach(m => {
            const card = document.createElement('div');
            card.className = 'card-musica';
            
            let classeBadge = m.dificuldade === "Fácil" ? 'facil' : (m.dificuldade === "Média" ? 'media' : 'dificil');
            
            card.innerHTML = `
                <div class="card-info">
                    <h3>${m.nome}</h3>
                    <span class="badge-dificuldade ${classeBadge}">${m.dificuldade}</span>
                </div>
                <div style="font-size: 1.5rem; color: var(--ink-black);">▶</div>
            `;
            
            card.onclick = () => window.location.href = `musica.html?id=${m.id}`;
            listaMusicasDOM.appendChild(card);
        });
    }

// ==========================================
    // 4. LÓGICA DA TELA: MÚSICA / PLAYER
    // ==========================================
    const telaXilofone = document.getElementById('tela-xilofone');
    if (telaXilofone) {
        const params = new URLSearchParams(window.location.search);
        const songId = params.get('id');
        const currentSong = musicas.find(m => m.id === songId);

        const tituloDOM = document.getElementById('titulo-musica-atual');
        const partituraContainer = document.getElementById('partitura-container');
        const btnOuvir = document.getElementById('btn-ouvir');
        const btnPraticar = document.getElementById('btn-praticar');

        if (currentSong) {
            tituloDOM.innerText = currentSong.nome;
            currentSong.partitura.forEach(n => {
                const b = document.createElement('div');
                b.className = 'nota-block'; 
                b.innerText = n.nota;
                partituraContainer.appendChild(b);
            });
        } else {
            tituloDOM.innerText = "Música não encontrada :(";
            btnOuvir.disabled = true;
            btnPraticar.disabled = true;
        }

        const esperar = ms => new Promise(res => setTimeout(res, ms));
        const animar = (n) => {
            const el = document.querySelector(`.key[data-nota="${n}"]`);
            if (el) { 
                el.classList.add('active'); 
                setTimeout(() => el.classList.remove('active'), 200); 
            }
        };

        // --- SISTEMA DE PAUSA E CONTROLE ---
        let estado = "PARADO"; // Pode ser: "TOCANDO", "PAUSADO", "PARADO"
        let modoAtual = "";    // Pode ser: "OUVIR" ou "PRATICAR"
        let indexNota = 0;     // Salva a posição exata da pausa
        let controleLoop = 0;  // Previne o erro das duas notas ao mesmo tempo

        function resetarVisual() {
            const blocos = document.querySelectorAll('#partitura-container .nota-block');
            blocos.forEach(b => b.classList.remove('current', 'played'));
        }

        btnOuvir.onclick = async () => {
            if (!currentSong) return;

            // PAUSAR
            if (estado === "TOCANDO" && modoAtual === "OUVIR") {
                estado = "PAUSADO";
                btnOuvir.innerText = "▶ Continuar Ouvindo";
                return;
            }

            // Zera o progresso se estava no modo 'Praticar'
            if (modoAtual !== "OUVIR") {
                indexNota = 0;
                resetarVisual();
                btnPraticar.innerText = "▶ Praticar (Guiado)";
                btnPraticar.style.opacity = "1";
            }

            // TOCAR / CONTINUAR
            estado = "TOCANDO";
            modoAtual = "OUVIR";
            btnOuvir.innerText = "⏸ Pausar Música";
            btnPraticar.style.opacity = "0.5";

            controleLoop++;
            const meuLoop = controleLoop;

            // --- A MÁGICA CONTRA O ENGASGO AQUI ---
            inicializarAudio(); // Força o motor a acordar
            await esperar(300); // Dá 0.3 segundos de respiro antes de começar a chover notas
            // --------------------------------------

            for (let i = indexNota; i < currentSong.partitura.length; i++) {
                if (estado !== "TOCANDO" || controleLoop !== meuLoop) {
                    indexNota = i; 
                    return;
                }

                animar(currentSong.partitura[i].nota);
                tocar(currentSong.partitura[i].nota);
                await esperar(currentSong.partitura[i].dur);
            }

            // Fim natural da música
            if (estado === "TOCANDO" && controleLoop === meuLoop) {
                estado = "PARADO";
                indexNota = 0;
                btnOuvir.innerText = "🎧 Ouvir Música";
                btnPraticar.style.opacity = "1";
            }
        };

        btnPraticar.onclick = async () => {
            if (!currentSong) return;

            // PAUSAR
            if (estado === "TOCANDO" && modoAtual === "PRATICAR") {
                estado = "PAUSADO";
                btnPraticar.innerText = "▶ Continuar Prática";
                return;
            }

            // Zera o progresso se estava no modo 'Ouvir'
            if (modoAtual !== "PRATICAR") {
                indexNota = 0;
                btnOuvir.innerText = "🎧 Ouvir Música";
                btnOuvir.style.opacity = "1";
            }

            // TOCAR / CONTINUAR
            estado = "TOCANDO";
            modoAtual = "PRATICAR";
            btnPraticar.innerText = "⏸ Pausar Prática";
            btnOuvir.style.opacity = "0.5";

            controleLoop++;
            const meuLoop = controleLoop;
            const blocos = document.querySelectorAll('#partitura-container .nota-block');

            // --- A MÁGICA CONTRA O ENGASGO AQUI ---
            inicializarAudio(); // Força o motor a acordar
            await esperar(300); // Dá 0.3 segundos de respiro
            // --------------------------------------

            for (let i = indexNota; i < currentSong.partitura.length; i++) {
                if (estado !== "TOCANDO" || controleLoop !== meuLoop) {
                    indexNota = i; 
                    return;
                }

                blocos.forEach((b, idx) => {
                    b.classList.remove('current');
                    if (idx < i) {
                        b.classList.add('played');
                    } else {
                        b.classList.remove('played');
                    }
                });
                blocos[i].classList.add('current');

                animar(currentSong.partitura[i].nota);
                tocar(currentSong.partitura[i].nota);
                await esperar(currentSong.partitura[i].dur);
            }

            // Fim natural da prática
            if (estado === "TOCANDO" && controleLoop === meuLoop) {
                estado = "PARADO";
                indexNota = 0;
                btnPraticar.innerText = "▶ Praticar (Guiado)";
                btnOuvir.style.opacity = "1";
                
                setTimeout(() => {
                    if (estado === "PARADO") resetarVisual();
                }, 1500);
            }
        };
    }
});
