import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Item } from './pages'
import { theme } from './styles'

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Router>
                    <Switch>
                        <Route path='/item/:id' children={<Item />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    )
}

export default App
