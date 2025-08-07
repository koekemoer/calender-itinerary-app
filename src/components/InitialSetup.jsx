import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InitialSetup = () => {
    const [city, setCity] = useState('');
    const [timeFormat, setTimeFormat] = useState('24h');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("e?", e);
        
        e.preventDefault();

        // shouldnt I use setState?
        localStorage.setItem('userCity', city);
        localStorage.setItem('userTimeFormat', timeFormat);

        // window.location.href = '/dashboard';
        navigate('/dashboard');
    };

    /**
     * useEffect runs side effects (like checking localStorage or calling an API) after the component renders. In this case, you’re using it to:
        Check if the user already set up their city/time
        Redirect to the dashboard if setup is complete
     */
    useEffect(() => {
        const storedCity = localStorage.getItem('userCity');
        const storedTimeFormat = localStorage.getItem('userTimeFormat');

        if (storedCity && storedTimeFormat) {
            navigate('/dashboard');
        }

    }, [navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Initial Setup</h2>

            {/* City Selector */}
            <div>
                <label>City:</label>
                <input 
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </div>

            {/* TimeFormat Selector */}
            <div>
                <label>Time Format:</label>
                <label>
                    <input 
                        type='radio'
                        name='timeFormat'
                        value='12h'
                        checked={timeFormat === '12h'}
                        onChange={(e) => setTimeFormat(e.target.value)}
                    />
                    12-hour
                </label>
                <label>
                    <input 
                        type='radio'
                        name='timeFormat'
                        value='24h'
                        checked={timeFormat === '24h'}
                        onChange={(e) => setTimeFormat(e.target.value)}
                    />
                    24-hour
                </label>
            </div>

            <button type='submit'>
                Save & Continue
            </button>

        </form>
    );

}

export default InitialSetup;