import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './title-text-style';

export default function titleText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.white && styles.white), (props.bold && styles.bold)]}>{props.text}</Text>
		</View>
	)
}

titleText.propTypes = {
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	white: PropTypes.bool,
	bold: PropTypes.bool
}

titleText.defaultProps = {
	text: "TitleText",
	noMargin: false,
	white: false,
	bold: false
}
