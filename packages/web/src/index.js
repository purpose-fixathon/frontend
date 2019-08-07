import { AppRegistry } from 'react-native';
import App from '../../components/src/App';

AppRegistry.registerComponent('purpose', () => App)

AppRegistry.runApplication('purpose', {
  rootTag: document.getElementById('root'),
})
