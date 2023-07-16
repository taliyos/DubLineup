import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';

import Date from './date/date';
import DayOfWeek from './date/dayOfWeek';
import CombinedDate from './date/combinedDate';
import Item from './item';


import ScheduleStyles from '../../styles/scheduleStyles';
import TextStyles from '../../styles/textStyles';
import ShowContainer from '../../interfaces/showContainer';

// This is a Schedule item. It contains information about a single item on the schedule
export const Group = (props : ShowContainer) => {

    return (
        <View style = {ScheduleStyles.group}>
            <CombinedDate month = {props.month} date = {props.date} dayOfWeek = {props.dayOfWeek}/>
            <View style = {ScheduleStyles.showContainer}>
                <FlatList contentContainerStyle = {ScheduleStyles.shows}
                    data = {props.shows}
                    renderItem = {(data) => <Item name = {props.shows[data.index].name} 
                                                    platforms = {props.shows[data.index].platforms}
                                                    episode = {props.shows[data.index].episode}
                                                    releaseDate = {props.shows[data.index].releaseDate}/>}
                    numColumns= {3}
                    scrollEnabled = {false}
                />
            </View>
            </View>
    );
}

export default Group;