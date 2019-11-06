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

import TinyLabelText from 'prototipo-native/app/components/tiny-label-text';
import PrimaryBtn from 'prototipo-native/app/components/primary-btn';
import SuccessBtn from 'prototipo-native/app/components/success-btn';
import DangerBtn from 'prototipo-native/app/components/danger-btn';
import SimpleCard from 'prototipo-native/app/components/simple-card';
import ActionSheet from 'react-native-actionsheet'
import styles from './analysis-screen-style';
import Feather from 'react-native-vector-icons/Feather';

export default class AnalysisScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			proyectos: null,
			invertir: 'proyectos'
		}
	}



	static navigationOptions = { headerLeft: null,
		title: 'Análisis de costos'
	}

	componentDidMount() {
		const { navigation } = this.props;
		const proyectos = navigation.getParam('proyectos', 'no-proyectos');
		proyectos.map((v, i) => v.invertir = (i == 0) ? '¿invertir?' : false )
		console.log(proyectos);
		this.setState({ 
			proyectos: proyectos,
			dinero: 0,
			propuesta: null,
		});
	}

	renderItem = ({item}) => (
		<SimpleCard smallMargin={true}>
			<View style={styles.card}>
				<View style={styles.rowView}>
					<Text>{item.prioridad}</Text>
				</View>
				<View style={styles.rowView}>
					<Text>{item.identificador}</Text>
				</View>
				<View style={styles.rowView}>
					<Text>{item.costo}</Text>
				</View>
				<View style={styles.rowView}>
					{(item.invertir === '¿invertir?')? <Text>{item.invertir}</Text>:<Feather 
						name={item.invertir? 'check-square':'slash'}
						color={item.invertir? '#d4edda':'#e24c4c'}
						size={20}	
					/>}
				</View>
			</View>
		</SimpleCard>
	);


	render () {
		return (
			<View style={styles.container}>
				<View style={{flex: .4, flexDirection: 'row'}}>
					<View style={[styles.centerInputs2]}>
						<View style={[styles.centerInputs]}>
							<TinyLabelText 
								text="Presupuesto de inversión"
							/>
							<View style={styles.marginHori}>
								<TextInput
									placeholder="$ $ $ $ $ $ $ $"
									onChangeText={(text) => this.setState({ propuesta: text, dinero: text })}
									value={this.state.propuesta}
								/>
							</View>
						</View>
						<View style={{marginTop: 10}}>
							<SuccessBtn 
								text='calcular'
								marginHorizontal
								addShadow
								onPress={() => {
									if (isNaN(this.state.propuesta)) {
										alert('el valor de la propuesta debser numerico');
										return;
									}
									let temp = this.state.proyectos;
									let dinero = parseFloat(this.state.dinero);
									
									temp.map( (v, i) => {
										if(v.costo <= dinero){
											dinero -= v.costo;
											v.invertir = true;
										} else if (i != 0) v.invertir = false;
									});

									this.setState({ 
										proyectos: temp,
										refresh: !this.state.refresh
									});
								}}
							/>
						</View>
					</View>
				</View>
				<ScrollView style={[styles.scrollContent, styles.marginHori]}>
					<View style={styles.list}>
						<FlatList
							data={this.state.proyectos}
							keyExtractor={this.keyExtractor}
							extraData={this.state.refresh}
							renderItem={this.renderItem}/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
