import React, { useEffect , useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import Styles from '../styles/Style';

export default function Cnpj() {
    const [ cnpj, setCnpj ] = useState('');

    async function buscaCnpj() {
        const response = await api.get('/cnpj');
        setCnpj(response.data.cnpj);
    }

    function handleSubmit(event)
    {
        buscaCnpj();
    }

    useEffect(() => {
        buscaCnpj();
    }, [ ])

    return (
        <View style={Styles.container}>
            <View style={Styles.form}>
                <TextInput
                    className="txt"
                    id="txtCnpj"
                    style={Styles.input}
                    value={`${cnpj.cnpj ? cnpj.cnpj : 0}`}
                    readOnly={true}
                ></TextInput>
                <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                    <Text style={Styles.buttonText}>Gerar Novo CNPJ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}