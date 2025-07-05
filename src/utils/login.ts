import{Page,expect} from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import * as dotenv from "dotenv";
dotenv.config();


export async function login(page: Page) {
  console.log("Loaded USERNAME from .env:", process.env.NEWUSERNAME); 
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.NEWUSERNAME || "");
  await loginPage.fillPassword(process.env.NEWPASSWORD || "");
  await loginPage.clickLoginButton();
}