import { Link } from "react-router-dom";
import "./Booking.scss";

const BookingPage = ({
  formSubmitHandler,
  calenderClickHandler,
  dateSelected,
}) =>
  // props
  {
    // console.log(props);

    let selectedDate;

    const getDaysInMonth = (year, month) => {
      return new Date(year, month, 0).getDate();
    };

    // prepare calender data
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1; // months are zero based

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    let monthName = month[d.getMonth()];

    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    const todaysDay = new Date().getDate();
    let daysInMonthArray = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      daysInMonthArray.push(i);
    }

    return (
      <section className="booking">
        <h1 className="booking__header">
          Please enter your details to book an appointment with one of our
          doctors.
        </h1>

        <form action="" className="booking__form">
          <div className="booking__wrapper">
            <div className="booking__container">
              <label htmlFor="fname" className="booking__label">
                First name:
              </label>
              <input
                type="text"
                className="booking__input"
                autoComplete="off"
              />
              <label htmlFor="lname" className="booking__label">
                Last name:
              </label>
              <input
                type="text"
                className="booking__input"
                autoComplete="off"
              />
              <label htmlFor="email" className="booking__label">
                Email:
              </label>
              <input
                type="text"
                className="booking__input"
                autoComplete="off"
              />
              <label htmlFor="phone" className="booking__label">
                Phone:
              </label>
              <input
                type="text"
                className="booking__input"
                autoComplete="off"
              />
              <label htmlFor="appointment-type" className="booking__label">
                Appointment type:
              </label>
              <div className="booking__appointment">
                <div className="appointment__container">
                  <input
                    type="radio"
                    id="consultation"
                    value="consultation"
                    name="appointment-type"
                    className="appointment__input"
                  />
                  <label htmlFor="consultation" className="appointment__label">
                    Consultation
                  </label>
                </div>
                <div className="appointment__container">
                  <input
                    type="radio"
                    id="screening"
                    value="screening"
                    name="appointment-type"
                    className="appointment__input"
                  />
                  <label htmlFor="screening" className="appointment__label">
                    Screening
                  </label>
                </div>
              </div>
            </div>

            <div className="booking__container">
              <div className="calender">
                <ul>
                  {/* <li className="calender__prev">&#10094;</li> */}
                  {/* <li className="calender__next">&#10095;</li> */}
                  <li>
                    {monthName}
                    <br />
                    <span>{currentYear}</span>
                  </li>
                </ul>
              </div>

              <ul className="calender__weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
              </ul>

              <ul className="calender__days">
                {daysInMonthArray.map((num) => {
                  return (
                    <li
                      key={num}
                      onClick={
                        num > todaysDay
                          ? (e) => {
                              selectedDate = num;
                              calenderClickHandler(e, num);
                            }
                          : ""
                      }
                    >
                      <span
                        className={`calender__date ${
                          num === dateSelected ? `calender__active` : ""
                        } ${num < todaysDay ? `calender__past` : ""} ${
                          num >= todaysDay ? `calender__open` : ""
                        }`}
                      >
                        {num}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <label htmlFor="appointment-type" className="booking__label">
                Please select a time:
              </label>
              <div className="booking__time">
                <div className="appointment__container">
                  <input
                    type="radio"
                    id="consultation"
                    value="eleven"
                    name="time"
                    className="appointment__input"
                  />
                  <label htmlFor="consultation" className="appointment__label">
                    11:00
                  </label>
                </div>
                <div className="appointment__container">
                  <input
                    type="radio"
                    id="screening"
                    value="twelve"
                    name="time"
                    className="appointment__input"
                  />
                  <label htmlFor="screening" className="appointment__label">
                    12:00
                  </label>
                </div>
                <div className="appointment__container">
                  <input
                    type="radio"
                    id="screening"
                    value="thirteen"
                    name="time"
                    className="appointment__input"
                  />
                  <label htmlFor="screening" className="appointment__label">
                    13:00
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="booking__buttons">
            <Link to="/">
              <button className="booking__button booking__cancel">
                Cancel
              </button>
            </Link>
            <button
              className="booking__button booking__confirm"
              onSubmit={formSubmitHandler}
            >
              Book your appointment
            </button>
          </div>
        </form>
      </section>
    );
  };

export default BookingPage;
