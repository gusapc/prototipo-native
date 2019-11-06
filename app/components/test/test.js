import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './test-style';

export default class Test extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = { data: props.data };
	// }

	render () {
		return (
			<View>
				<Text>Test</Text>
			</View>
		);
	}
}

Test.propTypes = {
	// data: PropTypes.array
}

Test.defaultProps = {
	// data: []
}
