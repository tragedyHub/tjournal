import type { AppProps } from 'next/app'
import "macro-css"
import "../styles/globals.css"
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import {theme} from "../theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps}/>
    </MuiThemeProvider>
  )
}

export default MyApp
