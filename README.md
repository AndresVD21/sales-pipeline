# Sales Pipeline - Frontend Challenge

## About

This project is the implementation of the pipeline that will allow the sales agents convert leads into prospects for the company.

## Tech Stack 💻

The technologies used for the project are the followings:

- **React**: This choice of this library/framework is to test the learned skills with it, since it isn't my technology of expertice.

- SCSS: To write more mantainable styles.
- **Nx**: Is a build system that helps with the organization of the monorepo.

---

## Development 👨🏽‍💻

To develop this project I've separated it in some pieces to delegate responsabilities.

### Sales Pipeline

This lib holds the features we use in this aplication those are:

| Feature         | Functionality                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Ferature Home   | This is just a module to present the application and welcome the user                                                  |
| Feature Convert | This is the main module of the application where we can find the main functionality, let's get more information below. |

#### **Feature Convert** _(libs/sales-pipeline/feature-convert)_

Here we'll find to big components the **Prospect** where the data for the selected lead is displayed. And the **ConvertProcess** where we can see the errors got from the process of checking the lead data in the external services and the score obtained if everything is correct.

Also here we have a service that allow the conection to the data access and generate the score based on the information of the lead and the external systems.

### Data _(libs/data)_

This lib is charge of storing the models of the classes and is used by the other libs.

### Data Access _(libs/data-access)_

Here we'll have methods to simulate the backend responses for both the outside environments **National Registry**, **National Archive** and the **Internal** data. Also here we have the mock data of every system.

### Styles _(libs/styles)_

On this lib we have the base/global styles for components that are shared in different components.

### Shared _(libs/shared)_

The shared components are created in this lib to have them accessible to the main features.

---

## Start the project

This project was generated using [Nx](https://nx.dev).

<p><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="150"></p>

Run `npm install` to get dependencies.

Run `nx serve sales-pipeline` to start the local server.

---

## Improvement Areas

| Area                      |                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Error Handling            | Have a better way to send to the UI the errors related to external systems.                                                    |
| Styles                    | Better naming convention on styles.                                                                                            |
| State Management          | Implement state management to handle the load of the data and the states of success/error in the process of getting the score. |
| Parallel Process Handling | Successfully waited task to end, but the logic between parts of the application could be better organized.                     |
| Testing                   | Still need to improve in testing react components. Increase code coverage to make sure every component is redering properly.   |
| Observables handling | I have thought in the way to handle the unsubscription of observables but in react that behavior is different so I need to learn more about that. |
