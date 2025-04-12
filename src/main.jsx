import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import './assets/css/tailwind.css'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import Shop from './pages/Shop'
import { ChevronLeft, Heart, ShoppingCart } from 'lucide-react'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/">
              <PageContent />
            </Route>
            <Route path="/shop">
              <Shop />
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
