import {t} from 'testcafe';
import RegistrationPage from '../pages/registration-page';
import UserData from '../data/data_user'
import {BASE_URL} from '../pages/base-page'
import registrationPage from '../pages/registration-page';

const successMsg = 'Your customer account has been created';

fixture `Registration page`.page(RegistrationPage.url());

test ( `registration`, async() => {
    await t.expect(await registrationPage.isUserLogIn()).eql(false, "user is login")
    await RegistrationPage.RegistrationNewUser(UserData);
    await t.expect(await RegistrationPage.getRegistrationSuccesMess()).eql(successMsg, "Invalid message");
    await t.expect(await RegistrationPage.getCurrentUrl()).contains(BASE_URL)
})