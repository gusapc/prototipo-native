import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import styles from './arrow-card-style';
import { color, font } from 'prototipo-native/app/styles';

import BodyText from 'prototipo-native/app/components/body-text';

export default function arrowCard (props) {
	return (
		<TouchableOpacity 
			onPress={props.onPress}
			style={styles.arrowCard}
		>
			<BodyText 
				text={props.text}
			/>
			<Feather name={'chevron-right'} size={font.size.regular} color={color.light} />
		</TouchableOpacity>
	)
}

arrowCard.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func
}

arrowCard.defaultProps = {
	text: 'text',
	onPress: null
}
