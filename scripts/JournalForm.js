//Function that creates journal form HTML syntax

export const journalForm = () => {
  return `
    <form action="" class="entryForm">
                    <fieldset>
                        <label for="dateOfEntry">Date of Entry</label>
                        <input type="date" name="dateOfEntry" class="entryForm__dateOfEntry">
                    </fieldset>
                    <fieldset>
                        <label for="conceptsCovered">Concepts Covered</label>
                        <input type="text" name="conceptsCovered" class="entryForm__conceptsCovered">
                    </fieldset>
                    <fieldset>
                        <label for="journalEntry">Journal Entry</label>
                        <textarea name="journalEntry" id="journalEntry" cols="30" rows="8"></textarea>
                    </fieldset>
                    <fieldset>
                        <label for="mood">Mood for the Day</label>
                        <select name="mood" id="mood" class="moodInput">
                            <option value="none" selected></option>
                            <option value="amazing">Amazing!</option>
                            <option value="great">Great</option>
                            <option value="ok">Just Ok</option>
                            <option value="meh">Meh</option>
                            <option value="horrible">Horrible</option>
                            <option value="sad">Just Really Sad</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <input type="submit" class="submitButton" value="Record Journal Entry">
                    </fieldset>
                </form>
                `
};
