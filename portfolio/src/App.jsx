import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/header';
import Footer from './components/footer'


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
