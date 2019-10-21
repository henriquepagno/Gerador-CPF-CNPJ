import React, { useEffect , useState } from 'react';
import { View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

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
        <View>
            <TextInput
                className="txt"
                id="txtCnpj"
                value={`${cnpj.cnpj ? cnpj.cnpj : 0}`}
                readOnly={true}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Gerar Novo CNPJ</Text>
            </TouchableOpacity>
        </View>
    )
}