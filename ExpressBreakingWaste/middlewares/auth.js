function estaLogado (req, res, next) {
  console.log("NÃO ESQUECE DE TIRAR A GAMBIARRA DA SESSÃO")

  // req.session.usuario = {
  //   "id": 1,
  //   "username": "tamirespaquino@gmail.com",
  //   "email": "tamirespaquino@gmail.com",
  //   "razao_social": "Gatinhos da Alegria",
  //   "cnpj": "08008008/0001",
  //   "telefone": "1555592999",
  //   "endereco": "Avenida das Nações Unidas",
  //   "numero": "3100",
  //   "bairro": "Centro",
  //   "complemento": "",
  //   "cidade": "São Paulo",
  //   "estado": "SP",
  //   "cep": "0156000",
  //   "situacaofuncionamento": "option1",
  //   "tipousuario": "option1",
  //   "tiporesiduos": null,
  //   "quantidadebombonas": null,
  //   "tamanhobombonas": null
  // }

  if (typeof req.session.usuario === undefined || req.session.usuario === null) {
    return res.redirect('/entre')
  }

  next();
}

module.exports = estaLogado