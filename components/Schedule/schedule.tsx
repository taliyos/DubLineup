import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';

import Group from './group';
import Item from './item';

import ScheduleStyles from '../../styles/scheduleStyles';
import TextStyles from '../../styles/textStyles';
import ScheduleRetriever from '../../api/scheduleRetriever';

// The main schedule component.
// Adding this to a view will populate the full schedule
export const Schedule = () => {

    const [testItems, setTestItems] = useState([
        {
            name: "Mushoku Tensei: Jobless Reincarnation",
            platforms: [
                {
                    name: "Crunchyroll",
                    link: "https://www.crunchyroll.com/series/G24H1N3MP/"
                },
                {
                    name: "Funimation",
                    link: "https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation"
                }
            ],
            episode: 8,
            releaseTime: "3:30PM EST"
        },
        {
            name: "Demon Slayer: Swordsmith Village Arc",
            platforms: [
                {
                    name: "Crunchyroll",
                    link: "https://www.crunchyroll.com/series/GY5P48XEY/"
                },
                {
                    name: "Funimation",
                    link: "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/"
                }
            ],
            releaseTime: "4:30PM EST"
        },
        {
            name: "Demon Slayer: Swordsmith Village Arc",
            platforms: [
                {
                    name: "Crunchyroll",
                    link: "https://www.crunchyroll.com/series/GY5P48XEY/"
                },
                {
                    name: "Funimation",
                    link: "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/"
                }
            ],
            releaseTime: "4:30PM EST"
        },
        {
            name: "Demon Slayer: Swordsmith Village Arc",
            platforms: [
                {
                    name: "Crunchyroll",
                    link: "https://www.crunchyroll.com/series/GY5P48XEY/"
                },
                {
                    name: "Funimation",
                    link: "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/"
                }
            ],
            releaseTime: "4:30PM EST"
        },
    ]);

    const [schedule, setSchedule] = useState([]);

    if (schedule.length == 0) {
        ScheduleRetriever.getInstance().updateSchedule().then((response) => {setSchedule(response);});
    }

    return (
        <View>
            <ScrollView contentContainerStyle = {ScheduleStyles.schedule}>
                {
                    schedule.map((prop, key) => {
                        return <Group key = {key} month = {prop.month} date = {prop.date} dayOfWeek = {prop.dayOfWeek} shows = {prop.shows}/>
                    })
                }
            </ScrollView>
        </View>
    );
}

/*
<ScrollView contentContainerStyle = {ScheduleStyles.schedule}>
                <Group ></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
            </ScrollView>
*/

export default Schedule;