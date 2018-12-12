import { PureComponent } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MssAction } from 'src/types/custom';

// tslint:disable-next-line:no-empty-interface
export interface OwnProps {}

// tslint:disable-next-line:no-empty-interface
interface StateProps {}

// tslint:disable-next-line:no-empty-interface
interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Lives extends PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        return ('Lives page');
    }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({});

const mapDispatchToProps = (
    dispatch: Dispatch<MssAction>,
    ownProps: OwnProps
): DispatchProps => {
    return {}
}

const withConnect = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Lives);