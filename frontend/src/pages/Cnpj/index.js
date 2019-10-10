import React, { useEffect , useState } from 'react';
import api from '../../services/api';

export default function Cnpj () {
    const [ cnpj, setCnpj ] = useState('');

    async function buscaCnpj() {
        const response = await api.get('/cnpj');
        setCnpj(response.data.cnpj);
    }

    function handleSubmit(event)
    {
        buscaCnpj();
    }

    useEffect(() => {
        buscaCnpj();
    }, [ ])
    
    return (
        <>
        <input
            className="txt"
            id="txtCnpj"
            value={cnpj.cnpj}></input>
        <button className="btn" onClick={handleSubmit}>Gerar Novo CNPJ</button>
        </>
    )
}