import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cpf')}>
                        <Text style={styles.buttonText}>Gerar CPF</Text>
                    </TouchableOpacity>
                </View>
                
                <Button title="Gerar CPF" onPress={() => this.props.navigation.navigate('Cpf')}> </Button>
                <Button title="Gerar CPF" onPress={() => this.props.navigation.navigate('Cpf')}> </Button>
                <Button title="Gerar CNPJ" onPress={() => this.props.navigation.navigate('Cnpj')}> </Button>
                <Button title="Validar CPF" onPress={() => this.props.navigation.navigate('CpfValidator')}> </Button>
                <Button title="Validar CNPJ" onPress={() => this.props.navigation.navigate('CnpjValidator')}> </Button>                
            </View>
        )
    }
}

export default Home;