import React, { useEffect, useState } from 'react';

const AppTest = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data') // Grâce au proxy, pas besoin de préciser localhost:8000
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>React & Symfony Integration</h1>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <p>Status: {data.status}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AppTest;
