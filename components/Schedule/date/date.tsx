import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../../styles/textStyles';
import ScheduleStyles from '../../../styles/scheduleStyles';

// The Date column attached to a schedule group
export const Date = () => {
    return (
        <View style = {ScheduleStyles.date}>
            <Text style = {TextStyles.normalText}>JUL</Text>
            <Text style = {TextStyles.boldText}>14</Text>
        </View>
    );
}

export default Date;