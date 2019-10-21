import React, { useEffect , useState } from 'react';
import { View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

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
        <View>
            <TextInput
                className="txt"
                id="txtCpf"
                value={`${cpf.cpf ? cpf.cpf : 0}`}
                readOnly={true}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Gerar Novo CPF</Text>
            </TouchableOpacity>
        </View>
    )
}