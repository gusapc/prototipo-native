import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image
} from 'react-native';
import TinyLabelText from 'prototipo-native/app/components/tiny-label-text';
import BodyText from 'prototipo-native/app/components/body-text';

import styles from './user-info-style';


export default function userInfo (props) {

	return (
		<View style={[ styles.row, styles.alignCenter, styles.smallMarginHorizontal]}>
			<View style={styles.marginIcon}>
				<Image 
					source={require('prototipo-native/assets/msgLogo.png')}
					defaultSource={require('prototipo-native/assets/msgLogo.png')}
				/>
			</View>
			<View>
				<BodyText darker noMargin text={props.name} />
				<TinyLabelText noMargin text={props.email} />
			</View>
		</View>
	);
}

userInfo.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string
}

userInfo.defaultProps = {
	name: 'user',
	email: 'cotemar@cotemar.com'
}
