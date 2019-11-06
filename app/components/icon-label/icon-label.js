import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './icon-label-style';
import { color } from 'prototipo-native/app/styles';

import BodyText from 'prototipo-native/app/components/body-text';

export default function iconLabel (props) {
	return (
		<View style={[(!props.noMargin && styles.marginHorizontal)]}>
			<TouchableOpacity
				onPress={props.onPress}
			>
				<View style={[styles.row, styles.alignCenter]}>
					<Feather name={props.iconName} size={24} color={props.active ? color.dark : color.light} />
					<BodyText
						text={props.text}
						dark={props.active}
						blurred={!props.active}
					/>
				</View>
			</TouchableOpacity>
		</View>
	)
}

iconLabel.propTypes = {
	iconName: PropTypes.string,
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	active: PropTypes.bool,
	onPress: PropTypes.func,
}

iconLabel.defaultProps = {
	iconName: 'hash',
	text: 'Label',
	noMargin: false,
	active: false,
	onPress: null
}
