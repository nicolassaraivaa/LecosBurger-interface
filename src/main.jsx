import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { standardThemes } from './styles/themes/standard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardThemes}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </StrictMode>
)
 