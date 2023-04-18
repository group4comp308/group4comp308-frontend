import React, { useState } from "react";
import { Navbar, Nav, Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import axios from "axios";

function PredictHeartDisease() {
    const [dailyInfo, setDailyInfo] = useState({
        age: "",
        sex: "",
        chestPainType: "",
        restingBloodPressure: "",
        cholesterol: "",
        fastingBloodSugar: "",
        restingElectrocardiographicResults: "",
        maximumHeartRateAchieved: "",
        exerciseInducedAngina: "",
        oldpeak: "",
        slope: "",
        numberMajorVessels: "",
        thal: "",
        date: new Date().toISOString(),
    });
    const [show, setShow] = useState(false);
    const [result, setResult] = useState();

    const handleClose = () => {
        setShow(false);
    };

    const setAge = (input) => {
        setDailyInfo({ ...dailyInfo, age: input });
    };

    const setSex = (input) => {
        setDailyInfo({ ...dailyInfo, sex: input });
    };

    const setChestPainType = (input) => {
        setDailyInfo({ ...dailyInfo, chestPainType: input });
    };

    const setRestingBloodPressure = (input) => {
        setDailyInfo({ ...dailyInfo, restingBloodPressure: input });
    };

    const setCholesterol = (input) => {
        setDailyInfo({ ...dailyInfo, cholesterol: input });
    };

    const setFastingBloodSugar = (input) => {
        setDailyInfo({ ...dailyInfo, fastingBloodSugar: input });
    };

    const setRestingElectrocardiographicResults = (input) => {
        setDailyInfo({
            ...dailyInfo,
            restingElectrocardiographicResults: input,
        });
    };

    const setMaximumHeartRateAchieved = (input) => {
        setDailyInfo({ ...dailyInfo, maximumHeartRateAchieved: input });
    };

    const setExerciseInducedAngina = (input) => {
        setDailyInfo({ ...dailyInfo, exerciseInducedAngina: input });
    };

    const setOldpeak = (input) => {
        setDailyInfo({ ...dailyInfo, oldpeak: input });
    };

    const setSlope = (input) => {
        setDailyInfo({ ...dailyInfo, slope: input });
    };

    const setNumberMajorVessels = (input) => {
        setDailyInfo({ ...dailyInfo, numberMajorVessels: input });
    };

    const setThal = (input) => {
        setDailyInfo({ ...dailyInfo, thal: input });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = [dailyInfo];

        try {
            const res = await axios.post(
                "http://localhost:5000/predict",
                body,
                config
            );

            setResult(res.data);
            setShow(true);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <Navbar className="navbar navbar-dark bg-dark">
                <Navbar.Brand>Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
        
        <div className="d-flex justify-content-center">
            <div className="card shadow p-3 mt-5">
                <h1 className="p-3">Heart Disease Prediction</h1>
                <Form onSubmit={(e) => formSubmit(e)}>
                    <FloatingLabel label="Age" className="mb-3" controlId="age">
                        <Form.Control type="number" placeholder="Age" onChange={e => setAge(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Sex" className="mb-3" controlId="sex">
                        <Form.Select aria-label="Sex" onChange={e => setSex(e.target.value)}>
                            <option value="">Select sex</option>
                            <option value="0">Female</option>
                            <option value="1">Male</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Chest Pain Type" className="mb-3" controlId="chestPainType">
                        <Form.Select aria-label="Chest Pain Type" onChange={e => setChestPainType(e.target.value)}>
                            <option value="">Select chest pain type</option>
                            <option value="0">Typical Angina</option>
                            <option value="1">Atypical Angina</option>
                            <option value="2">Non-anginal Pain</option>
                            <option value="3">Asymptomatic</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Resting Blood Pressure (mm Hg)" className="mb-3" controlId="restingBloodPressure">
                        <Form.Control type="number" placeholder="Resting Blood Pressure" onChange={e => setRestingBloodPressure(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Cholesterol (mg/dl)" className="mb-3" controlId="cholesterol">
                        <Form.Control type="number" placeholder="Cholesterol" onChange={e => setCholesterol(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Fasting Blood Sugar > 120 mg/dl" className="mb-3" controlId="fastingBloodSugar">
                        <Form.Select aria-label="Fasting Blood Sugar" onChange={e => setFastingBloodSugar(e.target.value)}>
                            <option value="">Select fasting blood sugar level</option>
                            <option value="0">Less than or equal to 120 mg/dl</option>
                            <option value="1">Greater than 120 mg/dl</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Resting ECG Results" className="mb-3" controlId="restingECG">
                        <Form.Select aria-label="Resting ECG Results" onChange={e => setRestingElectrocardiographicResults(e.target.value)}>
                            <option value="">Select resting ECG result</option>
                            <option value="0">Normal</option>
                            <option value="1">Having ST-T wave abnormality</option>
                            <option value="2">Left ventricular hypertrophy</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Maximum Heart Rate Achieved" className="mb-3" controlId="maxHeartRate">
                        <Form.Control type="number" placeholder="Maximum Heart Rate" onChange={e => setMaximumHeartRateAchieved(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Exercise Induced Angina" className="mb-3" controlId="exerciseInducedAngina">
                        <Form.Select aria-label="Exercise Induced Angina" onChange={e => setExerciseInducedAngina(e.target.value)}>
                            <option value="">Choose...</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="ST Depression Induced by Exercise" className="mb-3" controlId="oldpeak">
                        <Form.Control type="text" placeholder="ST Depression Induced by Exercise" onChange={e => setOldpeak(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="ST Slope" className="mb-3" controlId="stSlope">
                        <Form.Select aria-label="ST Slope" onChange={e => setSlope(e.target.value)}>
                            <option value="">Choose...</option>
                            <option value="0">Upsloping</option>
                            <option value="1">Flat</option>
                            <option value="2">Downsloping</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Number of Major Vessels" className="mb-3" controlId="numberMajorVessels">
                        <Form.Select aria-label="Number of Major Vessels" onChange={e => setNumberMajorVessels(e.target.value)}>
                            <option value="">Choose...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel label="Thalassemia" className="mb-3" controlId="thalassemia">
                        <Form.Select aria-label="Thalassemia" onChange={e => setThal(e.target.value)}>
                            <option value="">Choose...</option>
                            <option value="0">Normal</option>
                            <option value="1">Fixed Defect</option>
                            <option value="2">Reversible Defect</option>
                        </Form.Select>
                    </FloatingLabel>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Prediction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    According to the model, the patient{" "}
                    {result?.prediction ? " " : " does not "}have heart disease.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    )
}

export default PredictHeartDisease