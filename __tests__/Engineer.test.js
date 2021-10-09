const Engineer = require("../lib/Engineer.js");

test("Set GitHub Account via constructor argument", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("John", 1, "no@test.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Engineer";
    const emp = new Engineer("John", 1, "no@test.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("John", 1, "no@test.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});