import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './tiny-label-text-style';

export default function tinyLabelText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.bold && styles.bold), (props.darker && styles.darker)]}>{props.text}</Text>
		</View>
	)
}

tinyLabelText.propTypes = {
	noMargin: PropTypes.bool,
	text: PropTypes.string,
	bold: PropTypes.bool,
	darker: PropTypes.bool
}

tinyLabelText.defaultProps = {
	noMargin: false,
	text: 'TinyLabelText',
	bold: false,
	darker: false
}
