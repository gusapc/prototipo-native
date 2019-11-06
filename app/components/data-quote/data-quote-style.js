import { StyleSheet } from 'react-native';
import { font, color, metrics, ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	marginLeft: {
		marginLeft: metrics.smallMargin
	},
	borderLeft: {
		borderRadius: 5,
		borderLeftWidth: 4,
		borderLeftColor: color.blue
	},
	bgBlue: {
		backgroundColor: '#DFF1F9'
	},
	bgWhite: {
		backgroundColor: 'rgba(255, 255, 255, .4)'
	}
});
