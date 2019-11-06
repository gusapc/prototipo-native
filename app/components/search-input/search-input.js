import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { metrics, color } from 'prototipo-native/app/styles';

import {
	Text,
	View,
	TextInput
} from 'react-native';

import styles from './search-input-style';
import TouchableIcon from 'prototipo-native/app/components/touchable-icon';
import Feather from 'react-native-vector-icons/Feather';

export default class SearchInput extends Component {

	constructor (props) {
		super(props);
		this.state = { text: props.value, focused: false };
		this.input = null;
		this.onChangeText = this.onChangeText.bind(this);
	}

	onChangeText (text) {
		this.setState({ text });
	}

	render () {
		const cancelButton = this.state.text ? (
			<TouchableIcon
				onPress={() => {
					this.setState({ text: '' });
					this.input.blur();
					this.props.onSearch('');
				}}
				iconName='x'
				iconSize='regular'
				iconColor={color.white}
			/>
		) : null;

		return (
			<View style={[ styles.searchCard, (!this.props.noMargin && styles.marginHorizontal) ]}>
				<Feather
					name='search'
					size={metrics.icons.regular}
					color={color.white}
					style={styles.icon}
				/>
				<TextInput
					placeholder={this.props.placeholder}
					style={styles.input}
					onChangeText={this.onChangeText}
					defaultValue={this.props.value}
					onFocus={() => this.setState({focused: true})}
					onBlur={() => this.setState({focused: false})}
					value={this.state.text}
					placeholderTextColor={color.white}
					returnKeyType='search'
					selectionColor={color.white}
					ref={input => { this.input = input }}
					underlineColorAndroid='transparent'
					onSubmitEditing={() => this.props.onSearch(this.state.text)}
				/>
				{cancelButton}
			</View>
		);
	}
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	text: PropTypes.string,
	noMargin: PropTypes.bool,
	onSearch: PropTypes.func,
}

SearchInput.defaultProps = {
	placeholder: 'placeholder',
	text: '',
	noMargin: false,
	onSearch: () => {}
}

