// Use this file to create all app navigators.

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

import HomeScreen from "prototipo-native/app/screens/home-screen";
import CriteriaScreen from "prototipo-native/app/screens/criteria-screen";
import RegistryScreen from "prototipo-native/app/screens/registry-screen";
import AssignmentScreen from "prototipo-native/app/screens/assignment-screen";
import MatrixScreen from "prototipo-native/app/screens/matrix-screen";
import AnalysisScreen from "prototipo-native/app/screens/analysis-screen";
import EditCriteriaScreen from "prototipo-native/app/screens/edit-criteria-screen";

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
// import { stackNavigatorOptions } from 'prototipo-native/app/services/navigatorOptions';
import { ApplicationStyles } from "prototipo-native/app/styles";

const MainNavigator = createStackNavigator(
	{
		HomeScreen,
		CriteriaScreen,
		RegistryScreen,
		AssignmentScreen,
		MatrixScreen,
		AnalysisScreen,
		EditCriteriaScreen
	},
	{
		initialRouteName: "HomeScreen",
		navigationOptions: {
			...ApplicationStyles.stackNavigatorOptions
		}
	}
);

export default createAppContainer(MainNavigator);
