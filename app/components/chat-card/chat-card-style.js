import { StyleSheet } from 'react-native';
import { font, color, ApplicationStyles } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	card:{
		...ApplicationStyles.screen.card,
		shadowColor: color.transparent,
		shadowRadius: 0,
		shadowOpacity: 0,
		shadowOffset: { width: 0, height: 0 },
		elevation: 0,
	},
	blue: {
		backgroundColor: '#DFF1F9'
	},
	gray: {
		backgroundColor: '#F2F5F6'
	}

});
