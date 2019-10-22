import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from '../styles/Style';

class Home extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.form}>
                    <TouchableOpacity style={Styles.button} onPress={() => this.props.navigation.navigate('Cpf')}>
                        <Text style={Styles.buttonText}>Gerar CPF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={() => this.props.navigation.navigate('Cnpj')}>
                        <Text style={Styles.buttonText}>Gerar CNPJ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={() => this.props.navigation.navigate('CpfValidator')}>
                        <Text style={Styles.buttonText}>Validar CPF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={() => this.props.navigation.navigate('CnpjValidator')}>
                        <Text style={Styles.buttonText}>Validar CNPJ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Home;