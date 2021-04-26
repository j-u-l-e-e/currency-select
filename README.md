# Mintos home-assignment

This project contains the results of home-assignment from Mintos company. The project was made by using:
* Vue CLI 4
* Vue 2
* Vuex 3
* Vue Test Utils 1
* Cypress

## Application structure

This is a Vue project which contains of:
* one view App.vue
* four components:
    * Chip.vue
    * Checkbox.vue
    * ToggleChip.vue
    * ChipSelect.vue
* a vuex store with one module:
    * currency.js
* a module with custom Javascript error-classes stored under `/helpers` folder:
    * errors.js
* executable tests:
    * unit tests:
        * Vue component tests located in `/tests/unit/component`
        * Vuex store tests located in `/tests/unit/store`
    * end-to-end tests located in `/tests/e2e`

## Project setup

Before working with this project dependencies must be installed. To install them run:
```
npm install
```

To run project in development mode run:
```
npm run serve
```

To build project for production run:
```
npm run build
```
You will find built project under `/dist` folder.

To execute unit tests run:
```
npm run test:unit
```

To execute end-to-end tests:
1. Start cypress server by running:
    ```
    npm run test:e2e
    ```
2. Click on **Run all specs button** in the opened window
