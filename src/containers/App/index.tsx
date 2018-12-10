import { PureComponent } from 'react';
import * as React from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MssAction } from 'src/types/custom';
import Api from 'src/utils/Api';
import { getBaseData, GetBaseDataAction } from './actions';

import AppWrapper from './Wrapper';
import HeaderNav from '../../components/HeaderNav/index';
import SportList from 'src/components/SportList';
import HomePage from 'src/components/HomePage';
import AppFooter from 'src/components/AppFooter';
import Banners from 'src/components/Banners';
import AppSeo from 'src/components/AppSeo';


/**
 * The type for the props provided by the parent component
 * -------------------------------------------------------
 * OwnProps is essentially the public interface of our component,
 * so is the only one of the types that is exported from our module.
 */
export interface OwnProps {
    api: Api;
}

interface StateProps {
    propFromReduxStore: string;
}

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
        return(
        <AppWrapper id='AppWrapper'>
            <HeaderNav/>           
            <SportList/>
            <HomePage/>
            <Banners/>
            <AppSeo />
            <AppFooter />
        </AppWrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({

});

const mapDispatchToProps = (
    dispatch: Dispatch<MssAction>,
    ownProps: OwnProps
): DispatchProps => {
    const { api } = ownProps;
    return {
        requestBaseData: () => dispatch(getBaseData(api))
    }
}

const withConnect = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);