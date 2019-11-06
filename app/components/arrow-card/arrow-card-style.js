import { StyleSheet } from 'react-native';
import { font, color, metrics } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	arrowCard: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: color.transparent,
		alignItems: 'center',
		padding: metrics.smallMargin,
		justifyContent: 'space-between'
	}
});
