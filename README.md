# Sketch Document viewer

Client app to list and see artboards and the details

## Installation

- Clone the repo: https://github.com/jepser/sketch-document-viewer.git
- Install the dependencies `yarn`

## Development

- After the [Installation](#installation)
- Run `yarn dev` and go to http://localhost:3000

> Note: In case you want to run the app in a different port you can run `PORT=XXX yarn dev`

## Libraries

- next.js as a React framework for HMR, SSR and routing
- styled-components for styling
- jest for tests
- Apollo for graphQL connection

## Architecture

### General
The application uses [next.js](https://nextjs.org/), to handle:
- SSR
- Routing
- HMR

I used it to accelerate the project boilerplate, besides hooking with the ecosystem I believe it's a good starting project since, after a lot of research the conventions on the framework meets the day to day requirements.

### Pages
The project as a pages folder (necessary by next.js), the responsibility of the pages is to get handle rounting parameters and the data request

### Transport
The folder consist of the transport layer, in our case we have only one as is a HOF creating an Apollo client to handle the GraphQL requests

### Services
The services folder has the implementation of a transport on a API and the interface to interact with it inside the app, in this case, we only have `sketch-service` with has the hooks and the HOF that injects the functionality of the GraphQL service and query the required data.

### Layouts
Are the main UI components that receive props and compose the whole page structure.

### Components
Are reusable UI components their concern are UI interaction or layouts

## Components structure
```
component-name/
├── index.js // interface exposed to the outside
├── component-name.jsx // component implementation
├── styled-components.js // styling components
├── constants.js // if necessary the constants for the component
├── utils.js // if necessary utility functions for the component
├── component-name.test.js // tests
```

## Notes
- While developing I'm not experienced on GraphQL and I know there is a better way to handle queries
- I didn't persist the data between pages following the same architecture as I saw in sketch.cloud plus, I didn't want to assume that the data hasn't been updated between page transitions, so that's why I requested the data in each page change. It might be a network perfomance issue, but since it wasn't the requirement I took the "risk" to avoid it when it's not needed
- I created Flex and Spacer components for layout orchestration, I'm not 100% about the current implementation but there are 2 main reasons I belive this pattern helps, 1. is reusability and maintainability, as having a common implementation on layout and spacing, opinions are less important than the common implementation, leading to a more solid approach; 2. readibility, as UI components with single responsibility once you get used to the components, it's possible to scan a component and understand how it looks which helps you undertanding the UI intent.
- I would improve the stale-until-loaded approach while navigating between artboards, now, it requests the data again making a "weird jump", I could either stale until loaded, or persist the data at an app level and consume it from there, said that I didn't do any assumptions and preferred to get the data on route change
- The error handling could be better, now, I just relying on the `error` property from the apollo client at a transport layer but not UI layer
- Normally, I would move the APIs' url to an env var file (or any static path), in this case because is only one and it's not likely to change so I left it in the VCS.
