function escondeVerMais(valor, posicao) {
    const divVerMais = document.getElementById('vermais');
    
    
    if (valor) {
        projetoEscolhido = posicao;
        
        trocarPropriedadesVerMais(posicao);
        divVerMais.classList.replace('hidden', 'block');
        
    }
    else{
        divVerMais.classList.replace('block', 'hidden');
        verProjeto();
        
    }
}

const btnVerprojeto = document.getElementById('btnVerProjeto');
const btnVerImagens = document.getElementById('btnVerImagens');

function verProjeto() {
    document.getElementById('slider').style.transform = 'translateX(0%)';
    btnVerprojeto.classList.replace('bg-slate-700/50', 'bg-cyan-500');
    btnVerprojeto.classList.replace('text-slate-300', 'text-slate-950');
    btnVerprojeto.classList.add('font-bold');
    btnVerprojeto.classList.add('shadow-[0_0_15px_rgba(34,211,238,0.3)]');

    btnVerImagens.classList.replace('bg-cyan-500', 'bg-slate-700/50');
    btnVerImagens.classList.replace('text-slate-950', 'text-slate-300');
    btnVerImagens.classList.remove('font-bold');
    btnVerImagens.classList.remove('shadow-[0_0_15px_rgba(34,211,238,0.3)]');
}

function verImagens() {
    document.getElementById('slider').style.transform = 'translateX(-50%)';
    btnVerImagens.classList.replace('bg-slate-700/50', 'bg-cyan-500');
    btnVerImagens.classList.replace('text-slate-300', 'text-slate-950');
    btnVerImagens.classList.add('font-bold');
    btnVerImagens.classList.add('shadow-[0_0_15px_rgba(34,211,238,0.3)]');

    btnVerprojeto.classList.replace('bg-cyan-500', 'bg-slate-700/50');
    btnVerprojeto.classList.replace('text-slate-950', 'text-slate-300');
    btnVerprojeto.classList.remove('font-bold');
    btnVerprojeto.classList.remove('shadow-[0_0_15px_rgba(34,211,238,0.3)]');
}


const projetosEImagens = [
    {
        nome: 'Projeta Dev',
        descricao: `
            <p class="text-slate-300 text-lg leading-relaxed">
                Resolve o maior obstáculo que qualquer tipo de programador já passou: não ter ideia do que desenvolver. O <span class="text-cyan-400 font-bold text-shadow-glow">Projeta Dev</span> conecta ideias reais do TabNews a programadores que estão dispostos a desenvolve-los, sozinho ou acompanhados.
            </p>
            <p class="mt-4 text-slate-400 text-sm italic border-t border-slate-700/50 pt-4">
                Inclui sistema de cargos dentro do projeto, follow entre usuários, pedido de participação e perfis técnicos personalizáveis.
            </p>
        `,
        conhecimentos: `
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase rounded-md border border-cyan-500/20">JWT Auth</span>
                <span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase rounded-md border border-blue-500/20">Docker</span>
                <span class="px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase rounded-md border border-purple-500/20">Clean Arch</span>
            </div>
            <p class="text-slate-300 leading-relaxed font-medium">
                Arquitetura em camadas (MVC) com validação robusta via <span class="text-white">JWT</span>, Migrations de banco de dados, rotas orientadas ao usuário e dockerização completa de todo o ecossistema.
            </p>
        `,
        github: 'https://github.com/ItaloSantos-dev/projeta-dev',
        imagens: [
            'images/projeta-dev/login.png',
            'images/projeta-dev/dashboard.png',
            'images/projeta-dev/perfil.png',
            'images/projeta-dev/criando-projeto.png',
            'images/projeta-dev/meus-projetos.png'
        ]
    },

    {
        nome: 'Copia Video',
        descricao: `
            <p class="text-slate-300 text-lg leading-relaxed">
                Resolve um problema persistente na vida de criadores de conteúdo: <span class="text-white font-medium">a falta de ideias</span>. O <span class="text-cyan-400 font-bold text-shadow-glow">Copia video</span> utiliza a API do YouTube para garimpar os vídeos mais visualizados do seu nicho e guiar sua próxima criação, a aplicação permite organização de projetos de diversos tipo, basta pesquisar e criar a base da sua ideia.
            </p>
            <p class="mt-4 text-slate-400 text-sm italic border-t border-slate-700/50 pt-4">
                Inclui, lousa para estruturação visual (desenhos), edição de títulos/descrições e exportação direta para PDF.
                ps. Seria incrementado a função de geração de roteiros com IA, utilizando a transcrição do vídeo, capturada via PYTHON, e os detalhes que o usuário desejasse.
            </p>
        `,
        conhecimentos: `
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase rounded-md border border-cyan-500/20">Redis</span>
                <span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase rounded-md border border-blue-500/20">POO</span>
                <span class="px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase rounded-md border border-purple-500/20">MVC</span>
            </div>
            <p class="text-slate-300 leading-relaxed font-medium">
                Arquitetura em camadas (Layered Architecture) baseada em POO e MVC, com banco de dados <span class="text-white">SQL</span> e migrations, dockerização completa, Redis, controle de acesso, relatórios admin e consumo de API.
            </p>
        `,
        github: 'https://github.com/ItaloSantos-dev/copia-video',
        imagens: [
            'images/copia-video/dashboard.png',
            'images/copia-video/criando-ideia.png',
            'images/copia-video/desenho.png',
            'images/copia-video/metricas.png',
            'images/copia-video/redis.png'
        ]
    },

    {
        nome: 'Valorize',
        descricao: `
            <p class="text-slate-300 text-lg leading-relaxed">
                Resolve um obstáculo comum na vida de investidores: <span class="text-white font-medium">o planejamento financeiro</span>. A <span class="text-cyan-400 font-bold text-shadow-glow">Valorize</span> automatiza cálculos complexos com foco em investimentos no Brasil e conversão de moeda para destinos internacionais, a aplicação é destinada para investidores e pessoas que desejam fazer um planejamento, utilizando diversos tipos de moedas.
            </p>
            <p class="mt-4 text-slate-400 text-sm italic border-t border-slate-700/50 pt-4">
                Inclui sistema de cálculo de investimentos, conversão em tempo real e ferramentas para planejamento financeiro de viagens.
            </p>
        `,
        conhecimentos: `
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase rounded-md border border-cyan-500/20">MVC</span>
                <span class="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase rounded-md border border-blue-500/20">POO</span>
                <span class="px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase rounded-md border border-purple-500/20">SQL</span>
                <span class="px-3 py-1 bg-purple-500/10 text-gray-400 text-[10px] font-black uppercase rounded-md border border-purple-500/20">DOCKER</span>
                <span class="px-3 py-1 bg-purple-500/10 text-yellow-400 text-[10px] font-black uppercase rounded-md border border-purple-500/20">JUROS</span>
            </div>
            POO, MVC, arquitetura em camadas, SQL, migrations, docker e lógica de juros compostos.
        `,
        github: 'https://github.com/ItaloSantos-dev/copia-video',
        imagens: [
            'images/valorize/investimentos.png',
            'images/valorize/calcular.png'
        ]
    }
];


