import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './subtitle-text-style';

export default function subtitleText (props) {
	return (
		<View style={(!props.noMargin && styles.marginHorizontal)}>
			<Text style={[styles.default, (props.bold && styles.bold), (props.darker && styles.darker)]}>
				{props.text}
			</Text>
		</View>
	)
}

subtitleText.propTypes = {
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	bold: PropTypes.bool,
	darker: PropTypes.bool
}

subtitleText.defaultProps = {
	text: 'SubtitleText',
	noMargin: false,
	bold: false,
	darker: false
}
