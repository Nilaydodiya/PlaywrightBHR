import{Page} from "@playwright/test";


export default class DashBoard{

private readonly logoutButton = "#Logout";
private readonly employeesButton = "//div[@title='Employees']";


    constructor(private page:Page){

    }
    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async clickOnEmployeeButton() 
    {
        await this.page.locator(this.employeesButton).click();
    }   

}