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
    
    return (
    <>
        <button className="btn" onClick={handleCpfClick}>Gerar CPF</button>
        <button className="btn" onClick={handleCnpjClick}>Gerar CNPJ</button>
    </>
    )
}