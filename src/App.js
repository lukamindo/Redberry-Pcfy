import FormWrapper from "pages/Form/FormWrapper";
import Landing from "pages/Landing/Landing";
import SubmitPage from "pages/Pop-up/SubmitPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<FormWrapper />} />
      <Route path="/submit" element={<SubmitPage />} />
    </Routes>
  );
}

export default App;
