import { Entries } from "./Entries.js"
import { journalForm } from "./JournalForm.js"


// Function to create journal form and render the application's HTML structure. Started to style too much before adding the form to javascript and needed to create a new function.
export const JournalForm = () => {
    return `
    <div class="journalForm">
    <h2 class="entryTitle">Let's Write Something!</h2>
        ${ journalForm() }
    </div>
    `
}


// Function to create journal entries and render the entry HTML structure.
export const DailyJournal = () => {
    return `
    <div class="entryList">
    <h2 class="entryTitle">Previous Journal Entries</h2>
        ${ Entries() }
    </div>
    `
}
