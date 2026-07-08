import { useNavigate } from "react-router-dom";
function Movies(){
    const movies = [  {
      id: 1,
      title: "Leo",
      language: "Tamil",
      rating: "8.5/10",
      timing: "6:00 AM",
      price: 180,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjg1MjJmODYtNmM4ZC00MmIwLTkxMDEtZDRhMjc3NTc3NzgyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 2,
      title: "Dear Comrade",
      language: "Tamil",
      rating: "9.0/10",
      timing: "9:00 AM",
      price: 250,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Dear_Comrade.jpg/250px-Dear_Comrade.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    {
      id: 3,
      title: "Jailer",
      language: "Tamil",
      rating: "8.8/10",
      timing: "12:00 PM",
      price: 200,
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg",
    },
    {
      id: 4,
      title: "Hi Nanna",
      language: "Tamil",
      rating: "9/10",
      timing: "3:00 PM",
      price: 280,
      image:
        "https://static.filmyfocus.com/wp-content/uploads/2023/12/Hi-Nanna-Movie.jpg",
    },
    {
      id: 5,
      title: "Seetha Raman",
      language: "Tamil",
      rating: "9.5/10",
      timing: "6:00 PM",
      price: 350,
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329656-30-05-2022-06-32-41.jpg",
    },
    {
      id: 6,
      title: "Amaran",
      language: "Tamil",
      rating: "8.8/10",
      timing: "9:00 PM",
      price: 200,
      image:
        "https://www.wallsnapy.com/img_gallery/amaran-second-look-poster-hd-download-4k-7289344.jpg",
    },
    {
      id: 7,
      title: "Karupu",
      language: "Tamil",
      rating: "8.5/10",
      timing: "12:00 AM",
      price: 180,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCQZwOplxfaiU1-KY5utBa4EP0uy2KkU4bQ&s",
    },
  ];

  const navigate = useNavigate();
  const user = localStorage.getItem('name');

  const handleBookNow = (movie) => {
    if(!user) {
        alert('Please login to book a ticket');
        navigate('/login');
    } else {
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
        navigate('/card');
        alert(`You have booked a ticket for ${movie.title}`);
    }
}
    return(
        <div className="movies">
            <p className="movie-welcome">welcome  {user} </p>
            <h1 className="movies-heading">Movie Ticket Booking</h1>
            
            <div className="movies-list">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img src={movie.image} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Language: {movie.language}</p>
                        <p>Rating: {movie.rating}</p>
                        <p>Timing: {movie.timing}</p>
                        <p>Price: Rs.{movie.price}</p>
                        <button onClick={()=> {handleBookNow(movie)}}>Book Now</button>
                    </div>
                ))}
            </div>     
        </div>
    );

}

export default Movies;