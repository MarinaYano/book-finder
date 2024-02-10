import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Detail from "./components/Detail"
import Layout from "./components/Layout"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;