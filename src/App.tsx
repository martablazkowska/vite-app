import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CatsPage from "./pages/Cats/CatsPage";
import CatPage from "./pages/Cats/CatPage";
import { store } from "./store/store";

function App() {
  return (
    // <Provider store={store}>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="cats">
    //         <Route index element={<CatsPage />}></Route>
    //         <Route path=":name" element={<CatPage />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </Provider>
    <Provider store={store}>
      <Layout>
        <CatsPage />
      </Layout>
    </Provider>
  );
}

export default App;
