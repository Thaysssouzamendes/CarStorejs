// Função para verificar o dia da semana atual
const verificarDiaDaSemana = () => {
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.getDay();
    return diaDaSemana;
}

// Função do corpo do email que será enviado
function montarBody(veiculosNovos, veiculosMaisVendidos, condicoesAquisicao) {
    const body  = 
    `Prezado Cliente,
      
      Confira as novidades da Week na CarStore:
      
      Novos veículos: 
      ${veiculosNovos.join(', ')}

      Mais vendidos: 
      ${veiculosMaisVendidos.join(', ')}

      Condições de aquisição: 
      ${condicoesAquisicao.join(', ')}
      
      Estamos te esperando!`;
    return body;
  }

// Listas dos veículos, emails e condições

var veiculosNovos = [
    "Ford Mustang 2024",
    "Audi A8",
    "Mercedes-Benz Classe S",
    "BMW Série 7",
    "Lamborghini Urus 2024",
    "Porsche Panamera",
    "Jaguar F-Type 2024",
    "Tesla Model S", 
  ]


var veiculosMaisVendidos = [
    "Toyota Corolla",
    "Honda Civic",
    "Volkswagen Golf",
    "Nissan Altima",
    "Ford Focus",    
  ]


var condicoesAquisicao = [
    "Pagamento à vista",
    "Financiamento",
    "Consórcio",
  ]

const addressee = {
    "monkeyd@example.com": true,
    "blackleg@example.com": true,
    "cartographer@example.com": true,
    "three-swords@example.com": false,
    "deer@example.com": false,
    "skeleton@example.com": false,
    "sogeking@example.com": true,
    "fishman@example.com": false,
    "cyborg@example.com": true,
    "historian@example.com": true, 
  }

// Variável com o texto do assunto do email
var subject = [
    "Surpresas na CarStore: Venha conferir as novidades da Week na CarStore"
]


// Chamada do arquivo que dispara o email
const enviarEmail = require('./envia-email');


// Função que considera todos os requisitos para o envio dos emails
if (verificarDiaDaSemana() === 1) {
    const corpoDoEmail = montarBody(veiculosNovos, veiculosMaisVendidos, condicoesAquisicao);
    for (const [email, optIn] of Object.entries(addressee)) {
        if (optIn) {
            enviarEmail(email, "Surpresas na CarStore: Venha conferir as novidades da Week na CarStore", corpoDoEmail);
        }
    }
}