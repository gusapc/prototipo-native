import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

import styles from './message-input-text-style';
import { color } from 'prototipo-native/app/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class MessageInputText extends Component {
	constructor(props) {
	  super(props);
	  this.state = { text: '' };
	};
	render () {
		return (
			<View style={[styles.row, styles.bordered, (!this.props.noMargin && styles.marginHorizontal)]}>
				<View style={styles.flex1}>
					<TextInput 
						placeholderTextColor={color.light}
						selectionColor={styles.disabled}
						underlineColorAndroid={color.transparent}
						style={styles.text}
						placeholder={this.props.placeholder}
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
					/>
				</View>
				<TouchableOpacity 
					onPress={this.props.onPress}
					style={[styles.marginLeft]}>
					<MaterialIcons name="send" size={24} color={this.state.text ? color.dark : color.light}/>
				</TouchableOpacity>

			</View>
		)
	}
}

MessageInputText.propTypes = {
	placeholder: PropTypes.string,
	noMargin: PropTypes.bool,
	onPress: PropTypes.func
}

MessageInputText.defaultProps = {
	placeholder: 'placeholder',
	noMargin: false,
	onPress: null
}
