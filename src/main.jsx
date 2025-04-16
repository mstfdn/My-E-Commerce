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
import TeamDetail from './layout/TeamDetail'
import AboutDetail from './layout/AboutDetail'
import Pricing from './pages/Pricing'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <Route exact path="/team">
              <TeamDetail />
            </Route>
            <Route exact path="/about">
              <AboutDetail />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<App />)
