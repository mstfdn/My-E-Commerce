import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import './assets/css/tailwind.css'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/">
              
            </Route>
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<App />)
