import Base from "./base-page"
import {t, Selector} from "testcafe"

class RegistrationPage extends Base {
    company = 'input[name="company"]';
    taxid = 'input[name="tax_id"]';
    firstName = 'input[name="firstname"]';
    lastName = 'input[name="lastname"]';
    addres1 = 'input[name="address1"]';
    addres2 = 'input[name="address2"]';
    postalCode = 'input[name="postcode"]';
    city = 'input[name="city"]';
    countryCode = '.form-control[name="country_code"]';
    email = '[name="customer_form"] [name="email"]';
    phone = 'input[name="phone"]'
    password = '[name="customer_form"] [name="password"]';
    confirmPassword = '[name="customer_form"] [name="confirmed_password"]';
    newsletter = '[name="newsletter"]';
    createButton = '[name="create_account"]';
    successMsg = '.alert.alert-success';
    errorMsg = '.alert.alert-danger';

    async RegistrationNewUser (user) {
        await t
            .typeText(this.company, user.company)
            .typeText(this.taxid, user.taxid)
            .typeText(this.firstName, user.firstName)
            .typeText(this.lastName, user.lastName)
            .typeText(this.addres1, user.addres1)
            .typeText(this.addres2, user.addres2)
            .typeText(this.postalCode, user.postalCode)
            .typeText(this.city, user.city)
            .click(this.countryCode)
            .click(Selector('option').withAttribute('value', user.country))
            .typeText(this.email, user.email)
            .typeText(this.phone, user.phone)
            .typeText(this.password, user.password)
            .typeText(this.confirmPassword, user.password)
            .click(this.newsletter)
            .click(this.createButton);
    }

    async getRegistrationSuccesMess() {
        const text = await Selector(this.successMsg).innerText;
        return text.replace(/[^A-Za-z0-9]/g, ' ').trim()
    }

    url = () => this.createUrl('create_account')

    async isUserLogIn(){
        if(await Selector(this.errorMsg).exists) {
             const text = await Selector(this.errorMsg).innerText;
             return text.replace(/[^A-Za-z0-9]/g, ' ').trim() !== 'You are already logged in'
        }
        return false
    }

}

export default new RegistrationPage()
