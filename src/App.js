import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Item, Landing } from './pages'
import { theme } from './styles'

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Router>
                    <Switch>
                        <Route path exact='/' component={Landing} />
                        <Route path='/:id' children={<Item />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    )
}

export default App
