import{Page} from "@playwright/test";


export default class LoginPage{

    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginButtonSelector = "//button[contains(text(),'Login')]";
    

    constructor(private page: Page) {

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async fillUsername(username : string) 
    {
        await this.page.locator(this.usernameInputSelector).fill(username);
    }   

    async fillPassword (password : string)
    {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }
    async clickLoginButton(){

        await this.page.locator(this.loginButtonSelector).click();
        
        /*await this.page
        .getByRole("button", { name: "Login" })
        .click();*/
    }

}