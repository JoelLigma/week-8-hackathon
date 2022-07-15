import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import BookingPage from "./client/pages/Booking/Booking";
import axios from "axios";

export default class App extends React.Component {
  state = {
    dateSelected: new Date().getDate(),
  };

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
        date: `${this.state.dateSelected}/${new Date().getMonth()}/${
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
  };

  render() {
    return (
      <div className="App">
        <h1 className="home__header">Header</h1>
        <Link to="/bookings">
          <button>Book an appointment</button>
        </Link>
        <Switch>
          <Route
            path="/bookings"
            render={() => (
              <BookingPage
                formSubmitHandler={this.formSubmitHandler}
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
