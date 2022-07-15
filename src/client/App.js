import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import BookingPage from "./pages/Booking/Booking.js";
import axios from "axios";
import Assessment from "./pages/Assessment/Assessment";
import "./App.scss";
import image from "../download.png";

class App extends React.Component {
  state = {
    dateSelected: new Date().getDate(),
  };
  // const { dateSelected, setdateSelected } = useState(new Date().getDate());

  bookingSubmitHandler = (e) => {
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
        date: `${this.dateSelected}/${new Date().getMonth()}/${
          new Date().getFullYear
        }`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  calenderClickHandler = (_e, clickedId) => {
    this.setState({ dateSelected: clickedId });
    // setdateSelected(clickedId);
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <Link to="/">
              <img src={image} alt="brainflix logo" className="navbar__logo" />
            </Link>
            <ul className="navbar__list">
              <li className="navbar__item">
                <div className="navbar__container"></div>
              </li>
              <Link to="/bookings">
                <li className="navbar__item">Book an Appointment</li>
              </Link>
            </ul>
          </nav>
        </header>

        {/* <Link to="/bookings">
          <button>Book an appointment</button>
        </Link> */}
        <Route exact path="/" component={Assessment} />
        <Switch>
          <Route
            path="/bookings"
            render={() => (
              <BookingPage
                calenderClickHandler={this.calenderClickHandler}
                dateSelected={this.state.dateSelected}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
