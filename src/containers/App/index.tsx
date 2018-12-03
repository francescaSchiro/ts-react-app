import { PureComponent } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MssAction } from 'src/types/custom';

/**
 * The type for the props provided by the parent component
 * -------------------------------------------------------
 * OwnProps is essentially the public interface of our component,
 * so is the only one of the types that is exported from our module.
 */
export interface OwnProps {
    propFromParent: number;
}

interface StateProps {
    propFromReduxStore: string;
}

interface DispatchProps {
    onSomeEvent: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class App extends PureComponent<Props> {

    public render() {
        return 'App Container';
    }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({

});

const mapDispatchToProps = (dispatch: Dispatch<MssAction>, ownProps: OwnProps): DispatchProps => {
    return {
        onSomeEvent: () => {/**/}
    }
}

const withConnect = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);