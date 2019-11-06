import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ScrollView,
	TextInput,
	Picker
} from 'react-native';

import TinyLabelText from 'prototipo-native/app/components/tiny-label-text';
import styles from './edit-criteria-screen-style';
import PrimaryBtn from 'prototipo-native/app/components/primary-btn';
import SuccessBtn from 'prototipo-native/app/components/success-btn';
import DangerBtn from 'prototipo-native/app/components/danger-btn';

export default class EditCriteriaScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: null,
			data: null,
			isNew: false
		}
	}

	static navigationOptions = { headerLeft: null,
		title: 'Crear/Editar'
	}


	componentDidMount() {
		const { navigation } = this.props;
		const item = navigation.getParam('item', 'no-item');
		const data = navigation.getParam('data', 'no-data');
		this.setState({ 
			item: item,
			data: data,
			isNew: (item === 'no-item')? true:false
		});
		
	}
	
	render () {

		if (this.state.data || this.state.item) return (
			<View style={styles.container}>
				<Text style={styles.bodyText}>EditCriteriaScreen</Text>
				<TinyLabelText 
					text="Nombre del criterio"
				/>
				<View style={styles.marginHori}>
					<TextInput
						placeholder="nombre...."
						onChangeText={(text) => alert(text)}
						value={this.state.isNew? '':this.state.item.criterio}
					/>
				</View>
				<TinyLabelText 
					text="Selecciona si es Cuantitativo o Cualitativo"
				/>
				<TinyLabelText 
					text="Ponderación"
				/>
				<View style={styles.marginHori}>
					<TextInput
						placeholder="Ponderación"
						onChangeText={(text) => criteria = text}
						value={this.state.isNew? '':this.state.item.Ponderación}
					/>
				</View>
			</View>
		);
		else return(<Text style={styles.bodyText}>crear/editar</Text>);
	}
}
