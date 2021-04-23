import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
    <div class="entryList">
    <h2 class="entryTitle">Previous Journal Entries</h2>
        ${ Entries() }
    </div>
    `
}