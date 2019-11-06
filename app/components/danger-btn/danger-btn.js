import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View, 
	TouchableOpacity
} from 'react-native';

import styles from './danger-btn-style';

export default function dangerBtn (props) {
	let backgroundStyle, textStyle;
	if (props.loading || props.disabled) {
		backgroundStyle = styles.disabledBg;
		textStyle = styles.disabledText;
	} else if (props.negative) {
		backgroundStyle = styles.negativeBg;
		textStyle = styles.negativeText;
	} else {
		backgroundStyle = styles.actionBg;
		textStyle = styles.actionText;
	}
	return (
		<View style={(props.marginHorizontal && styles.marginHorizontal)}>
			<TouchableOpacity
				disabled={props.disabled || props.loading}
				onPress={props.onPress}
				style ={[styles.defaultBackground, backgroundStyle, (props.addShadow && styles.shadow), (props.isRound && styles.round)]}
			>
				<Text style={[styles.defaultText, textStyle]}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

dangerBtn.propTypes = {
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	action: PropTypes.bool,
	negative: PropTypes.bool,
	isRound: PropTypes.bool,
	addShadow: PropTypes.bool,
	text: PropTypes.string,
	onPress: PropTypes.func,
	marginHorizontal: PropTypes.bool
}

dangerBtn.defaultProps = {
	disabled: false,
	loading: false,
	action: true,
	negative: false,
	isRound: true,
	addShadow: false,
	text: 'Click me',
	onPress: () => {},
	marginHorizontal: false
}
