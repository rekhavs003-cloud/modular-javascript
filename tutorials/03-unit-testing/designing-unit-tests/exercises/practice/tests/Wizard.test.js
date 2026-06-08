/**** DESIGNING UNIT TESTS: PRACTICE ****/

import Wizard from "../Wizard.js";

describe("Wizard Spell Inventory Pipelines", () => {
    // TODO: Declare (but do not instantiate) a variable to store a wizard

    /*
        TODO: Implement a 'beforeEach' hook loop to reinitialize 
        'testMage' as a fresh instance of the 'Wizard' class before every test.
    */

    test("safely saves multiple sequential spells cleanly into memory profiles", () => {
        // 1. TODO: ARRANGE - Create two spells

        // 2. TODO: ACT - Call the .learnSpell method twice (one for each spell)

        // 3. TODO: ASSERT - Write an assertion that does a deep equality check of the spells array
        // and a second assertion that checks its length
    });
});