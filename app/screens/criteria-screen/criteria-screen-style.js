import { StyleSheet } from 'react-native';
import { ApplicationStyles, color } from 'prototipo-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	content:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	scrollContent:{
		height: '70%',
	},
	tableHead: { 
		height: 40,
		backgroundColor: '#808B97' 
	},
	tableText: { 
		margin: 6 
	},
	tableRow: { 
		flexDirection: 'row',
		backgroundColor: color.lightBlue 
	},
	tableBtn: { 
		width: '100%',
		height: 60,
		backgroundColor: '#d6d8d9',
		borderRadius: 2,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tableBtnText: { 
		textAlign: 'center',
		color: '#000'
	},
	heightView:{
		height: '80%'
	},
	rowText:{
		margin: 10,
	},
	marginViewBtn: {
		marginVertical: 10
	},
	marginHori: {
		marginHorizontal: 20
	},
	card:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	rowView:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rowView2:{
		flex: .4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
