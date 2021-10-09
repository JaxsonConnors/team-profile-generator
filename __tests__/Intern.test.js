const Intern = require("../lib/Intern.js");

test("Set School via the constructor argument", () => {
    const testValue = "TEST";
    const emp = new Intern("John", 1, "no@test.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("John", 1, "no@test.com", "");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "TEST";
    const emp = new Intern("John", 1, "no@test.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});