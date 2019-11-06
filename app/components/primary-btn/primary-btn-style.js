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
		backgroundColor: color.blue
	},
	actionText: {
		color: color.white
	},
	negativeBg: {
		backgroundColor: color.white,
		borderColor: color.blue,
		borderWidth: 1
	},
	negativeText: {
		color: color.blue
	},
	disabledBg: {
		backgroundColor: color.lighter,
		borderWidth: 0
	},
	disabledText: {
		color: color.gray
	}
});
