import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header>
        <h1>Isabella Kingson</h1>
        <Nav />
      </header>
      <main className="portfolio-app">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
