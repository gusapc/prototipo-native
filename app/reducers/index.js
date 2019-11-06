import { combineReducers } from 'redux'
import Example from 'prototipo-native/app/reducers/ExampleReducer';
import CreateGenericReducer from 'prototipo-native/app/reducers/CreateGenericReducer.js'

const rootReducer = combineReducers({
	Example,
    GenericExample: CreateGenericReducer('GENERIC_EXAMPLE')
});

export default rootReducer;

