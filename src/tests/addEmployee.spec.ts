import{test} from "@playwright/test";
import DashBoard from "../pages/DashBoard";
import EmployeePage from "../pages/EmployeePage";
import {login} from "../utils/login";


test("Add two employees and verify they are listed", async ({ page }) => {

 
  const dashboard = new DashBoard(page);
  const employee = new EmployeePage(page);
  await login(page);

  await test.step("Navigate to Employee Tab", async () => {
    await dashboard.clickOnEmployeeButton();
  });

  await test.step("Add First Employee - Tom Baker", async () => {
    await employee.clickOnAddEmployeeButton();
    await employee.fillFirstName("Tom Baker");
    await employee.fillLastName("TestLastName");
    await employee.fillEmail("test@yopmail.com");
    await employee.fillPhonenumber("123456789");
    await employee.fillJobTitle("Test");
    await employee.clickOnSaveEmployeeButton();
    await employee.verifyEmployeeSuccess("Success! New employee added");
  });

  await test.step("Click 'Add Another Employee'", async () => {
    await employee.clickOnAddAnotherEmployee();
  });

  await test.step("Add Second Employee - TestSecond", async () => {
    await employee.fillFirstName("TestSecond");
    await employee.fillLastName("TestSecond");
    await employee.fillEmail("test2@yopmail.com");
    await employee.fillPhonenumber("1234567890");
    await employee.fillJobTitle("Test2");
    await employee.clickOnSaveEmployeeButton();
    await employee.verifyEmployeeSuccess("Success! New employee added");
  });

  await test.step("Close Add Employee Popup", async () => {
    await employee.closeAddEmployeePopup();
  });

  await test.step("Verify both employees are listed", async () => {
    await employee.verifyEmployeeNameIsVisible("Tom Baker");
    await employee.verifyEmployeeNameIsVisible("TestSecond");
  });
});