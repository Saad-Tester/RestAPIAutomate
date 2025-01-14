# Rest-API Project

This project contains a REST API and end-to-end tests using Cypress.

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/RestApi-Cypress.git
    cd Rest-API
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running Tests

To run the Cypress tests, use the following command:
```sh
npx cypress open
```

This will open the Cypress Test Runner, where you can run the tests interactively.

Alternatively, to run the tests in headless mode, use:
```sh
npx cypress run
```

## Folder Structure

- `cypress/`: Contains all Cypress test files and configurations.
- `cypress/support/`: Contains support files for Cypress, such as custom commands.
- `cypress/integration/`: Contains the actual test files.

## Configuration

You can configure Cypress by modifying the `cypress.json` file in the root of the project. For more information, refer to the [Cypress documentation](https://docs.cypress.io/guides/references/configuration).

## Pushing to a Public Git Repository

1. Add the remote repository URL:
    ```sh
    git remote add origin https://github.com/Saad-Tester/RestApi-Cypress.git
    ```

2. Push the code to the repository:
    ```sh
    git push -u origin main
    ```

Replace `main` with the name of your branch if you are using a different branch.

## License

This project is licensed under the MIT License.
