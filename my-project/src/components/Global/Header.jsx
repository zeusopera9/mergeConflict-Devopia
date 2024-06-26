import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchLoginStatus = async () => {
            try {
                const email = await localStorage.getItem("email");
                if (email) {
                    setLoggedIn(true);
                    setEmail(email);
                } else {
                    setLoggedIn(false);
                }
                const code = await localStorage.getItem("code");
                if(code) {
                    setCode(code);
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        };

        fetchLoginStatus();
    }, []);

    const location = useLocation(); // Get the current location

    const handleLogout = async () => {
        try {
            await fetch('/logout');
            setLoggedIn(false);
            setEmail('');
            localStorage.removeItem("email");
            if(localStorage.getItem("code") != null) {
                localStorage.removeItem("code");
            }
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800" style={{ backgroundColor: '#0F0F0F' }}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center"> {/* Replace <a> tag with <Link> from react-router-dom */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learn Karo !</span>
                    </Link>
                    {loggedIn ? (
                        <div className="flex items-center lg:order-2">
                            <button onClick={handleLogout} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log out</button>
                        </div>
                    ) : (
                        <div className="flex items-center lg:order-2">
                            <Link to="/auth" className={`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${location.pathname === '/auth' ? 'active' : ''}`}>Log in</Link> {/* Apply active class if the current location is '/auth' */}
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    )}

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${location.pathname === '/' ? 'active' : ''}`} aria-current="page">Home</Link> {/* Apply active class if the current location is '/' */}
                            </li>
                            {loggedIn && <li>
                                <Link to="/layout" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/layout' ? 'active' : ''}`}>Dashboard</Link> {/* Apply active class if the current location is '/layout' */}
                            </li>}
                            {loggedIn && <li>
                                <Link to="/chat" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/chat' ? 'active' : ''}`}>Chat</Link> {/* Apply active class if the current location is '/chat' */}
                            </li>}
                            {loggedIn && <li>
                                <Link to="/quiz" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/quiz' ? 'active' : ''}`}>Quiz</Link> {/* Apply active class if the current location is '/quiz' */}
                            </li>}
                            {loggedIn && code && <li>
                                <Link to="/Tdashboard" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/Tdashboard' ? 'active' : ''}`}>Teacher's Section</Link> {/* Apply active class if the current location is '/Tdashboard' */}
                            </li>}
                            {loggedIn && <li>
                                <Link to="/feedback" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/feedback' ? 'active' : ''}`}>Feedback</Link> {/* Apply active class if the current location is '/feedback' */}
                            </li>}
                            {loggedIn && <li>
                                <Link to="/learning" className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/feedback' ? 'active' : ''}`}>Learning</Link> {/* Apply active class if the current location is '/feedback' */}
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
