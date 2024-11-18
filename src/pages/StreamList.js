import React, { useState } from 'react';

const StreamList = () => {
    const [input, setInput] = useState('');
    const [events, setEvents] = useState([]);

    const handleAddEvent = () => {
        if (input.trim()) {
            setEvents([...events, input.trim()]);
            setInput(''); // Clear input field after submission
        }
    };

    const handleDeleteEvent = (index) => {
        const newEvents = events.filter((_, i) => i !== index);
        setEvents(newEvents);
    };

    return (
        <div className="stream-list">
            <h2>Your Streaming List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a movie or show"
            />
            <button onClick={handleAddEvent}>Add</button>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event}
                        <span onClick={() => handleDeleteEvent(index)}>❌</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StreamList;