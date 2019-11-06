import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './floating-date-style';

export default function floatingDate (props) {
	return (
		<View style={styles.dateContainer}>
			<Text style={[styles.bold, styles.dateText]}>{props.date} última actualización</Text>
		</View>
	)
}

floatingDate.propTypes = {
	date: PropTypes.string
}

floatingDate.defaultProps = {
	date: "date"
}
