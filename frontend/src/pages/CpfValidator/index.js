import React, { useState } from 'react';
import api from '../../services/api';
import ToggleBox from "../../components/ToggleBox";

export default function CpfValidator () {
    const [ cpf, setCpf ] = useState('');
    const [cpfValido, setCpfValido] = useState('');

    async function ValidaCPF() {
        window.toggleBoxComponent.toggleBoxEnable();
        const response = await api.post('/cpf', { cpf });
        
        if (response.data.cpfValidator.resposta){
            setCpfValido("válido");
        }
        else {
            setCpfValido("inválido");
        }
    }

    function handleChange( event ) {
        setCpf(event.target.value);
        window.toggleBoxComponent.toggleBoxDisable();
    }
    
    return (
        <>
        <input
            className="txt"
            id="txtCpf"
            placeholder="Informe o CPF"
            value={cpf}
            onChange={handleChange}
            ></input>
        <button className="btn" onClick={ValidaCPF}>Validar</button>
        <ToggleBox>
            <p>O CPF é {cpfValido}.</p>
        </ToggleBox>
        </>
    )
}