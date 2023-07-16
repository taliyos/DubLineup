import { StyleSheet, Dimensions } from "react-native";

const ScheduleStyles = StyleSheet.create({
    schedule: {
        backgroundColor: "#0f0f0f",

        paddingHorizontal: 2.5,

        flexDirection: "column",
        alignSelf: "stretch",
        gap: 5
    },
    group: {
        // backgroundColor: "red",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        
    },
    date: {
        // backgroundColor: "blue",
        
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
        justifyContent: "center",
        alignSelf: "center"
    },
    showContainer: {
        flexDirection: "column",
        justifyContent: "center",

        alignSelf: "stretch",
        alignItems: "center",

        marginTop: 5,
    },
    shows: {
        // backgroundColor: "gray",

        justifyContent: "center",
        minWidth: "88%"
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