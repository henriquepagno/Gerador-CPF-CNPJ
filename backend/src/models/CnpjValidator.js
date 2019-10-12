cnpjValidator = function (cnpjIn) {

    cnpj = cnpjIn.cnpj.replace(/[^\d]+/g,'');
 
    if (cnpj == '') {
        this.resposta = false;
        return;
    }
     
    if (cnpj.length != 14) {
        this.resposta = false;
        return;
    }
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);

    soma = 0;

    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        this.resposta = false;
        
    }
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        this.resposta = false;
        return;
    }
     
    this.resposta = true;
    
}

module.exports = cnpjValidator;