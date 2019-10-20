import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Button } from 'react-native';
import api from '../../services/api';

import ToggleBox from "../components/ToggleBox";
import { TextInputMask } from 'react-native-masked-text'

export default function CpfValidator () {
    const [ cpf, setCpf ] = useState('');
    const [ cpfValido, setCpfValido] = useState('');

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

    function handleChange( value ) {
        setCpf(value);
        window.toggleBoxComponent.toggleBoxDisable();
    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS == "ios"} behavior="padding">
            <TextInputMask
                type={'cpf'}
                value={cpf}
                onChangeText={text => handleChange(text)}
            />
            <Button title="Validar" onPress={ValidaCPF}> </Button>
            <ToggleBox>
                <Text className="labelAnswer">O CPF é <Text className={cpfValido === "válido" ? "answerTrue" : "answerFalse"}>{cpfValido}</Text>.</Text>
            </ToggleBox>
        </KeyboardAvoidingView>
    )
}