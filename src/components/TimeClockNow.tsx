import React, { useState, useEffect } from "react";

export const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        <div>{date.toLocaleTimeString()} {date.toLocaleDateString()}</div>
    );
};

export default DateTime;