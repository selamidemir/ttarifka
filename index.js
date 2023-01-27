/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route from './src/routes/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
