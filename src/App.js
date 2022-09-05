import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "pages/Landing/Landing";
import SubmitPage from "pages/Pop-up/SubmitPage";
import LaptopInnerPage from "pages/Results/LaptopInnerPage";
import EmployeeSection from "pages/Form/EmployeeSection";
import LaptopSection from "pages/Form/LaptopSection";
import FormLayout from "pages/Form/FormLayout";
import ResultList from "pages/Results/ResultList";
import ResultLayout from "pages/Results/ResultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<FormLayout />}>
          <Route path="/form/1" element={<EmployeeSection />} />
          <Route path="/form/2" element={<LaptopSection />} />
        </Route>
        <Route element={<ResultLayout />}>
          <Route path="/results" element={<ResultList />} />
          <Route path="/results/:id" element={<LaptopInnerPage />} />
        </Route>
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
