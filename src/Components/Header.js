import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Search from './Search';
import Card from './Card';
import ShowTiming from './ShowTiming';
import Movies from './Movies';
import SighOut from './SighOut';
import Login from './Login';

import './Header.css';
import './Layout.css';
import './Movies.css';
import './Login.css';
import './Search.css';
import './ShowTiming.css';
import './Card.css';
import './Signout.css';

import Layout from './Layout';

function Header() {

    return (
        <BrowserRouter>

            <Layout>

                <header className="navbar">

                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/">   Movies  </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/search">   Search      </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/show-timing">  Show Timing      </Link>
                        </li>

                        <li className="navbar-item">
                             <Link className="navbar-link" to="/card">   Card     </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/sign-out"> Sign Out   </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/login">  Login   </Link>
                        </li>

                    </ul>



                </header>

                <Routes>
                     <Route path="/" element={<Movies />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/show-timing" element={<ShowTiming />} />
                    <Route path="/sign-out" element={<SighOut />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

            </Layout>

        </BrowserRouter>
    );
}

export default Header;