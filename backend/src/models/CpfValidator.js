cpfValidator = function (cpfIn) {

    cpf = cpfIn.cpf.replace(/[^\d]+/g,'');
    
    if(cpf == ''){
        this.resposta = false;
        return;
    }
    
	// Valida 1o digito	
	add = 0;
    
    for (i=0; i < 9; i ++)
    {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
        
    rev = 11 - (add % 11);	
    
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
            
    if (rev != parseInt(cpf.charAt(9))){
        this.resposta = false;
        return;
    }
            
	// Valida 2o digito	
    add = 0;
    
	for (i = 0; i < 10; i ++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }

    rev = 11 - (add % 11);
    
	if (rev == 10 || rev == 11)	{
        rev = 0;
    }

	if (rev != parseInt(cpf.charAt(10))){
        this.resposta = false;
        return;
    }

	this.reposta = true;
}

module.exports = cpfValidator;