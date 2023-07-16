import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../styles/textStyles';
import ScheduleStyles from '../../styles/scheduleStyles';

import Show from '../../interfaces/show';

// This is a Schedule item. It contains information about a single item on the schedule
export const Item = (props : Show) => {
    return (
        <View style = {ScheduleStyles.item}>
            <Text style = {TextStyles.normalText}>{props.name}</Text>
            <Text style = {TextStyles.normalText}>{props.releaseDate.fullDate.toLocaleTimeString()}</Text>
        </View>
    );
}

export default Item;