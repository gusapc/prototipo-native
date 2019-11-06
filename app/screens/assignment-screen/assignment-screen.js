import React, { Component } from 'react';
import styles from './assignment-screen-style';
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

import TinyLabelText from 'prototipo-native/app/components/tiny-label-text';
import PrimaryBtn from 'prototipo-native/app/components/primary-btn';
import SuccessBtn from 'prototipo-native/app/components/success-btn';
import DangerBtn from 'prototipo-native/app/components/danger-btn';
import SimpleCard from 'prototipo-native/app/components/simple-card';
import ActionSheet from 'react-native-actionsheet'


export default class AssignmentScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refresh:true,
			data: null,
			proyectos: null,
			criteriosProyectos: null,
			cualitativo:['muy bajo', 'bajo', 'moderado', 'alto', 'muy alto']
		}
		console.disableYellowBox = true; 
	}
	static navigationOptions = { headerLeft: null,
		title: 'Asignacion de valores por criterio y proyectos'
	}

	componentDidMount() {
		const { navigation } = this.props;
		const data = navigation.getParam('data', 'no-data');
		const proyectos = navigation.getParam('proyectos', 'no-proyectos');
		let criteriosProyectos = proyectos.map( (e, i) => data.map( (d, j) => (j === 0) ? e.identificador:''));
		if (this.state.data === null || this.state.proyectos === null) this.setState({ 
			data: data,
			proyectos: proyectos,
			criteriosProyectos: [ 
				[ "A",24, 43000, 6, 3, 3, 10,],
				[ "B", 11, -12000, 10, 4, 1, 70,],
				[ "C", 8, 5000, 8, 2, 2, 50,],
				[ "D", 5, 21000, 3, 1, 0, 100,],
			]
		});
	}

	showActionSheet = () => this.ActionSheet.show()

	renderItem = ({item, index}) => /*item.isDelete? <View/> : */(
			<SimpleCard smallMargin={true}>
				<View style={styles.card}>
					<View style={styles.rowView}>
						<Text>{item.criterio}</Text>
					</View>
					{
						this.state.criteriosProyectos.map((e, i) => {
							if (index === 0) return (
								<View style={styles.rowView}>
									<Text>{e[index]}</Text>
								</View>
							);
							else {
								if (item.tipo) return (
									<View style={styles.rowView}>
										<TextInput
											placeholder="#"
											keyboardType='numeric'
											textContentType='telephoneNumber'
											onChangeText={(text) => {
													let temp = this.state.criteriosProyectos;
													temp[i][index] = text;
													this.setState({ 
														criteriosProyectos: temp,
														refresh: !this.state.refresh
													});
												}
											}
											value={this.state.criteriosProyectos[i][index] + ''}
										/>
									</View>
								);
								let temp = this.state.criteriosProyectos;
								if (this.state.criteriosProyectos[i][index] === '') {
									temp[i][index] = 0;
									this.setState({ 
										criteriosProyectos: temp,
										refresh: !this.state.refresh,
									});
									return <View style={styles.rowView} />
								}
								let p = this.state.criteriosProyectos[i][index];
								return (
									<View style={styles.rowView}>
										<Text onPress={() => this.setState({
												i: i,
												index: index
											}, () => {
												this.showActionSheet();
											})}> {this.state.cualitativo[p] + ' ▼'}</Text>
										<ActionSheet
											ref={o => this.ActionSheet = o}
											title={'Asignar categoría'}
											options={this.state.cualitativo}
											onPress={(indexActionSheet) => {
												let array = this.state.criteriosProyectos;
												array[this.state.i][this.state.index] = indexActionSheet;
												this.setState({ 
													criteriosProyectos: array,
													refresh: !this.state.refresh,
												});
											}}
										/>
									</View>
								);
							}
						})
					}
					
				</View>
			</SimpleCard>
	);

	keyExtractor = (item, index) => item.id.toString();

	render () {
		return (
			<View style={styles.container}>
				<ScrollView style={[styles.scrollContent, styles.marginHori]}>
					<View style={styles.list}>
						<FlatList
							data={this.state.data}
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
						onPress={() => {
							let isString = false;
							this.state.criteriosProyectos.map( a => a.map((e, i) => {
								if(i != 0) if(isNaN(e)) isString = true;
							}));
							if (isString) {
								alert('todos los valores cuantitativos deben ser numericos');
								return
							}
							this.props.navigation.navigate('MatrixScreen', {
								data: this.state.data,
								proyectos: this.state.proyectos,
								criteriosProyectos: this.state.criteriosProyectos.map( a => a.map((e, i) => (i == 0)? e:parseFloat(e)))
							});
						}}
					/>
				</View>
			</View>
		);
	}
}
