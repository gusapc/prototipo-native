import { StyleSheet } from 'react-native';
import { font, color, ApplicationStyles, metrics } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	searchCard: {
		...ApplicationStyles.screen.transparentCard,
		...ApplicationStyles.screen.row,
		...ApplicationStyles.screen.alignCenter,
		...ApplicationStyles.screen.spaceBetween,
		...ApplicationStyles.screen.marginHorizontal,
		paddingTop: metrics.smallMargin,
		paddingBottom: metrics.smallMargin,
	},
	input: {
		flex: 1,
		paddingHorizontal: metrics.smallMargin,
		color: color.white,
		fontSize: font.size.regular
	},
	icon: {
		marginLeft: metrics.smallMargin
	}
});
