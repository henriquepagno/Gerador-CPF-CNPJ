cnpj = function() {
    // https://www.geradorcnpj.com/algoritmo_do_cnpj.htm

    var i;
    var numbers = [];

    var total = 0;
    var resto;

    var multiplicadores = [6,5,4,3,2,9,8,7,6,5,4,3,2];

    for (i = 0; i < 12; i++) {
        numbers[i] = Math.floor((Math.random() * 10));

        total+= numbers[i] * multiplicadores[i+1];
    }

    var resto = total%11;

    if (resto < 2) {
        var primeiroDigito = 0;
    }
    else {
        var primeiroDigito = 11 - resto;
    }

    //Segundo dígito
    numbers[12] = primeiroDigito;
    total = 0;

    for (i = 0; i < 13; i++) {
        total+= numbers[i] * multiplicadores[i];
    }

    resto = total%11;

    if (resto < 2) {
        var segundoDigito = 0;
    }
    else {
        var segundoDigito = 11 - resto;
    }

    numbers[13] = segundoDigito;

    this.cnpj = ""

    for (i = 0; i < 14; i++) {
        if (i == 2 || i == 5) {
            this.cnpj += ".";
        }
        else if (i == 8) {
            this.cnpj += "/";
        }
        else if (i == 12) {
            this.cnpj += '-';
        }

        this.cnpj += numbers[i];
    }

}

module.exports = cnpj;