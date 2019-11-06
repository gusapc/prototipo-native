import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './huge-text-style';

export default function HugeText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.white && styles.white)]}>{props.text}</Text>
		</View>
	)
}

HugeText.propTypes = {
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	white: PropTypes.bool
}

HugeText.defaultProps = {
	text: "HugeText",
	noMargin: false,
	white: false
}
