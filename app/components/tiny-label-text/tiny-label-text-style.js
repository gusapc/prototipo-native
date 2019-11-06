import { StyleSheet } from 'react-native';
import { font, color } from 'prototipo-native/app/styles';
import { ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.fontWeight,
	...ApplicationStyles.fontColor,
	
	default: {
		fontSize: font.size.tiny,
		color: color.dark
	}
});
