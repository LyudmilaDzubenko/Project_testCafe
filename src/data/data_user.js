import * as faker  from "faker";
let UserData = { 
    company : faker.company.companyName(),
    taxid : faker.helpers.randomize(),
    addres1 : faker.address.streetAddress(),
    addres2 : faker.address.streetAddress(),
    postalCode : faker.address.zipCode("#####"),
    city : faker.address.city(),
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    email : faker.internet.email(),
    phone : faker.phone.phoneNumberFormat(),
    country: "UA",
    password: "password"
}
export default UserData