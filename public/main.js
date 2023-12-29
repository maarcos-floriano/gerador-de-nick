function gerarNick(nome) {
  const titulos = [
    "Bravo",
    "Destemido",
    "Mestre",
    "Rápido",
    "Sábio",
    "Audaz",
    "Silencioso",
    "Misterioso",
    "Poderoso",
    "Lendário",
    "Astuto",
    "Invencível",
    "Ágil",
    "Supremo",
    "Furtivo",
    "Brilhante",
    "Infalível",
    "Valente",
    "Majestoso",
    "Implacável",
    "Relâmpago",
    "Intrépido",
    "Magnífico",
    "Incansável",
    "Imortal",
    "Glorioso",
    "Feroz",
    "Incrível",
    "Audacioso",
  ];
  nicksEscolhidos = [];
  for (let i = 0; i <= 4; i++) {
    let tituloEscolhido = titulos[Math.floor(Math.random() * titulos.length)];
    nicksEscolhidos.push(tituloEscolhido + nome.toUpperCase());
  }

  return nicksEscolhidos;
}
function criarEmail(nick) {
  dominios = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com", "@bol.com.br"];
  let emailComNick = [];
  for (let i = 0; i < nick.length; i++) {

    emailComNick.push(nick[i] + dominios[i]);
  }

  return emailComNick;
}

function criarPerfil() {
  let nome = document.getElementById("ipt_nome").value;
  nickName = gerarNick(nome);
  email = criarEmail(nickName);
  info.innerHTML = "";

  for (let i=0; i < nickName.length; i++) {
    info.innerHTML += `
    <div class="card">
      <p>${nickName[i]}</p>
      <p>${email[i]}</p>
    </div>
    `;
  }
}
