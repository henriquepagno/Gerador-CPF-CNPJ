cpf = function() {
    // https://www.geradorcpf.com/algoritmo_do_cpf.htm

    var i;
    var numbers = [];

    var total = 0;

    var resto;

    for (i = 0; i < 9; i++) {
        numbers[i] = Math.floor((Math.random() * 10));

        total+= numbers[i] * (10 - i);
    }
    
    //var quociente = total/11;
    var resto = total%11;

    if (resto < 2) {
        var primeiroDigito = 0;
    }
    else {
        var primeiroDigito = 11 - resto;
    }

    //Segundo dígito
    numbers[9] = primeiroDigito;
    total = 0;

    for (i = 0; i < 10; i++) {
        total+= numbers[i] * (11 - i);
    }

    //quociente = total/11;
    resto = total%11;

    if (resto < 2) {
        var segundoDigito = 0;
    }
    else {
        var segundoDigito = 11 - resto;
    }

    numbers[10] = segundoDigito;

    this.cpf = ""

    for (i = 0; i < 11; i++) {
        if (i == 3|| i == 6) {
            this.cpf += ".";
        }
        else if (i == 9) {
            this.cpf += "-";
        }

        this.cpf += numbers[i];
    }

    /*function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
      });*/

}

module.exports = cpf;