import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../../styles/textStyles';
import ScheduleStyles from '../../../styles/scheduleStyles';

// The day of week shown above each group
export const DayOfWeek = () => {
    return (
        <View style = {ScheduleStyles.dayOfWeek}>
            <Text style = {TextStyles.boldText}>Friday</Text>
        </View>
    );
}

export default DayOfWeek;