function trocarPropriedadesVerMais(posicao) {
    currentImgIndex = 0;
    document.getElementById('verMaisTituloProjeto').innerHTML = projetosEImagens[posicao].nome;;
    document.getElementById('verMaisOQueSolucionaProjeto').innerHTML = projetosEImagens[posicao].descricao;
    document.getElementById('verMaisConhecimentosAplicadosProjeto').innerHTML = projetosEImagens[posicao].conhecimentos;
    document.getElementById('verMaisLinkGitHubProjeto').innerhrf = projetosEImagens[posicao].github;

    
    const qtdImagens = projetosEImagens[posicao].imagens.length;
    track.innerHTML = '';
    for (let index = 0; index < qtdImagens; index++) {
        track.innerHTML+= 
            `<div class="min-w-full aspect-video bg-slate-800 flex items-center justify-center">
                <img src="${projetosEImagens[posicao].imagens[index]}" alt="Preview 1" class="w-full  object-cover">
            </div>
        `
    }
    totalImages = qtdImagens;

}



let currentImgIndex = 0;
const track = document.getElementById('image-track');
const dots = document.querySelectorAll('.dot');
let totalImages = 0;

function updateCarousel() {
    // Move o track das imagens
    track.style.transform = `translateX(-${currentImgIndex * 100}%)`;

}

function moveSlide(direction) {
    currentImgIndex = (currentImgIndex + direction + totalImages) % totalImages;
    updateCarousel();
}

function goToSlide(index) {
    currentImgIndex = index;
    updateCarousel();
}

let projetoEscolhido = null;

function verImagensGrande(valor) {
    track2.innerHTML = '';
    currentImgIndex2 = 0;
    if (valor) {
        
        for (let index = 0; index < projetosEImagens[projetoEscolhido].imagens.length; index++) {
            track2.innerHTML +=
            `
                <div class="min-w-full h-full flex items-center justify-center bg-black">
                    <img src="${projetosEImagens[projetoEscolhido].imagens[index]}" alt="Preview 1" class="max-w-full max-h-full object-contain">
                </div>
            `
        }
        document.getElementById('verMaisImagemGrande').classList.replace('hidden', 'block');
        totalImages2 = projetosEImagens[projetoEscolhido].imagens.length;
    }
    else{
        document.getElementById('verMaisImagemGrande').classList.replace('block', 'hidden');

    }
}




let currentImgIndex2 = 0;
const track2 = document.getElementById('image-track2');
let totalImages2 = 0;

function updateCarousel2() {
    // Move o track das imagens
    track2.style.transform = `translateX(-${currentImgIndex2 * 100}%)`;

}

function moveSlide2(direction) {
    currentImgIndex2 = (currentImgIndex2 + direction + totalImages2) % totalImages2;
    updateCarousel2();
}

function goToSlide2(index) {
    currentImgIndex2 = index;
    updateCarousel2();
}
