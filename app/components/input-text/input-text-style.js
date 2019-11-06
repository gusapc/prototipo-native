import { StyleSheet } from 'react-native';
import { font, color, metrics } from 'prototipo-native/app/styles';
import { ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.fontColor,
	...ApplicationStyles.screen,
	bordered: {
		borderRadius: 5,
	    borderWidth: 1,
	    borderColor: color.light,
	    paddingHorizontal: metrics.smallMargin,
	    paddingVertical: 8,
	    marginBottom: metrics.baseMargin
	},
	text: {
		fontSize: font.size.regular
	}
});
