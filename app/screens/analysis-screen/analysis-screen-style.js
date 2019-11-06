import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	scrollContent:{
		height: '70%',
	},
	marginHori: {
		margin: 20,
		width: '30%'
	},
	marginHori: {
		marginHorizontal: 20,
	},
	card:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	rowView:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	centerInputs:{
		flex: .2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 100
	},
	centerInputs2:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
