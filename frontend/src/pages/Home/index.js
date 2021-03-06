import React from 'react';

export default function Home ( { history} ) {
    function handleCpfClick()
    {
      history.push('/cpf')
    }
  
    function handleCnpjClick()
    {
      history.push('/cnpj')
    }

    function handleCnpjValidatorClick()
    {
      history.push('/cnpjvalidator')
    }

    function handleCpfValidatorClick()
    {
      history.push('/cpfvalidator')
    }
    
    return (
    <>
        <button className="btn" onClick={handleCpfClick}>Gerar CPF</button>
        <button className="btn" onClick={handleCnpjClick}>Gerar CNPJ</button>
        <button className="btn" onClick={handleCpfValidatorClick}>Validar CPF</button>
        <button className="btn" onClick={handleCnpjValidatorClick}>Validar CNPJ</button>
    </>
    )
}