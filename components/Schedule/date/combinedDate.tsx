import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import TextStyles from '../../../styles/textStyles';
import ScheduleStyles from '../../../styles/scheduleStyles';

// The day of week shown above each group
export const CombinedDate = (props) => {
    return (
        <View style = {ScheduleStyles.combinedDate}>
            <Text style = {[ScheduleStyles.dayOfWeek, TextStyles.boldText]}>{ props.dayOfWeek }</Text>
            <Text style = {TextStyles.boldText}>, </Text>
            <Text style = {TextStyles.boldText}>{ props.month }</Text>
            <Text style = {TextStyles.boldText}> </Text>
            <Text style = {TextStyles.boldText}>{ props.date }</Text>
        </View>
    );
}

export default CombinedDate;