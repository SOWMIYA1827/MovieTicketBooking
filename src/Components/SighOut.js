import { useNavigate } from 'react-router-dom';

function SighOut() {

    const navigate = useNavigate();

    const handleSighOut = () => {
        localStorage.clear();
        sessionStorage.clear();

        navigate('/');
    };

    return (
        <div className="signout-container">

            <div className="signout-card">

                <h1 className="signout-heading">
                    Are you sure you want to Sign Out?
                </h1>

                <p className="signout-text">
                    Thank you for using Kavitha Theaters 🎬
                </p>

                <button className="signout-button"  onClick={handleSighOut}                >
                    Sign Out
                </button>

            </div>

        </div>
    );
}

export default SighOut;