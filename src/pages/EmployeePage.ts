import{Page,expect} from "@playwright/test";


export default class EmployeenPage{

    private readonly addEmployeeButton = "//button[contains(text(),'Add employee')]";
    private readonly firstNameInputSelector = "#firstName";
    private readonly lastNameInputSelector = "#lastName";
    private readonly emailInputSelector = "#email";
    private readonly phoneNumberInputSelector = "#phoneNumber";
    private readonly startDate = "#startDate";
    private readonly getDate = "//div[contains(@class, 'DayPicker-Day--today')]";
    private readonly jobTitleInputSelector = "#jobTitle"; 
    private readonly saveButton = "//button[normalize-space()='Save new employee']"; 
    private readonly employeeSuccessVerification = "//h1[contains(text(),'Success! New employee added')]"; 
    private readonly addAnotherEmployeeButton = "//button[contains(text(),'Add another employee')]"; 
    private readonly closeAddEmployee = "//button[@aria-label='Close modal']";
    private readonly findEmployee = "h1.text-base.font-bold";


    constructor(private page: Page) {

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

      async clickOnAddEmployeeButton() 
    {
        await this.page.locator(this.addEmployeeButton).click();
    }   

    async fillFirstName(firstName : string) 
    {
        await this.page.locator(this.firstNameInputSelector).fill(firstName);
    }   

    async fillLastName (lastName : string)
    {
        await this.page.locator(this.lastNameInputSelector).fill(lastName);
    }
    async fillEmail (email : string)
    {
        await this.page.locator(this.emailInputSelector).fill(email);
    }
    async fillPhonenumber (phonenumber : string)
    {
        await this.page.locator(this.phoneNumberInputSelector).fill(phonenumber);
    }
    async fillJobTitle (jobTitle : string)
    {
        await this.page.locator(this.jobTitleInputSelector).fill(jobTitle);
    }
    async clickOnSaveEmployeeButton(){

        await this.page.locator(this.saveButton).click();
    }
    async verifyEmployeeSuccess(expectedText : string){
        await expect(this.page.locator(this.employeeSuccessVerification)).toContainText(expectedText);
    }
    async clickOnAddAnotherEmployee(){

        await this.page.locator(this.addAnotherEmployeeButton).click();
    }
    async verifyEmployeeNameIsVisible(name: string) {
         await expect(this.page.locator(this.findEmployee)).toContainText([name]);
    }

     async closeAddEmployeePopup() {
         await this.page.locator(this.closeAddEmployee).click();
    }
    async fillJoiningDate() {
         await this.page.locator(this.startDate).click();
         await this.page.locator(this.getDate).click();
    }
   
}
    
