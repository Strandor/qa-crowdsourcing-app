import React from "react";
import { Text, View } from "react-native";
import { IProps, onPress } from "./interface";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

import ViewMoreText from 'react-native-view-more-text';

const Collapsable = (props: IProps) => {

	const {children, lines} = props;
	const styleProps = (props.style as Object) ?? {};

	function renderViewMore(onPress: onPress){
		return(
			<View style={{...styles.collapseBtnBorder}}>
				<AntDesign name="down" onPress={onPress} size={16} style={{...styles.collapseBtn}} />
			</View> 
		);
	};
	
	function renderViewLess(onPress: onPress){
		return(
			<View style={{...styles.collapseBtnBorder}}>
				<AntDesign name="up" onPress={onPress} size={16} style={{...styles.collapseBtn}} />
			</View>	
		);
	};

	const DEFAULT_LINES = 2;

	return (
		<ViewMoreText
			numberOfLines={lines ?? DEFAULT_LINES}
			renderViewMore={renderViewMore}
			renderViewLess={renderViewLess}>
			<Text {...props} style={{ ...styles.text, ...styleProps }}>
				{children}
			</Text>
		</ViewMoreText>
		
	);
};

export default Collapsable;