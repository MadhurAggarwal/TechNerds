import './Dashboard.css';

const Dashboard = () => {
    return ( 
        <>
    <header>
      <h1>Patient Dashboard</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <h2>Patient Information</h2>
            <p>Name: John Doe</p>
            <p>Age: 35</p>
            <p>Gender: Male</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h2>Medical History</h2>
            <p>Diagnosis: Hypertension</p>
            <p>Medications: Lisinopril</p>
            <p>Medical Conditions: None</p>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h2>Vitals</h2>
            <p>Blood Pressure: 120/80 mmHg</p>
            <p>Heart Rate: 80 bpm</p>
            <p>Temperature: 98.6 F</p>
          </div>
        </div>
      </div>
    </div>
    </>
     );
}
 
export default Dashboard;