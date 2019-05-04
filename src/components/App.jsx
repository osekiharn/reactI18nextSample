import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import * as actions from '../../actions/locale'

class App extends React.Component {
  setLocale(lang) {
    this.props.changeLocale(lang)
    this.props.i18n.changeLanguage(lang)
  }

  render() {
    const { t } = this.props
    if (this.props.i18n.language) {
      return (
        <div>
          <p>{t('foo.bar.greeting')}</p>
          <p>
            selected Locale:
            {` ${JSON.stringify(this.props.locale.lng)}`}
          </p>
          <p>
            i18next Derived Locale:
            {` ${this.props.i18n.language}`}
          </p>
          <button onClick={() => this.setLocale('en')} type="button">
            English
          </button>
          <button onClick={() => this.setLocale('ja')} type="button">
            Japanese
          </button>
        </div>
      )
    }
    return null
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired,
  locale: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  changeLocale: PropTypes.func.isRequired
}

export default connect(
  ({ locale }) => ({ locale }),
  actions
)(withNamespaces()(App))
