# Nested Test

### Intoduction

The purpose of this app is to allow users to select properties to be added or removed from a calculation of the average home price in their area.

Initially, all properties are included in the calculation at the bottom of the page. The user can toggle properties by clicking on them. Properties in green are included in the calculation.

This app was boostrapped using Create-React-App. Tests were written in Jest and used Enzyme as a utility for testing React components.

### Instructions

To run the app:
`yarn install` then `yarn start`

or using NPM:
`npm install` then `npm start`

To run tests, run `yarn test` / `npm test` after installing.

Enjoy!

### Improvements

This app could be improved and built on in a variety of ways:

- There is currently no styling in place. The architechture would allow for a solution such as styled-components, or a more traditional approach with pure CSS.

- There are a lot of calculations done in `<EstimateBuilder> ` which can ideally be extracted out.

- Prices are not currently formatted and are returned in their raw form. There could be a utility that could format a price in every location it's rendered.

- Error handling isn't really handled well; there should be a `componentDidCatch()` or alternative as the app will currently just throw.

- There isn't any routing, though ideally this could be done by creating more components in Views.


