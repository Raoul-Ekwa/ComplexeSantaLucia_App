
// redux/store.js
import { createStore } from 'redux';
import settingsReducer from './reducer';  // Assurez-vous d'importer le réducteur

const store = createStore(settingsReducer); // Créer le store Redux avec le réducteur

export default store; // Exporter le store
