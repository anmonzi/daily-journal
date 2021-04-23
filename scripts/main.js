import { DailyJournal, JournalForm } from "./DailyJournal.js"

const containerOne = document.querySelector("#form")
const containerTwo = document.querySelector("#entries")


const render = () => {
    containerOne.innerHTML = JournalForm()
    containerTwo.innerHTML = DailyJournal()
}

render()