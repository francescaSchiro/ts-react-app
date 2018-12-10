
import * as React from 'react';
import { PureComponent, Children, ReactNode } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { TranslationMessages } from 'src/core/i18n';
import { makeSelectLocale } from './selectors';


export interface OwnProps {
    messages: TranslationMessages;
    children: ReactNode;
}

interface StateProps {
    locale: string;
}

type Props = StateProps & OwnProps;

class LanguageProvider extends PureComponent<Props> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
          <IntlProvider
            locale={this.props.locale}
            key={this.props.locale}
            messages={this.props.messages[this.props.locale]}
          >
            {Children.only(this.props.children)}
          </IntlProvider>
        );
      }
}

const mapStateToProps = createStructuredSelector<StateProps, any>({
    locale: makeSelectLocale()
});

const withConnect = connect<StateProps, OwnProps>
    (mapStateToProps);

export default compose(withConnect)(LanguageProvider);