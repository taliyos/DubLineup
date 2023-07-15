import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../styles/textStyles';
import ScheduleStyles from '../../styles/scheduleStyles';

// This is a Schedule item. It contains information about a single item on the schedule
export const Item = () => {
    return (
        <View style = {ScheduleStyles.item}>
            <Text style = {TextStyles.normalText}>This is an item</Text>
        </View>
    );
}

export default Item;