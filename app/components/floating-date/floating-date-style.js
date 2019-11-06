import { StyleSheet } from 'react-native';
import { font, color, metrics } from 'prototipo-native/app/styles';
import { ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.fontWeight,
	dateContainer: {
		backgroundColor: color.darkerAlpha(.8),
		borderRadius: metrics.buttonRadius,
		paddingHorizontal: metrics.baseMargin,
		paddingVertical: 4
	},
	dateText: {
		color: color.lighter,
		fontSize: font.tiny,
		fontStyle: 'italic'
	}
});
