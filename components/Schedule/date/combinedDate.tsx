import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../../styles/textStyles';
import ScheduleStyles from '../../../styles/scheduleStyles';

// The day of week shown above each group
export const CombinedDate = () => {
    return (
        <View style = {ScheduleStyles.combinedDate}>
            <Text style = {[ScheduleStyles.dayOfWeek, TextStyles.boldText]}>Friday</Text>
            <Text style = {TextStyles.boldText}>, </Text>
            <Text style = {TextStyles.boldText}>July</Text>
            <Text style = {TextStyles.boldText}> </Text>
            <Text style = {TextStyles.boldText}>14</Text>
        </View>
    );
}

export default CombinedDate;