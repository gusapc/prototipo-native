import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './footer-style';
import Divider from 'prototipo-native/app/components/divider';
import SubtitleText from 'prototipo-native/app/components/subtitle-text';
import BodyText from 'prototipo-native/app/components/body-text';
import ArrowCard from 'prototipo-native/app/components/arrow-card';

export default class Footer extends Component {
	render () {
		return (
			<View style={styles.bg}>
				<View style={styles.footerContent}>
					<SubtitleText 
						bold
						text="Powered by TIC"
					/>
					<BodyText 
						text="Cotemar S.A. de C.V. © 2018"
					/>
				</View>
				<Divider />
				<View>
					<ArrowCard 
						onPress={() => alert('Go to terms & conditions')}
						text="Términos y Condiciones"
					/>
				</View>
				<Divider />
				<View>
					<ArrowCard 
						onPress={() => alert('Go to disclamer')}
						text="Disclaimer"
					/>
				</View>
			</View>
		);
	}
}

Footer.propTypes = {
	// data: PropTypes.array
}

Footer.defaultProps = {
	// data: []
}
