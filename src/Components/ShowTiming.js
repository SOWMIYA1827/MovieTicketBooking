function ShowTiming() {
   const movies = [
  {
    id: 1,
    title: "Leo",
    timing: "6:00 AM"
  },
  {
    id: 2,
    title: "Dear Comrade",
    timing: "9:00 AM"
  },
  {
    id: 3,
    title: "Jailer",
    timing: "12:00 PM"
  },
  {
    id: 4,
    title: "Hi Nanna",
    timing: "3:00 PM"
  },
  {
    id: 5,
    title: "Seetha Raman",
    timing: "6:00 PM"
  },
  {
    id: 6,
    title: "Amaran",
    timing: "9:00 PM"
  },
  {
    id: 7,
    title: "Karupu",
    timing: "12:00 AM"
  }
];
    return(
        <div className="show-timing">
            <h1 className="show-timing-heading">Show Timings</h1>
            <div className="show-timing-list">
                {movies.map((movie) => (
                    <div className="show-timing-card" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Timing: {movie.timing}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowTiming;
