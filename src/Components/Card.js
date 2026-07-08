import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Card() {

    
     const location = useLocation();
     const movie = location.state || JSON.parse(localStorage.getItem('selectedMovie'));

     const [seats, setSeats] = useState(1);
     const [date, setDate] = useState("");
    const [booked, setBooked] = useState(false);

       if(!movie) {
        return <h1> No movie selected</h1>;
    }

  
     const totalPrice = movie.price * seats;
    

    const handlePayment = (e) => {
         e.preventDefault();
         const bookingData = {movie, seats, date, totalPrice};
         localStorage.setItem('bookingData', JSON.stringify(bookingData));
        alert(`Payment successful! You have booked ${seats} seat(s) for ${movie.title} on ${date}. Total price: Rs.${totalPrice}`);
        setBooked(true);
    }
    const savedBooking = JSON.parse(localStorage.getItem('bookingData'));

    const displayBooking =  booked ? {movie , seats, date, totalPrice} : savedBooking;
    
  

    return(
   <div className="card">
    <h1>Booking Confirmation</h1>
    <div className="card-details">
        <label>Movie:</label>
        <input type="text" value={movie.title} readOnly />
        <label>Timing:</label>
        <input type="text" value={movie.timing} readOnly />
        <label >Number of Seats:</label>
        <input type="number" value={seats} onChange={(e)=>setSeats(Number(e.target.value))} />
        <label>Select Date:</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        <label>TicketPrice:</label>
        <input type="text" value={`Rs.${movie.price}`} readOnly />
        <label>Total Price:</label>
        <input type="text" value={`Rs.${totalPrice}`} readOnly />
    </div>
    <button className="card-button" onClick ={(handlePayment)}>Confirm Booking</button>    


    <div className = "booking-summary">
        <h2>Booking Summary</h2>
        {displayBooking ? (
            <div className="booking-details">
                <p><strong>Movie:</strong> {displayBooking.movie.title}</p>
                <p><strong>Timing:</strong> {displayBooking.movie.timing}</p>
                <p><strong>Seats:</strong> {displayBooking.seats}</p>
                <p><strong>Date:</strong> {displayBooking.date}</p>
                 <h3 className="success-message">
                🎉 Ticket Booked Successfully
            </h3>
            </div>
        ) : (
            <p>No tickets booked yet.</p>
        )}
        </div>
   </div>
    );
}

export default Card;
