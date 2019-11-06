import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import styles from './home-screen-style';
import PrimaryBtn from 'prototipo-native/app/components/primary-btn';
import TitleText from 'prototipo-native/app/components/title-text';
import BodyText from 'prototipo-native/app/components/body-text';

export default class HomeScreen extends Component {
	static navigationOptions = { headerLeft: null,
		title: 'Seleccion de proyectos estratégicos'
	}
	render () {
		return (
			<View style={[styles.container, styles.spaceEvenly]}>
				<TitleText text='Prototipo'/>
				<View style={[styles.spaceEvenly, {paddingBottom: '10%', height: '50%'}]}>
					<BodyText dark text='Pp'/>
					<BodyText dark text='Zevoyin'/>
					<BodyText dark text='y Yo'/>
					<BodyText dark text='no quiero programar esta cosa'/>
				</View>
				<PrimaryBtn 
					text="Iniciar"
					marginHorizontal
					addShadow
					onPress={() => this.props.navigation.navigate('CriteriaScreen', {
						data: data
					})}
				/>
			</View>
		);
	}
}


let data= [{
	"criterio": "Criterios",
	"id": 0,
	"isDelete": false,
	"mejor": "mejor",
	"ponderacion": "Ponderación %",
	"tipo": "Tipo",
},{
	"criterio": "Druracion (en meses)4",
	"id": 1,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 15,
	"tipo": true,
},{
	"criterio": "Valor presente neto",
	"id": 2,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 25,
	"tipo": true,
},{
	"criterio": "Periodo de recuperacion de la inversión",
	"id": 3,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 20,
	"tipo": true,
},{
	"criterio": "Riesgo",
	"id": 4,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 20,
	"tipo": false,
},{
	"criterio": "Generación de tecnología propietaria",
	"id": 5,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 15,
	"tipo": false,
},{
	"criterio": "x",
	"id": 6,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 5,
	"tipo": true,
},];