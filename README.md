# Chat GPT app with Rest API, Angular (FE), and Java (BE) using a MySQL database

This app is designed to answer questions related to the Backbase platform. 

Backbase is a digital banking software provider that offers an omnichannel platform to financial institutions, enabling them to create seamless and personalized customer experiences across different devices and channels. Their platform includes capabilities such as customer onboarding, account management, payments, and lending, among others. Backbase's solutions are used by over 120 financial institutions worldwide, including banks, credit unions, and wealth management firms.

By clicking on the Chat GPT tab, the app dynamically generates nine questions through a Rest API request to Chat GPT, and the Chat GPT provides the answers.

## Screenshots

![Screenshot 2023-05-12 at 19 52 36](https://github.com/paulo-bettencourt/1001-albums-nx-monorepo-angular-nodejs/assets/37920932/4844cc59-95e5-4e60-bb8e-b2cbd5612ea4)

![Screenshot 2023-05-12 at 19 52 48](https://github.com/paulo-bettencourt/1001-albums-nx-monorepo-angular-nodejs/assets/37920932/5c49bb03-5584-436b-9591-8f3093bd90cf)

![Screenshot 2023-05-12 at 19 54 01](https://github.com/paulo-bettencourt/1001-albums-nx-monorepo-angular-nodejs/assets/37920932/8b1b0cee-b172-46f6-8ccd-3a99c4a1541f)

## Development server

To use the app, you will need to provide your Bearer Chat GPT Key on the Angular app (FE), and the spring.datasource.username and spring.datasource.password on the Java app (BE).

For the Frontend, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

For the Backend, run `mvn clean install` to install the required dependencies and, afterwards, execute the command `mvn spring-boot:run` to start the server.

