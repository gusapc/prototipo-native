import { StyleSheet } from 'react-native';
import { ApplicationStyles, font, color } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	badgeStyle: {
		borderRadius: 15,
		width:22,
		height:22,
		backgroundColor: color.orange
	},
	badgeElement: {
		color: color.white,
		fontSize: 10
	},
	icon: {
		margin:6
	}
});
