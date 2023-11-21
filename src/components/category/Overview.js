import React, { useEffect, useState } from 'react';
import config from '../../config';

const Overview = () => {
    const [tourData, setTourData] = useState(null);
    const url = window.location.href;
    const spliturl = url.split("/");
    const slug = spliturl[4];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.baseUrl}/plan/${slug}`);
                const data = await response.json();
                if (data.status === 'success' && data.length > 0) {
                    // Parse JSON content in the description field
                    const parsedDescription = JSON.parse(data.data[0].description);

                    // Update the state with the parsed data
                    setTourData({ ...data.data[0], description: parsedDescription });
                } else {
                    console.error('Error fetching data:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once after the initial render.

    return (
        <>
            {tourData && (
                <div className="toptext">
                    <div className="Title">
                        <h2>{tourData.name}</h2>
                    </div>
                    <p>
                        <strong>{tourData.short_description}</strong>
                    </p>
                    <p>{tourData.description.blocks[0].text}</p>
                    {/* Add more rendering logic for other properties if needed */}
                </div>
            )}
        </>
    );
};

export default Overview;
