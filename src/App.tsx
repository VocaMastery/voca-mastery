import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WordDetail from "./pages/WordDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-detail/:id" element={<WordDetail />} />
      </Routes>
    </>
  );
}

export default App;
