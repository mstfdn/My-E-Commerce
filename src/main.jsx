import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import './assets/css/tailwind.css'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import Shop from './pages/Shop'
import ProductDetailPage from './pages/ProductDetailPage'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetail from './layout/BlogDetail'

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
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route path="/product/:id">
              <ProductDetailPage />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
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
