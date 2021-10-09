const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("Set Office Number via constructor argument", () => {
    const testValue = 61;
    const emp = new Manager("John", 1, "no@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Manager";
    const emp = new Manager("John", 1, "no@test.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 69;
    const emp = new Manager("John", 1, "no@test.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});