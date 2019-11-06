import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './label-text-style';

export default function labelText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.bold && styles.bold), (props.light && styles.light), (props.disabled && styles.disabled), (props.darker && styles.darker)]}>{props.text}</Text>
		</View>
	)
}

labelText.propTypes = {
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	bold: PropTypes.bool,
	light: PropTypes.bool,
	disabled: PropTypes.bool, 
	darker: PropTypes.bool
}

labelText.defaultProps = {
	text: "LabelText",
	noMargin: false,
	bold: false,
	light: false,
	disabled: false,
	darker: false
}
