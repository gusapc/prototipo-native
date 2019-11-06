import { StyleSheet } from 'react-native';
import { font, color, metrics } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	divider: {
		width: '100%',
		borderBottomWidth: 1,
		borderColor: color.gray 
	},
	marginVertical: {
		marginVertical: metrics.baseMargin
	},
	marginHorizontal: {
		marginHorizontal: metrics.baseMargin
	},
	marginTop: {
		marginTop: metrics.smallMargin
	},
	marginBottom: {
		marginBottom: metrics.smallMargin
	},
	disabled: {
		borderColor: color.lighter
	}
});
