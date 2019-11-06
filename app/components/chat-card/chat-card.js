import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './chat-card-style';
import DataQuote from 'prototipo-native/app/components/data-quote';
import ChatMessage from 'prototipo-native/app/components/chat-message';
import BodyText from 'prototipo-native/app/components/body-text';


export default function chatCard (props) {
	let owner = props.isOwn ? null : 
		<BodyText 
			bold
			darker
			text={props.owner}
		/>;
	let graph = (props.label && props.detail) ?
		<DataQuote 
			isOwn={props.isOwn}
			marginVertical
			label={props.label}
			text={props.detail}
		/> : null; 
	return (
		<View style={[styles.card, props.isOwn ? styles.blue : styles.gray]}>
			{owner}
			{graph}
			<ChatMessage 
				text={props.msg}
				time={props.time}
			/>
		</View>
	)
}

chatCard.propTypes = {
	isOwn: PropTypes.bool,
	owner: PropTypes.string,
	label: PropTypes.string,
	detail: PropTypes.string,
	msg: PropTypes.string,
	time: PropTypes.string
}

chatCard.defaultProps = {
	isOwn: false,
	owner: 'owner',
	label: null,
	detail: null,
	msg: 'msg',
	time: 'time'
}
