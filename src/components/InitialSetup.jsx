import React, { useState } from "react";

const InitialSetup = () => {
    const [city, setCity] = useState('');
    const [timeFormat, setTimeFormat] = useState('24H');

    const handleSubmit = (e) => {
        console.log("e?", e);
        
        e.preventDefault();

        // shouldnt I use setState?
        localStorage.setItem('userCity', city);
        localStorage.setItem('userTimeFormat', timeFormat);

        window.location.href = '/dashboard';
    };

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