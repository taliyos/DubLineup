import Show from "./show";

export default interface ShowContainer {
    month: String,
    date: Number,
    dayOfWeek: String,

    shows: Show[]
}