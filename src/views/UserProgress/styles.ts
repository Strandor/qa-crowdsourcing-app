import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	padTitleTop: {
		paddingTop: 40,
	},
	spaceBetween: {
		justifyContent: "space-between",
	},
	lock: {
		top: 0,
		position: "absolute",
		right: 0,
		padding: 15,
	},
});

export default styles;
