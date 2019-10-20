import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../../services/api';

import ToggleBox from "../../components/ToggleBox";
import InputMask from "react-input-mask";

export default function CnpjValidator () {
    const [ cnpj, setCnpj ] = useState('');
    const [ cnpjValido, setCnpjValido] = useState('');

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
        <View>
            <InputMask
                className="txt"
                id="txtCnpj"
                placeholder="Informe o CNPJ"
                value={cnpj}
                onChange={handleChange}
                mask="99.999.999/9999-99"
                ></InputMask>
            <Button title="Validar" onPress={ValidaCNPJ}> </Button>
            <ToggleBox>
                <Text className="labelAnswer">O CNJ é <strong className={cnpjValido === "válido" ? "answerTrue" : "answerFalse"}>{cnpjValido}</strong>.</Text>
            </ToggleBox>
        </View>
    )
}