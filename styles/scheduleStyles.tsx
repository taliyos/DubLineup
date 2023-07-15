import { StyleSheet, Dimensions } from "react-native";

const ScheduleStyles = StyleSheet.create({
    schedule: {
        backgroundColor: "#0f0f0f",

        paddingHorizontal: 2.5,

        flexDirection: "column",
        justifyContent: "space-between",
        gap: 5
    },
    group: {
        // backgroundColor: "red",

        flexDirection: "column",
        justifyContent: "center"
        
    },
    date: {
        // backgroundColor: "blue",

        padding: 10,

        flexDirection: "column",
        justifyContent: "flex-start",

        alignItems: "center",

        marginTop: 15
    },
    dayAndShow: {
        // flexDirection: "column"
    },
    dayOfWeek: {
        alignSelf: "flex-end",
        paddingLeft: 10,
    },
    combinedDate: {
        flexDirection: "row",
        justifyContent: "center"
    },
    showContainer: {
        // backgroundColor: "gray",
        padding: 10,
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 5
    },
    item: {
        backgroundColor: "#ee5522",

        width: 110,
        height: 170,

        margin: 5,

        borderRadius: 5
        
    }
});

export default ScheduleStyles;