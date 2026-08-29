import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Triangle from "./pages/Triangle";
import Calculator from "./pages/Calculator";
import ScenarioList from "./pages/ScenarioList";
import ScenarioDetail from "./pages/ScenarioDetail";
import Glossary from "./pages/Glossary";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="triangle" element={<Triangle />} />
        <Route path="calculateur" element={<Calculator />} />
        <Route path="scenarios" element={<ScenarioList />} />
        <Route path="scenarios/:id" element={<ScenarioDetail />} />
        <Route path="glossaire" element={<Glossary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
