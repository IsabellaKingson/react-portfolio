import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className="container">
        <NavTabs />
      </header>
      <main className="portfolio-app container">
        <Outlet />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
