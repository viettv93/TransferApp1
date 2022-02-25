/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Login from './src/component/login/Login_Screen';
import Onboarding from './src/component/login/Onboarding_Screen';
import SignIn from './src/component/login/SignIn';
import MyApp from './src/component/Main';
import Main from './src/component/Main';

AppRegistry.registerComponent(appName, () => MyApp);
