export class Friend {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    favouriteLanguage: string;

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNumber: string, favouriteLanguage: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.favouriteLanguage = favouriteLanguage;
    }
}