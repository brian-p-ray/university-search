# UniversitySearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---
# Project Requirements
Create a page/app that consumes a free open University API (http://universities.hipoabs.com/ some documentation at https://github.com/Hipo/university-domains-list), allow the user to apply filters to the API call by requiring them to select a country from a drop down (only need to put US/Canada/England in this dropdown), and optionally type a full/partial name in a text box to filter the list further.

The results should be displayed in a grid below these selectors. The name of the university should be displayed an d the user can click on the row to expand additional information about the university that is returned from the API (school website, country, country code).

This should be done with HTML/JavaScript and at least one front end framework of your choice (ex: Angular/Vue/React/RxJS)

### NOTES
- Spec calls for use of "England" as one of the country options. However, the endpoint uses "United Kingdom". This app uses "United Kingdom" to match the data and provide the expected functionality.
- There is a 1.5 second delay after keyup before a search is done. The timer is cancelled on keydown, allowing the user time to get their search criteria typed before a search commences.

### RESOURCES
- [Google fonts](https://fonts.google.com/)
- [https://gist.github.com/lucasdavila/4331999#gistcomment-3436121](https://gist.github.com/lucasdavila/4331999#gistcomment-3436121)
- [ng bootstrap](https://ng-bootstrap.github.io/#/home)
- [Bootstrap](https://getbootstrap.com/)
- [favicon.io](https://favicon.io/)