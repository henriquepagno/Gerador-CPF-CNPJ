import React, { useState } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

import ToggleBox from "../components/ToggleBox";
import { TextInputMask } from 'react-native-masked-text'
import { Platform } from '@unimodules/core';

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
        <KeyboardAvoidingView enabled={Platform.OS == "ios"} behavior="padding">
            <TextInputMask
                type={'cnpj'}
                value={cnpj}
                onChangeText={text => handleChange(text)}
            />
            <TouchableOpacity style={styles.button} onPress={ValidaCNPJ}>
                <Text style={styles.buttonText}>Validar</Text>
            </TouchableOpacity>
            <ToggleBox>
                <Text className="labelAnswer">O CNPJ é <Text className={cnpjValido === "válido" ? "answerTrue" : "answerFalse"}>{cnpjValido}</Text>.</Text>
            </ToggleBox>
        </KeyboardAvoidingView>
    )
}