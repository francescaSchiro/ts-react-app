This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To set up the file: 
I followed the starter template set up following the steps described here. [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) 

`create-react-app ts-react-app --scripts-version=react-scripts-ts`

[react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts) is a set of adjustments to take the standard create-react-app project pipeline and bring TypeScript into the mix.

## FIX

- currentDay in _sportListItems.tsx_ with [luxon](https://moment.github.io/luxon/) library;
- **In order to see Styled Components name while inspecting** Implement: [react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components) tthat adds the styled-components Babel plugin to your create-react-app app via react-app-rewired without ejecting. [to read](https://github.com/styled-components/babel-plugin-styled-components/issues/59)
[styledcomponents babel plugin docs](https://www.styled-components.com/docs/tooling#babel-plugin)
- in cards game name goes on 2 lines not expanding card