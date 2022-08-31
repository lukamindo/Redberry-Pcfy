import FormWrapper from "pages/Form/FormWrapper";
import Landing from "pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<FormWrapper />} />
    </Routes>
  );
}

export default App;
