import React, { useState } from 'react';
import api from '../../services/api';
import ToggleBox from "../../components/ToggleBox";

export default function CnpjValidator () {
    const [ cnpj, setCnpj ] = useState('');
    const [cnpjValido, setCnpjValido] = useState('');

    async function ValidaCNPJ() {
        window.toggleBoxComponent.toggleBoxEnable();
        const response = await api.post('/cnpj', { cnpj });
        
        if (response.data.cnpjValidator.resposta){
            setCnpjValido("válido");
        }
        else {
            setCnpjValido("inválido");
        }
    }

    function handleChange( event ) {
        setCnpj(event.target.value);
        window.toggleBoxComponent.toggleBoxDisable();
    }
    
    return (
        <>
        <input
            className="txt"
            id="txtCnpj"
            placeholder="Informe o CNPJ"
            value={cnpj}
            onChange={handleChange}
            ></input>
        <button className="btn" onClick={ValidaCNPJ}>Validar</button>
        <ToggleBox>
            <p>O CNPJ é {cnpjValido}.</p>
        </ToggleBox>
        </>
    )
}