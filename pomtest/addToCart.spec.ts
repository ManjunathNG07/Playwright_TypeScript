import{test,expect} from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import Homepage from "../pages/homepage";
import SpecialHotPage from "../pages/homePrdouctPage";

const email = "Manju07@gmail.com";
const password = "Manju@123";
test("Register test_01",async({page,baseURL})=>{
const register=new RegisterPage(page);
await page.goto(`${baseURL}route=account/register`);
await register.enterFirstName("Manju");
await register.enterLastName("Mng");
await register.enterTelephone("1234567890");
await register.enterEmail(email);
await register.enterPassword(password);
await register.enterConfirmPassword(password);
expect (await register.issubscribeCheched()).toBeChecked();
await register.clickTermsandCondition();
await register.clickContinueToRegister();
})