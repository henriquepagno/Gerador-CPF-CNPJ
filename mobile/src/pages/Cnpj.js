import React, { useEffect , useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../../services/api';

export default function Cnpj() {
    const [ cnpj, setCnpj ] = useState('');

    async function buscaCnpj() {
        const response = await api.get('/cnpj');
        setCnpj(response.data.cpf);
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
            <Button title="Gerar Novo CNPJ" onPress={handleSubmit}> </Button>
        </View>
    )
}