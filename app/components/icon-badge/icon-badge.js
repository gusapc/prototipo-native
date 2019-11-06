import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';
import IconBadge from 'react-native-icon-badge';
import Feather from 'react-native-vector-icons/Feather';

import styles from './icon-badge-style';
import { color } from 'prototipo-native/app/styles';

export default function iconBadge (props) {
	return (
		<View style={[styles.row, styles.alignCenter]}>
			<IconBadge
				MainElement={
					<View style={styles.icon}>
						<Feather name="message-circle" size={30} color={color.dark}/>
					</View>
				}
				BadgeElement={
					<Text style={styles.badgeElement}>{props.count}</Text>
				}
				Hidden={props.count==0}
				IconBadgeStyle={[styles.badgeStyle]}
			/>
		</View>
	)
}

iconBadge.propTypes = {
	count: PropTypes.number
}

iconBadge.defaultProps = {
	count: 0
}
