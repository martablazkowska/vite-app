import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/List/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
