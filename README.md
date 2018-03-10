# Strayer Dialog Flow UI demo

## Current State

UI mock-up is mostly complete, some pieces of the UI function interactively, but not all, and current interaction is supported by improper sharing of state, which will be factored out in the next few commits.

## zeit now hosting

This project is deployable via [zeit now](https://zeit.co/now) and is updated periodically at https://stray-ui.now.sh/

## Running dev server locally

Running the vue/webpack powered dev build should be as follows.  It should run without additional dependencies, but may require `npm install -g @vue/cli`

``` bash
npm install
npm run serve
```

## Building and running express server

Additionally an express server is included to run a production build.
This requires first building the project to generate the `dist` directory

``` bash
npm run build
npm start
```
