import Header from "./components/Header";
import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div  className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
