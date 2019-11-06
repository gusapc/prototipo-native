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

import styles from './matrix-screen-style';
export default class MatrixScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			refresh:true,
			data: null,
			proyectos: null,
			criteriosProyectos: null,
			matrix: null,
			total: [],
			prioridad: []
		}
	}

	static navigationOptions = { headerLeft: null,
		title: 'Matriz de decisión con ponderación y peso'
	}


	componentDidMount() {
		const { navigation } = this.props;
		const data = navigation.getParam('data', 'no-data');
		const proyectos = navigation.getParam('proyectos', 'no-proyectos');
		const criteriosProyectos = navigation.getParam('criteriosProyectos', 'no-criteriosProyectos');

		try{

			let n = [];

			for(let h = 0; h < criteriosProyectos[0].length;h++) n.push([]);

			criteriosProyectos.map( (e,i) => e.map((a, j) => n[j].push(a)));

			let m = [];

			for(let h = 0; h < criteriosProyectos[0].length;h++) m.push([]);

			let	total = [];
			let prioridad = []; 

			for(let h = 0; h < criteriosProyectos[0].length;h++) total.push(0);
			for(let h = 0; h < criteriosProyectos[0].length;h++) prioridad.push(0);
			
			n.map((s, u) => m[u] = (s.map((o, i) => {return {
				'idx': i,
				'obj': o
			}}).sort((a, b) => a.obj - b.obj)));

			data.map( (hue, index) => {
				m[index] = (!hue.mejor)? m[index] : m[index].reduceRight( (arr, last, i, coll) => (arr = arr.concat(last)), []);
				let n = hue.tipo? (m[index].length*2)+1:-1;
				m[index].map(y => y.obj = hue.tipo? n-=2: n+=2);
			});

			data.push({
				"criterio": "",
				"id": data.length,
				"isDelete": 0,
				"mejor": 0,
				"ponderacion": 'Total',
				"tipo": 0,
			});

			data.push({
				"criterio": "",
				"id": data.length,
				"isDelete": 0,
				"mejor": 0,
				"ponderacion": 'Prioridad',
				"tipo": 0,
			})

			this.setState({ 
				data: data,
				proyectos: proyectos,
				criteriosProyectos: criteriosProyectos,
				matrix: m,
				prioridad: prioridad,
				total: total
			});
		}catch(err){	
			console.log(err)
		}

	}
	renderItem = ({item, index}) => (
		<SimpleCard smallMargin={true}>
			<View style={styles.card}>
				<View style={styles.rowView}>
					<Text>{item.criterio}</Text>
				</View>
				<View style={styles.rowView}>
					<Text>{item.ponderacion}</Text>
				</View>
				{
					this.state.criteriosProyectos.map((e, i) => {
						if (index === 0) return (
							<View style={styles.rowView}>
								<Text>{e[index]}</Text>
							</View>
						);
						else if ( index === this.state.data.length-1){
							let p = [];
							this.state.proyectos.map(v => p.push(v));
							p = p.sort((a, b) => a.sum - b.sum);
							let m = 0;
							p.map((v,j) => {if(v.sum == this.state.proyectos[i+1].sum) m = j;});
							m = p.length - m; 
							this.state.proyectos[i+1].prioridad = m;
							return (
								<View style={styles.rowView}>
									<Text>{m}</Text>
								</View>
							);
						}
						else if ( index === this.state.data.length-2) {
							let m = this.state.matrix.filter((v, j) => j != 0);
							let n = m.map( (q, w) => q.filter(v => v.idx == i));
							let sum = 0;
							n.map((v, j) => sum += (v[0].obj) * (this.state.data[j+1].ponderacion/100) );
							this.state.proyectos[i+1].sum = sum;
							return (
								<View style={styles.rowView}>
									<Text>{sum}</Text>
								</View>
							);
						}
						else {
							return (
							<View style={styles.rowView}>
								<Text>{this.state.matrix[index].map( (v, j) => {
									if(v.idx === i) {
										return v.obj;
									}
								})}</Text>
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
				<View style={{height: '5%', width: '100%', marginHorizontal: '30%'}}>
					<Text style={styles.bodyText}>Interpretación de los pesos obtenidos: Mayor es mejor</Text>
					<Text style={styles.bodyText}>{'=( 1 muy bajo <<--->> N muy alto =)'}</Text>
				</View>
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
								let temp = this.state.proyectos;
								temp[0].sum = 0,
								temp[0].prioridad = 'Prioridad'
								this.props.navigation.navigate('AnalysisScreen', {
									proyectos: temp.sort((a, b) => a.prioridad - b.prioridad)
								});
							}
						}
					/>
				</View>
			</View>
		);
	}
}
