const colors = {
	darker: '#12293C',
	darkerAlpha: (alpha = 1) => `rgba(18, 41, 60, ${alpha})`,
	blackAlpha: (alpha = 1) => `rgba(0, 0, 0, ${alpha})`,
	dark: '#527588',
	gray: '#E0E0E0',
	light: '#A8BAC3',
	lighter: '#FAFAFA',

	white: '#FFFFFF',
	whiteAlpha: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`,
	blue: '#5FB8E2',
	lightBlue: '#DFF1F9',
	orange: '#FF5000',
	gold: '#DAAA46',
	transparent: 'rgba(0,0,0,0)',
	green: '#6FCF97',
	red: '#EB5757',

	mainSerie: '#34526B',
	secondarySerie: (alpha) => `rgba(27, 153, 214, ${alpha})`,
	contrastSerie: '#DCDEDF',

	bg: '#E8EEF4'
};

export default colors
