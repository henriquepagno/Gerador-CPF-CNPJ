import React, { useState } from 'react';
import api from '../../services/api';
import ToggleBox from "../../components/ToggleBox";
import '../CpfValidator/index.css';
import InputMask from "react-input-mask";

export default function CpfValidator () {
    const [ cpf, setCpf ] = useState('');
    const [cpfValido, setCpfValido] = useState('');

    async function ValidaCpf() {
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
        <InputMask
            className="txt"
            id="txtCpf"
            placeholder="Informe o CPF"
            value={cpf}
            onChange={handleChange}
            mask="999.999.999-99"
            ></InputMask>
        <button className="btn" onClick={ValidaCpf}>Validar</button>
        <ToggleBox>
            <p className="labelAnswer">O CPF é <strong className={cpfValido === "válido" ? "answerTrue" : "answerFalse"}>{cpfValido}</strong>.</p>
        </ToggleBox>
        </>
    )
}