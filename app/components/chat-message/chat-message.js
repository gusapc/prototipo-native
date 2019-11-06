import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './chat-message-style';
import BodyText from 'prototipo-native/app/components/body-text';
import LabelText from 'prototipo-native/app/components/label-text';


export default function chatMessage (props) {
	return (
		<View>
			<View style={styles.row}>
				<BodyText 
					darker
					text={props.text}
				/>
			</View>
			<View style={[styles.row, styles.contentFlexEnd]}>
				<LabelText 
					disabled
					text={props.time}
				/>
			</View>
		</View>
	)
}

chatMessage.propTypes = {
	text: PropTypes.string,
	time: PropTypes.string
}

chatMessage.defaultProps = {
	text: "text",
	time: "00:00"
}
