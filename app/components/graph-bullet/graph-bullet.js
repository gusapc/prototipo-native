import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BodyText from 'prototipo-native/app/components/body-text';

import styles from './graph-bullet-style';
import { color } from 'prototipo-native/app/styles';

export default function graphBullet (props) {
	return (
		<View style={[(!props.noMargin && styles.marginHorizontal)]}>
			<View style={[styles.row, styles.alignCenter]}>
				<Icon color={props.color} size={10} name="circle"/>

				<BodyText
					dark
					text={props.text}
				/>
			</View>
		</View>
	)
}

graphBullet.propTypes = {
	noMargin: PropTypes.bool,
	text: PropTypes.string,
	color: PropTypes.string
}

graphBullet.defaultProps = {
	noMargin: false,
	text: "graphBullet",
	color: color.blue
}
