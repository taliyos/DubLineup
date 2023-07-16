import Platform from "../interfaces/platform";

import * as Funimation from "../data/funimation.json";
import * as Crunchyroll from "../data/crunchyroll.json";
import * as HiDive from "../data/hidive.json";
import * as Netflix from "../data/netflix.json";
import * as HomeVideo from "../data/homevideo.json";
import * as Other from "../data/other.json";

export const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default class ShowUtils {
    
    // Gets the name given the event's title
    public static getName(eventTitle) {
        let name = eventTitle

        // Go to the next word if it starts with a number sign (The Episode Number)
        if (name[0] == '#') {
            name = name.substring(name.indexOf(' ') + 1);
        } 
        // Remove the movie indicator if it's found
        if (name.includes("(Movie)")) {
            name = name.substring(name.indexOf("(Movie)") + 8);
        }
        // Handle end of title
        if (name.includes(" - Season")) {
            name = name.substring(0, name.indexOf(" - Season"));
        }
        if (name.includes("(PREMIERE)")) {
            name = name.substring(0, name.indexOf("(PREMIERE)"));
        }
        if (name.includes("(FINALE)")) {
            name = name.substring(0, name.indexOf("(FINALE)"));
        }
        if (name.includes("(COUR")) {
            name = name.substring(0, name.indexOf("(COUR"));
        }

        name = name.trim();


        return name;
    }

    public static getPlatforms(event) : Platform[] {
        let platforms : Platform[] = [];
        for (let i = 0; i < event.subcalendar_ids.length; i++) {
            if (event.subcalendar_ids[i] == 9409028) {
                platforms.push(Funimation); // Funimation
            } 
            else if (event.subcalendar_ids[i] == 9244632) {
                platforms.push(Crunchyroll as Platform); // Crunchyroll
            }
            else if (event.subcalendar_ids[i] == 9244626) {
                platforms.push(HiDive); // HiDive
            } 
            else if (event.subcalendar_ids[i] == 9265431) {
                platforms.push(Netflix); // Netflix
            } 
            else if (event.subcalendar_ids[i] == 9805490) {
                platforms.push(Other); // Other
            } 
            else if(event.subcalendar_ids[i] == 9856401) {
                platforms.push(HomeVideo); // Home-Video only
            }
            else {
                console.log(`UNKNOWN: ${event.title} with Calendar ID: ${event.subcalendar_ids[i]}`)
            }
        }

        return platforms;
    }

    // Retrieves the episode number(s) from the event title
    public static getEpisode(eventTitle) : String {
        let episode : String = "";

        if (eventTitle[0] != '#') return;

        episode = eventTitle.substring(1, eventTitle.indexOf(' '));

        return episode;
    }

    public static getReleaseDate(event) {
        let date = new Date(event.start_dt);

        return {
            month: Months[date.getMonth()],
            date: date.getDate(),
            fullDate: date
        }
    }

}