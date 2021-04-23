/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "04/07/2021",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Great"
        },
        {
            id: 2,
            date: "04/14/2021",
            concept: "Git & Github workflow",
            entry: "We learned how to work in teams and push code to Github, review, and merge code into the main branch.",
            mood: "Ok"
        },
        {
            id: 3,
            date: "04/19/2021",
            concept: "JavaScript",
            entry: "We started learning the basic JavaScript functions, objects, arrays, and how to console.log in our terminal.",
            mood: "Ok"
        },
        {
            id: 4,
            date: "04/22/2021",
            concept: "Javascript Debugging and Event Listeners",
            entry: "We learned how to debug in Chrome devtools and got introduced to event listeners.",
            mood: "Meh"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}
