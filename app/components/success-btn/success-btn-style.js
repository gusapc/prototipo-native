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
		backgroundColor: '#d4edda'
	},
	actionText: {
		color: '#155724'
	},
	negativeBg: {
		backgroundColor: color.white,
		borderColor: '#d4edda',
		borderWidth: 1
	},
	negativeText: {
		color: '#d4edda'
	},
	disabledBg: {
		backgroundColor: color.lighter,
		borderWidth: 0
	},
	disabledText: {
		color: color.gray
	}
});
