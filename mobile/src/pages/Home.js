import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
                <Text>Texto</Text>
                <Button title="Gerar CPF"
                    onPress={() => this.props.navigation.navigate('Cpf')}>
                </Button>
            </View>
        )
    }
}
export default Home;