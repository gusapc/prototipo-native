import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import "prototipo-native/config/ReactotronConfig";

import AppNavigator from "./app/Router";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<AppNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
