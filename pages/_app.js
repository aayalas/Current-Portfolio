import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import es from '../i18n/es.json';
import en from '../i18n/en.json';

const messages = {
  en,
  es
}

function getDirection(locales) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]} >
      <Component {...pageProps} dir={getDirection(locale)}/>
    </IntlProvider>
  )
}
