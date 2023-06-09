
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import PatientMenu from "./components/Patient/PatientMenu";
import NurseMenu from "./components/Nurse/NurseMenu";
import Checklist from "./components/Patient/HeartAttackRiskChecklist";
import PredictHeartDisease from "./components/Nurse/PredictHeartDisease";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import VitalSignsForm from "./components/Nurse/VitalSignsForm";
import PreviousVisits from "./components/Nurse/PreviousVisits";
import DailyHealthInformation from "./components/Patient/DailyHealthInformation";
import GameFrame from './components/Patient/GameFeature';
import Footer from './components/Common/Footer';
import MotivationalTip from './components/Nurse/MotivationalTip';
import PatientHomePage from "./components/Patient/PatientHomePage";
import EmergencyAlertForm from "./components/Patient/EmergencyAlertForm";
import ResolveEmergency from "./components/Nurse/ResolveEmergency";



// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/patienthome/:id" element={<PatientHomePage />} />
          <Route exact path="/patient/:id" element={<PatientMenu />} />
          <Route exact path="/nurse/:id" element={<NurseMenu />} />
          <Route exact path="/predict" element={<PredictHeartDisease />} />
          <Route exact path="/vitalsigns/:id" element={<VitalSignsForm />} />
          <Route exact path="/previousvisit/:id" element={<PreviousVisits />} />
          <Route exact path="/patient/:id/symptom-checklist" element={<Checklist />} />
          <Route exact path="/patient/:id/dailyinfo" element={<DailyHealthInformation />} />
          <Route exact path="/patient/:id/symptom-checklist" element={<Checklist />} />
          <Route exact path="/sendmotivationaltip/:id" element={<MotivationalTip />} />
          <Route exact path="/game" element={<GameFrame />} />
          <Route exact path="/patient/:id/emergency-alert" element={<EmergencyAlertForm/>} />
          <Route exact path="/resolve-emergency/:id" element={<ResolveEmergency/>} />

        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
