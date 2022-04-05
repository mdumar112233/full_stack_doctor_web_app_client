import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Navbar';
import AppRoute from './routers/AppRoute';

function App() {
  return (
    <>
      <AppRoute>
          <Header />
          {/* <Footer /> */}
      </AppRoute>
    </>
  );
}

export default App;
