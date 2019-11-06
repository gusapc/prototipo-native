import font from './font'
import color from './color'
import metrics from './metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		container: {
			flex: 1,
			backgroundColor: color.bg
		},
		marginHorizontal: {
			marginHorizontal: metrics.baseMargin
		},
		smallMarginVertical: {
			marginVertical: metrics.smallMargin
		},
		smallMarginHorizontal: {
			marginHorizontal: metrics.smallMargin
		},
		marginVertical: {
			marginVertical: metrics.baseMargin
		},
		noMarginHorizontal: {
			marginHorizontal: 0,
		},
		paddingHorizontal: {
			paddingHorizontal: metrics.baseMargin
		},
		paddingAround: {
			padding: metrics.baseMargin
		},
		verticalPadding: {
			paddingVertical: metrics.baseMargin
		},
		smallMarginTop: {
			marginTop: metrics.smallMargin
		},
		row: {
			flexDirection: 'row'
		},
		flex1: {
			flex: 1
		},
		flex2: {
			flex:2
		},
		flexWrap: {
			flexWrap: 'wrap'
		},
		contentCenter: {
			justifyContent: 'center'
		},
		contentFlexEnd: {
			justifyContent: 'flex-end'
		},
		alignCenter: {
			alignItems: 'center'
		},
		alignFlexEnd: {
			alignItems: 'flex-end'
		},
		spaceBetween: {
			justifyContent: 'space-between'
		},
		spaceEvenly: {
			justifyContent: 'space-evenly'
		},
		alignSelfStart: {
			alignSelf: 'flex-start'
		},
		alignSelfEnd: {
			alignSelf: 'flex-end'
		},
		fullWidth: {
			width: '100%'
		},
		fullHeight: {
			height: '100%'
		},
		card: {
			flexDirection: 'column',
			marginHorizontal: metrics.baseMargin,
			marginVertical: metrics.smallMargin,
			backgroundColor: color.white,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.1,
			shadowOffset: { width: 0, height: 3 },
			elevation: 1,
			borderRadius: 5,
			paddingVertical: metrics.smallMargin,
			paddingHorizontal: 0 
		},
		transparentCard: {
			margin: metrics.baseMargin,
			marginBottom: metrics.smallMargin,
			backgroundColor: color.whiteAlpha(.5),
			borderRadius: 5,
			padding: metrics.responsiveSpace
		},
		imageFill: {
			position:'absolute', 
			top: 0, 
			bottom: 0, 
			right: 0, 
			left: 0, 
			width:null, 
			height:null			
		},
		headerSpace: {
			paddingTop: metrics.navBarHeight
		},
		header: {
			height: metrics.navBarHeight,
			backgroundColor: color.transparent
		},
		textCenter: {
			textAlign: 'center'
		},
		cardWidth: {
			width: '33.333%'
		},
		floatingDatePosition: {
			position: 'absolute',
			bottom: 32,
			right: 0,
			zIndex: 30
		}
	},
	fontWeight: {
		bold: {
			fontWeight: 'bold'
		},
		medium: {
			fontWeight: '500'
		},
		regular: {
			fontWeight: '400'
		},
		light: {
			fontWeight: '300'
		}
	},
	fontColor: {
		darker: {
			color: color.darker
		},
		dark: {
			color: color.dark
		},
		blue: {
			color: color.blue
		},
		orange: {
			color: color.orange
		},
		gold: {
			color: color.gold
		},
		white: {
			color: color.white
		},
		green: {
			color: color.green
		},
		red: {
			color: color.red
		},
		gray: {
			color: color.gray
		},
		disabled: {
			color: color.light
		}
	},
	stackNavigatorOptions: {
		removeHeader: {
			header: null
		},
		transparentHeader: {
			headerTransparent: true,
			headerTintColor: color.dark,
			headerStyle: {
				backgroundColor: color.transparent
			}
		},
		bottomTab: {
			activeTintColor: color.blue,
			inactiveTintColor: color.light,
			style: {
				backgroundColor: color.white
			}
		}
	}

}

export default ApplicationStyles
