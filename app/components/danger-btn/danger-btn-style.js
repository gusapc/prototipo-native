import { StyleSheet } from 'react-native';
import { font, color, ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	defaultBackground: {
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 12
	},
	shadow: {
		elevation: 5,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 5 }
	},
	round: {
		borderRadius: 5
	},
	defaultText: {
		fontSize: font.regular,
		textAlign: 'center'
	},
	actionBg: {
		backgroundColor: '#f8d7da'
	},
	actionText: {
		color: '#721c24'
	},
	negativeBg: {
		backgroundColor: color.white,
		borderColor: '#f8d7da',
		borderWidth: 1
	},
	negativeText: {
		color: '#f8d7da'
	},
	disabledBg: {
		backgroundColor: color.lighter,
		borderWidth: 0
	},
	disabledText: {
		color: color.gray
	}
});
