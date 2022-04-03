import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import AppRoute from './routers/AppRoute';

function App() {
  return (
    <>
      <AppRoute>
          <Navbar />
          {/* <Footer /> */}
      </AppRoute>
    </>
  );
}

export default App;
