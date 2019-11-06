import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ScrollView,
	TextInput,
	Picker,
	FlatList,
	TouchableHighlight
} from 'react-native';

import styles from './registry-screen-style';
import PrimaryBtn from 'prototipo-native/app/components/primary-btn';
import TinyLabelText from 'prototipo-native/app/components/tiny-label-text';
import SuccessBtn from 'prototipo-native/app/components/success-btn';
import DangerBtn from 'prototipo-native/app/components/danger-btn';
import SimpleCard from 'prototipo-native/app/components/simple-card';

export default class RegistryScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lastId: 1,
			refresh:true,
			data: null,
			identificador: '',
			descripcion: '',
			costo: '',
			proyectos: [{ 
				"costo": "costo",
				"descripcion": "descripcion",
				"id": 0,
				"identificador": "identificador",
			},{
				"costo": 30000,
				"descripcion": "a",
				"id": 1,
				"identificador": "A",
			},
			{
				"costo": 30000,
				"descripcion": "b",
				"id": 2,
				"identificador": "B",
			},
			{ 
				"costo": 10000,
				"descripcion": "c",
				"id": 3,
				"identificador": "C",
			},{
				"costo": 60000,
				"descripcion": "d",
				"id": 4,
				"identificador": "D",
			},]
		}
	}

	static navigationOptions = { headerLeft: null,
		title: 'Registro de proyectos'
	}

	componentDidMount() {
		const { navigation } = this.props;
		const data = navigation.getParam('data', 'no-data');
		if (this.state.data === null || this.state.proyectos === null) this.setState({ data: data });

	}

	renderItem = ({item}) => (
		<TouchableHighlight 
			// onPress={() => {
			// 		if(item.id == 0) return;
			// 		this.newAndEdit( item.id, false);
			// 	}
			// }
			underlayColor='#cacbcc00'>
			<SimpleCard smallMargin={true}>
				<View style={styles.card}>
					<View style={styles.rowView}>
						<Text>{item.identificador}</Text>
					</View>
					<View style={styles.rowView}>
						<Text>{item.descripcion}</Text>
					</View>
					<View style={styles.rowView}>
						<Text>{item.costo}</Text>
					</View>
				</View>
			</SimpleCard>
		</TouchableHighlight>
	);

	keyExtractor = (item, index) => String(item.id);


	render () {
		return (
			<View style={styles.container}>
				<View style={{flex: .4, flexDirection: 'row'}}>
					<View style={[styles.centerInputs2]}>
						<View style={[styles.centerInputs]}>
							<TinyLabelText 
								text="identificador"
							/>
							<View style={styles.marginHori}>
								<TextInput
									placeholder="identificador...."
									onChangeText={(text) => this.setState({ identificador: text })}
									value={this.state.identificador}
								/>
							</View>
						</View>
						<View style={[styles.centerInputs]}>
							<TinyLabelText 
								text="descripcion"
							/>
							<View style={styles.marginHori}>
								<TextInput
									placeholder="descripcion...."
									onChangeText={(text) => this.setState({ descripcion: text })}
									value={this.state.descripcion}
								/>
							</View>
						</View>
						<View style={[styles.centerInputs, { marginBottom: 10}]}>
							<TinyLabelText 
								text="costo"
							/>
							<View style={styles.marginHori}>
								<TextInput
									placeholder="costo...."
									onChangeText={(text) => this.setState({ costo: text })}
									value={this.state.costo}
								/>
							</View>
						</View>
						<SuccessBtn 
							text='Agregar'
							marginHorizontal
							addShadow
							onPress={() => {
								// if(!Number.isDouble(parseFloat(this.state.costo))) {
								// 	alert('el costo es un dato numerico');
								// 	return;
								// }
								if (this.state.identificador == '' ||this.state.descripcion == '' ||this.state.costo == '' ) {
									alert('valor no asignado');
									return;
								}
								if( !(parseFloat(this.state.costo) % 1 === 0)) {
										alert('el costo debe ser numerico');
										return;
									}
								let proyectos = this.state.proyectos;
								let i = {
									id: this.state.proyectos.length,
									identificador: this.state.identificador,
									descripcion: this.state.descripcion,
									costo: this.state.costo,
								};
								proyectos.push(i);
								this.setState({
									lastId: this.state.lastId + 1,
									identificador: '',
									descripcion: '',
									costo: '',
									proyectos: proyectos,
									refresh: !this.state.refresh
								})
							}}
						/>
					</View>
				</View>
				<ScrollView style={[styles.scrollContent, styles.marginHori2]}>
					<View style={styles.list}>
						<FlatList
							data={this.state.proyectos}
							keyExtractor={this.keyExtractor}
							extraData={this.state.refresh}
							renderItem={this.renderItem}/>
					</View>
				</ScrollView>
				<View style={{ marginVertical: 10 }}>
					<PrimaryBtn 
						text="Siguiente"
						marginHorizontal
						addShadow
						onPress={() => ( this.state.proyectos.length > 2) ? this.props.navigation.navigate('AssignmentScreen', {
								data: this.state.data,
								proyectos: this.state.proyectos
							}) : alert('deberia haber mas proyectos')
						}
					/>
				</View>
			</View>
		);
	}
}
