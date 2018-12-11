import * as React from 'react';
import { PureComponent } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { MssAction } from 'src/types/custom';
import { getBaseData, GetBaseDataAction } from './actions';
import messages from './messages';

/**
 * The type for the props provided by the parent component
 * -------------------------------------------------------
 * OwnProps is essentially the public interface of our component,
 * so is the only one of the types that is exported from our module.
 */

// tslint:disable-next-line:no-empty-interface
export interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {}

interface DispatchProps {
    requestBaseData: () => GetBaseDataAction;
}

type Props = StateProps & DispatchProps & OwnProps;

class App extends PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.props.requestBaseData();
    }

    public render() {
        return <FormattedMessage {...messages.example} />;
    }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({

});

const mapDispatchToProps = (
    dispatch: Dispatch<MssAction>,
    ownProps: OwnProps
): DispatchProps => {
    return {
        requestBaseData: () => dispatch(getBaseData())
    }
}

const withConnect = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);