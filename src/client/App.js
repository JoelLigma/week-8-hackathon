import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import BookingPage from "./pages/Booking/Booking.js";
import axios from "axios";
import Assessment from "./pages/Assessment/Assessment";

const App = () => {
  const { dateSelected, setdateSelected } = useState(new Date().getDate());

  const bookingSubmitHandler = (e) => {
    e.preventDefault();
    //FIXME: URL missing
    const url = "";
    axios
      .post(url, {
        firstName: e.target.fname.value,
        lastName: e.target.lname.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        appointmentType: e.target.appointmentType.value,
        time: e.target.time.value,
        date: `${dateSelected}/${new Date().getMonth()}/${
          new Date().getFullYear
        }`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const calenderClickHandler = (_e, clickedId) => {
    setdateSelected({ clickedId });
  };

  // useEffect() {

  // }
  return (
    <div className="App">
      {console.log(Assessment)}
      <h1 className="home__header">Header</h1>
      <Link to="/bookings">
        <button>Book an appointment</button>
      </Link>
      <Route exact path="/" component={Assessment} />
      <Switch>
        <Route
          path="/bookings"
          render={() => (
            <BookingPage
              calenderClickHandler={calenderClickHandler}
              dateSelected={dateSelected}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
