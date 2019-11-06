import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './touchable-icon-style';
import Feather from 'react-native-vector-icons/Feather';
import metrics from 'prototipo-native/app/styles/metrics';
import colors from 'prototipo-native/app/styles/color';

export default function touchableIcon (props) {
	iconSizes = metrics.icons
	const iconSize = (function(size){
		switch (size) {
			case 'small':
				return iconSizes.small;
			case 'regular':
				return iconSizes.regular;
			case 'large':
				return iconSizes.large;
			default:
				return iconSizes.small;
		}
	})(props.iconSize);

	return (
		<View style={[(!props.noMargin && styles.marginHorizontal)]}>
			<TouchableOpacity
				onPress={props.onPress}
			>
				<Feather  name={props.iconName} size={iconSize} color={props.iconColor}/>
			</TouchableOpacity>
		</View>
	)
}

touchableIcon.propTypes = {
	// data: PropTypes.array
	iconName: PropTypes.string,
	iconSize: PropTypes.string,
	noMargin: PropTypes.bool,
	iconColor: PropTypes.string,
}

touchableIcon.defaultProps = {
	// data: []
	iconName: 'info',
	iconSize: 'small',
	noMargin: false,
	iconColor: colors.light
}

