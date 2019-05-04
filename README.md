# ReactwithI18next

## React and i18next

- i18next: localization framework 本体
- react-18next: set of bindings for you React application. It's alomost the same like mobx and mobx-react, or redux and react-redux.

```sh
yarn add i18next react-i18next
```

> separate file called `i18n.js` where we will keep configuration for your localization process.


-i18n.js
-index.js

### 基本的な使い方

`i18n.js`
```js
import i18n from 'i18next;

i18n.init({
  debug: true,

  lng: 'en-US',

  resources: {
    'en-US': {
      'translation': {
        intro: 'ababa'
      }
    }
  },

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default
  }
})
```

`index.js`
```js
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n.js'

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.querySelector('#root')
)
```

`App.js`
```js
class App extends React.Component {
  setLocale(lang) {
    this.props.changeLocale(lang)
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <span>{t('intro')}</span>
        <button onClick={() => this.setLocale('en')} type="button">
          English
        </button>
        <button onClick={() => this.setLocale('ja')} type="button">
          Japanese
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  actions
)(withNamespaces()(App))
```

### Initialize

- debug: <boolean> very useful during development, It logs to console all the information on i18next state. production では false にする
- lng:  initial language to use.
- resources: `init({})`内にtranslationを書けるけど、後述するように外部ファイル化することになるでしょう。


### Dynamically fetching user language

browser の default language を検出してくれるので
init ファイルに lngをセットしなくてよくなる

```
yarn add i18next-browser-languagedetector
```

```js
import LanguageDetector from 'i18next-browser-languagedetector';
```



### Loading translation files from external location

translate を init 内に書きたくない場合

```
yarn add i18next-xhr-backend
```

We can see 3 additional requests in Network tab of Dev Tools.

```
http://localhost:5000/locales/en-US/translation.json
http://localhost:5000/locales/en/translation.json
http://localhost:5000/locales/dev/translation.json
```

`en-US` をみて対応する翻訳がなかったら、`en`をみてそれでもなければ`dev` をみる

> For production its better not to use dev language. You can control that by passing additional parameter to ｀i18n.init({ fallbackLng: 'en' })｀. That will also minimize amount of request for language files to 2.



jsonファイルの場所を指定する

```js
// i18n.js
const backendOpts = {
  loadPath: 'locales/{{lng}}/{{ns}}.json'
}
i18n.init({
  backend: backendOpts
})
```

So you can create meaningful structure inside translations files instead of pure 1 level depth list

ネストは深くてもOKのようだ

## Using Redux to change locale

XHRを使う場合は `(locale) => this.props.i18n.changeLanguage(local)` 
メソッドが用意されている。

[Ultimate Localization of React (Mobx) App with i18next](https://itnext.io/ultimate-localization-of-react-mobx-app-with-i18next-efab77712149)