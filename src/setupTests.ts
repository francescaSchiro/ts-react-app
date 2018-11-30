import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// configure Enzyme to use an adapter for React 16. We'll create a file called src/setupTests.ts that is automatically loaded when running tests:

enzyme.configure({ adapter: new Adapter() });

// Now that we've got Enzyme set up, let's start writing our test!
// Let's create a file named src/components/Hello.test.tsx, adjacent to our Hello.tsx file from earlier.
