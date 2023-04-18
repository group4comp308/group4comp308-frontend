import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/Auth/AuthPage';
import PatientMenu from './components/Patient/PatientMenu';
import NurseMenu from './components/Nurse/NurseMenu';
import PredictHeartDisease from './components/Nurse/PredictHeartDisease';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import VitalSignsForm from './components/Nurse/VitalSignsForm';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  batchcredentials: 'include',
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/patient/:id" element={<PatientMenu />} />
          <Route exact path="/nurse/:id" element={<NurseMenu />} />
          <Route exact path="/predict" element={<PredictHeartDisease/>}/>
          <Route exact path="/vitalsigns/:id" element={<VitalSignsForm/>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );

}

export default App;



