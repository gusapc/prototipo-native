import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './inline-body-text-style';
import BodyText from 'prototipo-native/app/components/body-text';
import Divider from 'prototipo-native/app/components/divider';


export default function inlineBodyText (props) {
	return (
		<View>
			<View style={styles.row}>
				<View style={styles.flex2}>
					<BodyText
						noMargin
						text={props.leftText}
					/>
				</View>
				<View style={[styles.flex1, styles.alignFlexEnd]}>
					<BodyText 
						noMargin
						text={props.rightText}
					/>
				</View>
			</View>
			<Divider 
				marginTop
				marginBottom
			/>
		</View>
	)
}

inlineBodyText.propTypes = {
	leftText: PropTypes.string,
	rightText: PropTypes.string
}

inlineBodyText.defaultProps = {
	leftText: "LeftText",
	rightText: "RightText"
}
