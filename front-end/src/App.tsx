import { Route, Routes } from "react-router-dom";
import Cheatsheet from "./pages/Cheatsheet/Cheatsheet";
import ToDoPage from "./pages/to-do-page/ToDoPage";
import TypeManagerPage from "./pages/type-manager-page/TypeManagerPage";

function App() {
  return (
    // <div>
    //   <Cheatsheet/>
    // </div>
    <Routes>
      <Route path="/" element={<Cheatsheet />} />
      <Route path="/to-do" element={<ToDoPage />} />
      <Route path="/to-do1" element={<ToDoPage />} />
      <Route path="/type-manager" element={<TypeManagerPage />}></Route>
      <Route path="/type-12" element={<TypeManagerPage />}></Route>
    </Routes>
  );
}

export default App;
