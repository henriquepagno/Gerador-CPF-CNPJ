import React, { useEffect , useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import Styles from '../styles/Style';

export default function Cpf() {
    const [ cpf, setCpf ] = useState('');

    async function buscaCpf() {
        const response = await api.get('/cpf');
        setCpf(response.data.cpf);
    }

    function handleSubmit(event)
    {
        buscaCpf();
    }

    useEffect(() => {
        buscaCpf();
    }, [ ])

    return (
        <View style={Styles.container}>
            <View style={Styles.form}>
                <TextInput
                    className="txt"
                    id="txtCpf"
                    value={`${cpf.cpf ? cpf.cpf : 0}`}
                    style={Styles.input}
                    readOnly={true}
                ></TextInput>
                <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                    <Text style={Styles.buttonText}>Gerar Novo CPF</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}