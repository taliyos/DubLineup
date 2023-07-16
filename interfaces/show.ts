import Platform from "./platform";

export default interface Show {
    name: String,
    platforms: Platform[],
    episode: String,
    releaseDate: {
        month: String,
        date: number,
        fullDate: Date
    }
}