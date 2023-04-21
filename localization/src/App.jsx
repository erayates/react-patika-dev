import { useEffect, useState } from 'react'
import './App.css'

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language; 
  const [locale, setLocale] = useState(defaultLocale);
  const [count, setCount] = useState(10)
  
  useEffect(() => {
    localStorage.setItem("locale", locale)
  },[locale])

  const messages = {
    'tr-TR': {
      title: 'Merhaba Dünya',
      description: `${count} yeni mesajınız var.`
    },
    'en-US': {
      title: 'Hello World',
      description: `You have ${count} new messages.`
    },
  
  }
  return (
    <div className="App">
        <IntlProvider locale={locale} messages={messages[locale]}>
          <FormattedMessage id="title" />
          <br></br>
          <FormattedMessage id="description" />

          <br></br>
          <button onClick={() => setLocale('en-US')}>English</button>
          <button onClick={() => setLocale('tr-TR')}>Turkish</button>
        </IntlProvider>
    </div>
  )
}

export default App
