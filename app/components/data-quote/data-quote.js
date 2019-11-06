import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './data-quote-style';
import { color } from 'prototipo-native/app/styles';
import LabelText from 'prototipo-native/app/components/label-text';
import Feather from 'react-native-vector-icons/Feather';

export default function dataQuote (props) {
	return (
		<View style={[styles.row, styles.borderLeft, styles.alignCenter, 
			(props.isOwn ? styles.bgWhite : styles.bgBlue), (!props.noMargin && styles.smallMarginHorizontal),
			(props.marginVertical && styles.smallMarginVertical)
			]}>
			<View style={styles.marginLeft}>
				<Feather name="pie-chart" size={24} />
			</View>
			<View style={[styles.smallMarginVertical]}>
				<LabelText 
					bold
					darker
					text={props.label}
				/>
				<LabelText 
					text={props.text}
				/>
			</View>
		</View>
	)
}

dataQuote.propTypes = {
	label: PropTypes.string,
	text: PropTypes.string,
	isOwn: PropTypes.bool
}

dataQuote.defaultProps = {
	label: "label",
	text: "text",
	isOwn: false
}
