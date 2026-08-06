// 1. DADOS DE CADA PASSO DA HISTÓRIA
const historia = {
  0: {
    texto: "Ao caminhar pelo seu bairro, você percebe um aviso de racionamento de água devido a uma severa seca prolongada. Qual é o seu primeiro pensamento?",
    opcoes: [
      { texto: "Alternativa 1: Preciso economizar imediatamente e conscientizar meus vizinhos.", proximoPasso: 1 },
      { texto: "Alternativa 2: Isso é exagero do governo, vou continuar usando água normalmente.", proximoPasso: 2 }
    ]
  },
  1: {
    texto: "Você começa a reaproveitar a água da chuva e cria um grupo no bairro para discutir soluções sustentáveis. A prefeitura abre uma consulta pública para novos projetos urbanos. O que você propõe?",
    opcoes: [
      { texto: "Alternativa 1: Investir em captação de água da chuva e hortas comunitárias.", proximoPasso: 3 },
      { texto: "Alternativa 2: Focar apenas na construção de reservatórios industriais privados.", proximoPasso: 4 }
    ]
  },
  2: {
    texto: "Semanas depois, as torneiras do bairro começam a secar diariamente. A associação de moradores está organizando uma distribuição de emergência. Como você reage?",
    opcoes: [
      { texto: "Alternativa 1: Admito o problema e me ofereço para ajudar na distribuição justa de água.", proximoPasso: 4 },
      { texto: "Alternativa 2: Tento estocar o máximo de água possível apenas para minha casa.", proximoPasso: 5 }
    ]
  },
  // RESULTADOS FINAIS
  3: {
    texto: "🏆 <strong>Resultado do Futuro:</strong> Suas atitudes inspiraram a comunidade! A cidade tornou-se referência em sustentabilidade e gestão comunitária da água. A seca ainda existe, mas a união e o planejamento garantem água potável para todos de forma justa.",
    opcoes: []
  },
  4: {
    texto: "⚠️ <strong>Resultado do Futuro:</strong> A cidade conseguiu evitar um colapso total, mas a desigualdade no acesso à água aumentou. Apenas quem podia pagar teve acesso contínuo, gerando conflitos sociais constantes.",
    opcoes: []
  },
  5: {
    texto: "🚨 <strong>Resultado do Futuro:</strong> O individualismo fez os reservatórios locais esgotarem rapidamente. A comunidade entrou em crise e muitos moradores precisaram abandonar o bairro devido à escassez extrema.",
    opcoes: []
  }
};

// 2. REFERÊNCIAS DO DOM
const elementoTexto = document.getElementById("texto-passo");
const elementoOpcoes = document.getElementById("opcoes-container");
const btnReiniciar = document.getElementById("btn-reiniciar");

let passoAtual = 0;

// 3. FUNÇÃO PARA RENDERIZAR O PASSO ATUAL
function renderizarPasso(passoId) {
  const dadosPasso = historia[passoId];

  elementoTexto.innerHTML = dadosPasso.texto;
  elementoOpcoes.innerHTML = "";

  // Se não houver mais opções, exibe o botão de reiniciar (Fim de jogo)
  if (dadosPasso.opcoes.length === 0) {
    btnReiniciar.classList.remove("escondido");
    return;
  } else {
    btnReiniciar.classList.add("escondido");
  }

  // Cria os botões para cada alternativa
  dadosPasso.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.className = "btn-opcao";
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => avançarHistoria(opcao.proximoPasso));
    elementoOpcoes.appendChild(botao);
  });
}

// 4. NAVEGAÇÃO E REINÍCIO
function avançarHistoria(proximoPasso) {
  passoAtual = proximoPasso;
  renderizarPasso(passoAtual);
}

function reiniciarJogo() {
  passoAtual = 0;
  renderizarPasso(passoAtual);
}

btnReiniciar.addEventListener("click", reiniciarJogo);

// Inicia a aplicação
renderizarPasso(0);
