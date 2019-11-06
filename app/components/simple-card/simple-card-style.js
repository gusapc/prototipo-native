import { StyleSheet } from 'react-native';
import { font, color, metrics, ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	card: {
		...ApplicationStyles.screen.card,
		marginHorizontal: 0
	}
});