import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './body-text-style';

export default function bodyText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.dark && styles.dark), (props.darker && styles.darker), (props.bold && styles.bold), (props.green && styles.green), (props.red && styles.red), (props.blurred && styles.light)]}>{props.text}</Text>
		</View>
	)
}

bodyText.propTypes = {
	noMargin: PropTypes.bool,
	text: PropTypes.string,
	darker: PropTypes.bool,
	dark: PropTypes.bool,
	bold: PropTypes.bool,
	green: PropTypes.bool,
	red: PropTypes.bool
}

bodyText.defaultProps = {
	noMargin: false,
	text: "BodyText",
	darker: false,
	dark: false,
	bold: false,
	green: false,
	red: false
}
