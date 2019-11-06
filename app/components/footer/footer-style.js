import { StyleSheet } from 'react-native';
import { font, color, metrics } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	footerContent: {
		paddingVertical: metrics.smallMargin,
		paddingHorizontal: metrics.baseMargin,
		alignItems: 'center'
	},
	bg: {
		backgroundColor: color.lighter
	}
});
