/**** DESIGNING UNIT TESTS: SOLUTION ****/

import Warrior from "../models/Warrior.js";

describe("Warrior Class Operational Metrics", () => {
    let testHero;

    // HOOK SETUP: Automatically instantiates a fresh player before every test
    beforeEach(() => {
        testHero = new Warrior("Arthur");
    });

    test("accurately calculates health reductions following multi-hit damage spikes", () => {
        // 1. ARRANGE (State setup)
        const minorHit = 15;
        const criticalHit = 40;

        // 2. ACT (Execute behavior sequence)
        testHero.takeDamage(minorHit);
        testHero.takeDamage(criticalHit);

        // 3. ASSERT (Verify metrics)
        expect(testHero.health).toBe(45);
    });

    test("successfully alters active tactical combat modes", () => {
        // 1. ARRANGE
        // Handled completely by the clean beforeEach hook

        // 2. ACT
        testHero.switchStance();

        // 3. ASSERT
        expect(testHero.stance).toBe("Aggressive");
    });
});

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
