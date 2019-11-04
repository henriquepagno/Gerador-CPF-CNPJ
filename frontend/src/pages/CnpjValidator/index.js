import React, { useState } from 'react';
import api from '../../services/api';
import ToggleBox from "../../components/ToggleBox";
import '../CnpjValidator/index.css';
import InputMask from "react-input-mask";

export default function CnpjValidator () {
    const [ cnpj, setCnpj ] = useState('');
    const [ cnpjValido, setCnpjValido] = useState('');

    async function ValidaCnpj() {
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
        <InputMask
            className="txt"
            id="txtCnpj"
            placeholder="Informe o CNPJ"
            value={cnpj}
            onChange={handleChange}
            mask="99.999.999/9999-99"
            ></InputMask>
        <button className="btn" onClick={ValidaCnpj}>Validar</button>
        <ToggleBox>
            <p className="labelAnswer">O CNPJ é <strong className={cnpjValido === "válido" ? "answerTrue" : "answerFalse"}>{cnpjValido}</strong>.</p>
        </ToggleBox>
        </>
    )
}