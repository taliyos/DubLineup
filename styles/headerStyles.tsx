import { StyleSheet, Dimensions } from "react-native";

const HeaderStyles = StyleSheet.create({
    header: {
        backgroundColor: "black",// linear-gradient(184deg, #1e272e 0, rgba(15, 24, 31, 0.75) 75vh);
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 15,
        paddingHorizontal: 10,
        alignSelf: "center",


        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    subtitle: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end"

    }
});

export default HeaderStyles;