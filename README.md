This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To Start

- Clone the repo.
- Move to `styled` branch.
- `yarn`
- `yarn start`

## To set up the file: 
I followed the starter template set up following the steps described here. [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) 

`create-react-app ts-react-app --scripts-version=react-scripts-ts`

[react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts) is a set of adjustments to take the standard create-react-app project pipeline and bring TypeScript into the mix.

## FIX

- [ ] currentDay in _sportListItems.tsx_ with [luxon](https://moment.github.io/luxon/) library;
- [ ] **In order to see Styled Components name while inspecting** Implement: [react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components) that adds the styled-components Babel plugin to your create-react-app app via react-app-rewired without ejecting. [to read](https://github.com/styled-components/babel-plugin-styled-components/issues/59). Workaround for now: give id={'component-name'} to component so that'll make inspecting it easier.
[styledcomponents babel plugin docs](https://www.styled-components.com/docs/tooling#babel-plugin)
- [x] in cards game name goes on 2 lines not expanding card
- [ ] grid gap adds 4 px to 1st winner odds area
- [ ] transform gridColumn and gridRow passed props to just gridArea
- [ ] make mainevnts tabs same from reusable components Tab and TabsContainer as in OtherEvents
- [x] banner list not div!!