import React, { useEffect , useState } from 'react';
import api from '../../services/api';

export default function Cpf () {
    const [ cpf, setCpf ] = useState('');

    async function buscaCpf() {
        const response = await api.get('/cpf');
        setCpf(response.data.cpf);
    }

    function handleSubmit(event)
    {
        buscaCpf();
    }

    useEffect(() => {
        buscaCpf();
    }, [ ])
    
    return (
        <>
        <input
            className="txt"
            id="txtCpf"
            value={cpf.cpf ? cpf.cpf : 0}
            readOnly={true}
            ></input>
        <button className="btn" onClick={handleSubmit}>Gerar Novo CPF</button>
        </>
    )
}