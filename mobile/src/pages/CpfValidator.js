import React, { useState } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'
import { Platform } from '@unimodules/core';

import api from '../../services/api';
import Styles from '../styles/Style';

import ToggleBox from "../components/ToggleBox";
import { View } from 'react-native-animatable';

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
        <KeyboardAvoidingView style={Styles.container} enabled={Platform.OS == "ios"} behavior="padding">
            <View style={Styles.form}>
                <TextInputMask
                    type={'cpf'}
                    value={cpf}
                    style={Styles.input}
                    placeholder="Informe o CPF"
                    onChangeText={text => handleChange(text)}
                />
                <TouchableOpacity style={Styles.button} onPress={ValidaCPF}>
                    <Text style={Styles.buttonText}>Validar</Text>
                </TouchableOpacity>
                <ToggleBox>
                    <Text style={Styles.label}>O CPF é <Text style={cpfValido === "válido" ? Styles.answerTrue : Styles.answerFalse}>{cpfValido}</Text>.</Text>
                </ToggleBox>
            </View>
        </KeyboardAvoidingView>
    )
}