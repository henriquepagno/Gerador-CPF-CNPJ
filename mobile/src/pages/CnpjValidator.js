import React, { useState } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'
import { Platform } from '@unimodules/core';
import { View } from 'react-native-animatable';

import api from '../../services/api';
import Styles from '../styles/Style';

import ToggleBox from "../components/ToggleBox";

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
        <KeyboardAvoidingView style={Styles.container} enabled={Platform.OS == "ios"} behavior="padding">
            <View style={Styles.form}>
                <TextInputMask
                    type={'cnpj'}
                    value={cnpj}
                    style={Styles.input}
                    onChangeText={text => handleChange(text)}
                />
                <TouchableOpacity style={Styles.button} onPress={ValidaCNPJ}>
                    <Text style={Styles.buttonText}>Validar</Text>
                </TouchableOpacity>
                <ToggleBox>
                    <Text style={Styles.label}>O CNPJ é <Text style={cnpjValido === "válido" ? Styles.answerTrue : Styles.answerFalse}>{cnpjValido}</Text>.</Text>
                </ToggleBox>
            </View>
        </KeyboardAvoidingView>
    )
}