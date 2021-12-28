import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListNews from "./components/ListNews";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<ListNews />} />
          <Route path="favorites" element={<ListNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
