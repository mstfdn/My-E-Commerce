import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
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
import { useEffect } from 'react'
import { verifyToken, setAuthToken } from './auth/authService'
import { useDispatch } from 'react-redux'

const AppContent = () => {
  const dispatch = useDispatch();
  
  // Uygulama başladığında token kontrolü
  useEffect(() => {
    const checkAuth = async () => {
      // localStorage'dan token'ı al
      const token = localStorage.getItem('token');
      
      if (token) {
        // Token'ı axios header'ına ekle
        setAuthToken(token);
        
        // Token'ı doğrula
        await verifyToken(dispatch);
      }
    };
    
    checkAuth();
  }, [dispatch]);
  
  return (
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ToastContainer position="top-right" autoClose={3000} />
        <AppContent />
      </Provider>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(<App />);
