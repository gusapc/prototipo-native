import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './simple-card-style';

export default function simpleCard (props) {
	return (
		<View style={[styles.card, (props.smallMargin ? styles.smallMarginHorizontal : styles.marginHorizontal)]}>
			{props.children}
		</View>
	)
}

simpleCard.propTypes = {
	smallMargin: PropTypes.bool
}

simpleCard.defaultProps = {
	smallMargin: false
}
