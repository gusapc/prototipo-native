import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './divider-style';

export default function divider (props) {
	return (
		<View style={[(props.marginVertical && styles.marginVertical), 
				(props.marginHorizontal && styles.marginHorizontal), 
				(props.marginBottom && styles.marginBottom),
				(props.marginTop && styles.marginTop)]}>
			<View  style={[styles.divider, (props.disabled && styles.disabled)]}/>
		</View>
			
	)
}

divider.propTypes = {
	marginVertical: PropTypes.bool,
	marginHorizontal: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginTop: PropTypes.bool,
	disabled: PropTypes.bool
}

divider.defaultProps = {
	marginHorizontal: false,
	marginVertical: false,
	marginBottom: false,
	marginTop: false,
	disabled: false
}
