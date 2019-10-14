import React, { Component } from 'react';
import { View, Button } from 'react-native';

/*export default function Home(){
    return <View>
        <Text>Texto</Text>
        <Button title="Gerar CPF"
                onPress={() => this.props.navigation.navigate('Cpf')}>
        </Button>
    </View>;
}*/

class Home extends Component {
    render() {
        return (
            <View>
                <Button title="Gerar CPF" onPress={() => this.props.navigation.navigate('Cpf')}> </Button>
                <Button title="Gerar CNPJ" onPress={() => this.props.navigation.navigate('Cnpj')}> </Button>
                <Button title="Validar CPF" onPress={() => this.props.navigation.navigate('CpfValidator')}> </Button>
                <Button title="Validar CNPJ" onPress={() => this.props.navigation.navigate('CnpjValidator')}> </Button>                
            </View>
        )
    }
}

export default Home;