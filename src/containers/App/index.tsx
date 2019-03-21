import * as React from 'react';
import { PureComponent } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';

// import Routes from 'src/core/routes';
import GlobalStyles from 'src/theme/GlobalStyle';
// import { ThemeProvider } from 'src/theme/default';
import { MssAction } from 'src/types/custom';
// import Api from 'src/utils/Api';
import { getBaseData, GetBaseDataAction } from './actions';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from 'src/components/Header/index';

import AppWrapper from './Wrapper';
import Routes from './Routes';

/**
 * The type for the props provided by the parent component
 * -------------------------------------------------------
 * OwnProps is essentially the public interface of our component,
 * so is the only one of the types that is exported from our module.
 */

// tslint:disable-next-line:no-empty-interface
export interface OwnProps { }

interface StateProps {
    themeName: string
}

interface DispatchProps {
    requestBaseData: () => GetBaseDataAction;
    // switchToDark: () => SwitchThemeAction;
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
        return (
            <Router>
                <AppWrapper id='AppWrapper'>
                    <Header
                        balance={844162}
                        betsCount={3}
                        isLoginOpen={false}
                        isLogged={false}
                    />
                    <Routes />
                    <GlobalStyles />
                </AppWrapper>
            </Router>
        );
    }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({
    // themeName: makeSelectThemeName()
});

const mapDispatchToProps = (
    dispatch: Dispatch<MssAction>,
    ownProps: OwnProps
): DispatchProps => {
    return {
        requestBaseData: () => dispatch(getBaseData()),
        // switchToDark: () => dispatch(switchTheme('DarkTheme'))
    }
}

const withConnect = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);