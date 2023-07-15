import React, { useState } from 'react';
import { Text, View, ScrollView, } from 'react-native';

import Group from './group';

import ScheduleStyles from '../../styles/scheduleStyles';
import TextStyles from '../../styles/textStyles';

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


    return (
        <View>
            <ScrollView contentContainerStyle = {ScheduleStyles.schedule}>
                <Group></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
                <Group></Group>
            </ScrollView>
        </View>
    );
}

export default Schedule;