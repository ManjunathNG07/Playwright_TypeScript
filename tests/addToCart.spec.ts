import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import Homepage from "../pages/homepage";
import HomeProductPage from "../pages/homePrdouctPage";


const email = "Manju09@gmail.com";
const password = "Manju@123";
test.describe("page object model demo", async () => {
   test("Register test_01", async ({ page, baseURL }) => {
      const register = new RegisterPage(page);
      await page.goto(`${baseURL}route=account/register`);
      await register.enterFirstName("Manju");
      await register.enterLastName("Mng");
      await register.enterTelephone("1234567890");
      await register.enterEmail(email);
      await register.enterPassword(password);
      await register.enterConfirmPassword(password);
      expect(await register.issubscribeCheched()).toBeChecked();
      await register.clickTermsandCondition();
      await register.clickContinueToRegister();
   })

   test("Logintest_02", async ({ page, baseURL }) => {
      const login = new LoginPage(page);
      await page.goto(`${baseURL}route=account/login`);
      await login.enterEmail(email);
      await login.enterLoginPassword(password);
      await login.clickOnLogin();
      expect(await page.title()).toBe("My Account");
   })

   test("add to cart", async ({ page, baseURL }) => {
      const login = new LoginPage(page);
      const homepage = new Homepage(page);
      const product = new HomeProductPage(page);
      await page.goto(`${baseURL}route=account/login`);
      await login.login(email, password);
      await homepage.clickOnHomeMenu();
      await product.selectProducts();
      await product.addFirstProductToTheCart();
      const isCartVisible = await product.isToastVisible();
      expect(isCartVisible).toBeVisible();


   })

})
