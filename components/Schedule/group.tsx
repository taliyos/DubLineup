import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';

import Date from './date/date';
import DayOfWeek from './date/dayOfWeek';
import CombinedDate from './date/combinedDate';
import Item from './item';


import ScheduleStyles from '../../styles/scheduleStyles';
import TextStyles from '../../styles/textStyles';

// This is a Schedule item. It contains information about a single item on the schedule
export const Group = () => {

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

    return (
        <View style = {ScheduleStyles.group}>
            <CombinedDate/>
            <FlatList contentContainerStyle = {ScheduleStyles.showContainer}
                data = {testItems}
                renderItem = {Item}
                numColumns={3}
                 />
            </View>
    );
}

export default Group;