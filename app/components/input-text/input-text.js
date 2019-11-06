import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TextInput
} from 'react-native';

import styles from './input-text-style';
import { color } from 'prototipo-native/app/styles';

export default class InputText extends Component {

	render () {
		return (
			<View style={[styles.bordered, (!this.props.noMargin && styles.marginHorizontal)]}>
				<TextInput 
					placeholderTextColor={color.light}
					selectionColor={styles.disabled}
					underlineColorAndroid={color.transparent}
					style={styles.text}
					placeholder={this.props.placeholder}
				/>
			</View>
		);
	}
}

InputText.propTypes = {
	placeholder: PropTypes.string,
	noMargin: PropTypes.bool

}

InputText.defaultProps = {
	placeholder: "Placeholder",
	noMargin: false
}
