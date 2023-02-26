import './appointments.css';

const Appointments = () => {
    return ( 
    <form>
    <h1>Book An Appointment</h1>
    <hr /> <br />
    <div>
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
      />
    </div>
    <div>
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
      />
    </div>
    <div>
      <label htmlFor="phoneNumber">Phone No: </label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Phone Number"
      />
    </div>
    <div>
      <label htmlFor="emailAddress">Email: </label>
      <input
        type="email"
        id="emailAddress"
        placeholder="Email Address"
      />
    </div>
    <div>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" />
    </div>
    <div>
      <label htmlFor="timings">Timings: </label>
      <input type="time" id="timings" />
    </div>
    <button type="submit">SUBMIT</button>
  </form>
     );
}
 
export default Appointments;