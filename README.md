# Task Tracker

This project is a task tracker application that allows users to add, delete, and toggle reminders for tasks.
The application was built using [Angular v16.2.14](https://github.com/angular/angular-cli/tree/16.2.x) and [JSON Server](https://github.com/typicode/json-server).

## Usage

### Clone the repository

Clone the repository on to your local machine:

````
git clone https://github.com/adheesha-chamod/angular-task-tracker.git
````

After cloning the repository, navigate to the main branch:

````
git checkout main
````

### Install dependencies

From the root directory, install all the dependencies:

````
npm install
````

### Start the JSON Server

Start the JSON mock Server first:

````
npm run server
````

### Start the Angular application

After starting the JSON Server, start the Angular application:

````
ng serve
````

Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

- This project is created with the help of [Angular Crash Course](https://www.youtube.com/watch?v=3dHNOWTI7H8) done by [Traversy Media](https://www.youtube.com/@TraversyMedia).
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
