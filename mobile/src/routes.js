import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cpf from './pages/Cpf';
import Cnpj from './pages/Cnpj';
import CpfValidator from './pages/CpfValidator';
import CnpjValidator from './pages/CnpjValidator';

const RootStackRoutes = createStackNavigator({    
    Home: Home,
    Cpf: Cpf,
    Cnpj: Cnpj,
    CpfValidator: CpfValidator,
    CnpjValidator: CnpjValidator
});

const Routes = createAppContainer(RootStackRoutes);

export default Routes;