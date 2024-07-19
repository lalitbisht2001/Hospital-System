import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navigation from "./ADMINISTRATOR/HEADER/Navigation";
import "./App.css";
import Doctorsign from "./AUTHENTICATION/SIGN/Doctorsign";
import Usersign from "./AUTHENTICATION/SIGN/Usersign";
import Mergelogin from "./AUTHENTICATION/LOGIN/Mergelogin";
import User from "./User";
import Form from "./COMPONENT/FORM/Form";
import Navigation from "./ADMINISTRATOR/HEADER/Navigation";
import Patient from "./ADMINISTRATOR/PATIENT/Patient";
import History from "./ADMINISTRATOR/PATIENT/History";
import SearchPatient from "./ADMINISTRATOR/PATIENT/SearchPatient";
import Current from "./ADMINISTRATOR/PATIENT/Current";
import FormD from "./ADMINISTRATOR/DOCTOR/FormD";
import MainDoctor from "./COMPONENT/DOCTOR/MainDoctor";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mergelogin />} />
          <Route path="/doctorsign" element={<Doctorsign />} />
          <Route path="/usersign" element={<Usersign />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/form" element={<Form />} />
          <Route path="/doctor" element={<Navigation />} />
          <Route path="/doctor/patient" element={<Patient />} />
          <Route path="/doctor/patient/history" element={<History />} />
          <Route path="/doctor/patient/searchpatient" element={<SearchPatient />} />
          <Route path="/doctor/patient/currentpatient" element={<Current />} />
          <Route path="/doctor/formd" element={<FormD />} />
          <Route path="/user/userdoctor" element={<MainDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
