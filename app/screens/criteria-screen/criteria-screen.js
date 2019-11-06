import React, { Component } from 'react';
import styles from './criteria-screen-style';
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
import Feather from 'react-native-vector-icons/Feather';

import DialogManager, { 
	ScaleAnimation,
	DialogContent
} from 'react-native-dialog-component';
import ActionSheet from 'react-native-actionsheet'
import ActionSheet2 from 'react-native-actionsheet'

export default class CriteriaScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			refresh:true,
			i: 0,
			torm: false
		}
	}

	static navigationOptions = { headerLeft: null,
		title: 'Establecimiento de criterios'
	}
	
	componentDidMount() {
		const { navigation } = this.props;
		const data = navigation.getParam('data', 'no-data');
		if (this.state.data === null) this.setState({ data: data });
	}

	showActionSheet = () => this.ActionSheet.show()
	showActionSheet2 = () => this.ActionSheet2.show()
	
	renderItemTrue = (item) => (
		<SimpleCard smallMargin={true}>
			<View style={styles.card}>
				<View style={styles.rowView}>
					<TextInput
						placeholder="nombre"
						onChangeText={(text) => {
								let temp = this.state.data;
								temp[item.id].criterio = text;
								this.setState({ 
									data: temp,
									refresh: !this.state.refresh
								});
							}
						}
						value={this.state.data[item.id].criterio}
					/>
				</View>
				<View style={styles.rowView2}>
					{item.id == 0? <Text>Mejor</Text>:
						<View>
							<Text onPress={() => this.setState({
								i: item.id
							}, () => {
								this.showActionSheet();
							})}> {(item.mejor? 'mayor':'menor') + '  ▼'}</Text>
							<ActionSheet
								ref={o => this.ActionSheet = o}
								title={'Mejor calificación es otorgada al valor'}
								options={['mayor', 'menor']}
								onPress={(index) => {
									let array = this.state.data;
									array[this.state.i].mejor = (index == 0)? true:false;
									this.setState({ 
										data: array,
										refresh: !this.state.refresh,
									});
								}}
							/>
						</View>
					}
				</View>
				<View style={styles.rowView2}>
					{item.id == 0? <Text>Tipo</Text>:
						<View>
							<Text onPress={() => this.setState({
								i: item.id
							}, () => {
								this.showActionSheet2();
							})}> {(item.tipo? 'Cuantitativo':'Cualitativo') + '  ▼'}</Text>
							<ActionSheet2
								ref={o => this.ActionSheet2 = o}
								title={'Cuantitativo o Cualitativo'}
								options={['Cuantitativo', 'Cualitativo']}
								onPress={(index) => {
									let array = this.state.data;
									array[this.state.i].tipo = (index == 0)? true:false;
									this.setState({ 
										data: array,
										refresh: !this.state.refresh,
									});
								}}
							/>
						</View>
					}
				</View>
				<View style={styles.rowView2}>
					<TextInput
						placeholder="0"
						keyboardType='numeric'
						textContentType='telephoneNumber'
						onChangeText={(text) => {
								let temp = this.state.data;
								temp[item.id].ponderacion = text;
								this.setState({ 
									data: temp,
									refresh: !this.state.refresh
								});
							}
						}
						value={this.state.data[item.id].ponderacion + ''}
					/>
				</View>
				<View style={styles.rowView2}>
					{item.id == 0? <Text>Eliminar</Text>:<Feather 
						name={'x'}
						size={20}
						onPress={() => Alert.alert(
							'Eliminar',
							'Quieres eliminar este criterio?',
								[
									{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
									{text: 'OK', onPress: () => {
										let temp = this.state.data;
										temp[item.id].isDelete = true;
										this.setState({ 
											data: temp,
											refresh: !this.state.refresh
										});
									}},
								],
							{ cancelable: false }
						)}
					/>}
				</View>
			</View>
		</SimpleCard>
	)


	renderItem = ({item}) => item.isDelete? <View/> : this.renderItemTrue(item)

	keyExtractor = (item, index) => item.id.toString();

	sum = () => {
		let acum = 0;
		try {
			this.state.data.map(cell => ((cell.id != 0) && (!cell.isDelete))? acum += parseInt(cell.ponderacion) : acum += 0 );
		}
		catch(err) {
			console.log(acum);
		}
		return acum;
	}

	render () {
		//if (this.state.data) alert(String(this.state.data[0].id));
		return (
			<View style={[styles.content]}>
				<ScrollView style={[styles.scrollContent, styles.marginHori]}>
					<View style={styles.list}>
						<FlatList
							data={this.state.data}
							keyExtractor={this.keyExtractor}
							extraData={this.state.refresh}
							renderItem={this.renderItem}/>
					</View>
				</ScrollView>
				<SuccessBtn 
					text='Agregar'
					marginHorizontal
					addShadow
					onPress={() => {
						let temp = this.state.data;
						temp.push({
							id: temp.length,
							isDelete: false,
							mejor: false,
							criterio: '',
							tipo: false,
							ponderacion: ''
						});
						this.setState({ 
							data: temp,
							refresh: !this.state.refresh
						});
					}}
				/>
				<View style={{height: 10}}/>
				<PrimaryBtn 
					text={'Siguiente' + '     ( ponderacion = ' + this.sum() + ')'}
					marginHorizontal
					addShadow
					onPress={() => (this.sum() === 100) ? this.props.navigation.navigate('RegistryScreen', {
							data: this.state.data.filter(i => !i.isDelete)
						}) : alert('la suma de la ponderacion debe ser igual a 100')
					}
				/>
				<View style={{height: 10}}/>
			</View>
		);
	}
}
