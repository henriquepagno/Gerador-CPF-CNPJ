import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../../services/api';

import ToggleBox from "../components/ToggleBox";
import { TextInputMask } from 'react-native-masked-text'

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

    function handleChange( value ) {
        setCnpj(value);
        window.toggleBoxComponent.toggleBoxDisable();
    }

    return (
        <View>
            <TextInputMask
                type={'cnpj'}
                value={cnpj}
                onChangeText={text => setCnpj(text)}
            />
            <Button title="Validar" onPress={ValidaCNPJ}> </Button>
            <ToggleBox>
                <Text className="labelAnswer">O CNPJ é <Text className={cnpjValido === "válido" ? "answerTrue" : "answerFalse"}>{cnpjValido}</Text>.</Text>
            </ToggleBox>
        </View>
    )
}