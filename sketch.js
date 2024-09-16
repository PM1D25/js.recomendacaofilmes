
function geraRecomendacao(idade, gostaDeFantasia, gostaDeDrama) {
    if (idade >= 10) {
      if (idade >= 14) {
        return "A noiva cadaver";
      } else {
        if (idade >= 12) {
          if(gostaDeFantasia || gostaDeDrama) {
            return "Nimona";          
          } else{
           return "O castelo animado";
          }
        } else {
          if (gostaDeFantasia) {
            return "Edward mãos de tesouro";
          } else {
            return "Beetlejuice";
          }
        }
      }
    } else {
      if (gostaDeFantasia) {
        return "A viagem de chihiro";
      } else {
        return "O feitiço do tempo";
      }
    }
  }
  