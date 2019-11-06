import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'prototipo-native/app/reducers'
import Reactotron from 'prototipo-native/config/ReactotronConfig'

let store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		Reactotron.createEnhancer()
	)
);

export default store;
