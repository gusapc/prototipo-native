import ApiService from 'prototipo-native/app/services/ApiService';

// Declare action names as constants with uppercase string
export const GET_EXAMPLE_BEGIN = 'GET_EXAMPLE_BEGIN';
export const GET_EXAMPLE_SUCCESS = 'GET_EXAMPLE_SUCCESS';
export const GET_EXAMPLE_FAILURE = 'GET_EXAMPLE_FAILURE';
export const RESET_EXAMPLE = 'RESET_EXAMPLE';

// Thunk: this is a special type of action that can dispatch other actions
export function getExample() {
	return async dispatch => {
		dispatch(getExampleBegin());
		dispatch(getExampleSuccess({example: 'example'}));
		// await ApiService.getExample()
		// 	.then(
		// 		result => {
		// 			dispatch(getExampleSuccess(result));
		// 		},
		// 		error => {
		// 			dispatch(getExampleFailure(error));
		// 			throw ({error: error, message: 'This is a demo error message'});
		// 		}
		// 	)
	};
}

// Action: Function that returns an object with action data for reducer
export const getExampleBegin = () => ({
	type: GET_EXAMPLE_BEGIN
});
export const getExampleSuccess = data => ({
	type: GET_EXAMPLE_SUCCESS,
	payload: { data }
});
export const getExampleFailure = error => ({
	type: GET_EXAMPLE_FAILURE,
	payload: { error }
});
export const resetExample = () => ({
	type: RESET_EXAMPLE
});
