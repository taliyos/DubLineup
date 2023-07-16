import * as data from "../config/teamup.json";
import Show from "../interfaces/show";
import ShowContainer from "../interfaces/showContainer";
import ShowUtils, { Days, Months } from "../utils/ShowUtils";

export default class ScheduleRetriever {

    public static instance = null;

    // Singleton access to schedule retriever
    public static getInstance() {
        if (this.instance == null) this.instance = new ScheduleRetriever();
        return this.instance;
    }

    public async updateSchedule() {

        // Get Schedule from TeamUp
        const teamupJson = await this.retrieveSchedule();

        // Condense Data
        const showList = this.createSchedule(teamupJson);
        //console.log(schedule);

        // Get List of Shows
        const uniqueShows = this.getUniqueShows(showList);
        console.log(uniqueShows);
        //console.log("-");

        // Find Additional Data for Unknown Shows (AniList)
        
        // Save Shows To Database

        // Sync AniList Information

        // MAINTENANCE: Remove entries older than 30 Days

        return this.splitSchedule(showList);

    }

    // Retrieves the schedule from TeamUp
    private async retrieveSchedule() {
        let startDate = new Date();
        startDate.setDate(startDate.getDate() + data.startDay);
        let endDate = new Date();
        endDate.setDate(startDate.getDate() + data.totalDays);

        let startStr = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1}-${startDate.getUTCDate()}`;
        let endStr = `${endDate.getUTCFullYear()}-${endDate.getUTCMonth() + 1}-${endDate.getUTCDate()}`

        return (await fetch(`https://api.teamup.com/${data.calendar}/events?startDate=${startStr}&endDate=${endStr}`, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Teamup-Token": data.apiKey
            }
        })).json();
    }

    private createSchedule(teamupJson) {
        let schedule : Show[] = [];

        for (let i = 0; i < teamupJson.events.length; i++) {
            let event = teamupJson.events[i];

            let show : Show = {
                name: ShowUtils.getName(event.title),
                platforms: ShowUtils.getPlatforms(event),
                episode: ShowUtils.getEpisode(event.title),
                releaseDate: ShowUtils.getReleaseDate(event)
            };

            schedule.push(show);
        }

        return schedule;
    }

    private getUniqueShows(showList) {
        let uniqueShows = new Set<string>();
        for (let i = 0; i < showList.length; i++) {
            uniqueShows.add(showList[i].name);
        }
        return uniqueShows;
    }

    // Separates shows into containers
    private splitSchedule(showList : Show[]) : ShowContainer[] {

        let schedule : ShowContainer[] = [];

        let container : ShowContainer;

        for (let i = 0; i < showList.length; i++) {
            if (i == 0 || container.month != showList[i].releaseDate.month || container.date != showList[i].releaseDate.date) {
                if (i != 0) schedule.push(container);
                container = {
                    month: showList[i].releaseDate.month,
                    date: showList[i].releaseDate.date,
                    dayOfWeek: Days[showList[i].releaseDate.fullDate.getDay()],
                    shows: []
                }
            }
            container.shows.push(showList[i]);
        }

        schedule.push(container);

        return schedule;
    }


}