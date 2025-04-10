import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import './assets/css/tailwind.css'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/">
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold">Home Page</h1>
              </div>
            </Route>
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <p className="text-center">© 2023 Bandage. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<App />)
