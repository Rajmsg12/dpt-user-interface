import React , {useState , useEffect} from 'react'
import './Style/category.css'
import { useParams } from 'react-router-dom';

const CategoryToursDescription = () => {
    const [tourData, setTourData] = useState(null);
    const { categoryName } = useParams()
    const formattedCategory = categoryName
      .split('-') // Split by hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' ');
    const url = window.location.href;
    const spliturl = url.split("/");
    const slug = spliturl[4];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:9900/plan/${slug}`);
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
    }, []);
    return (
        <>
            <div className="CategoryToursDescription">
                <div className="container">
                    <div className="CategoryToursDescriptionIn">
                        <h2>{formattedCategory} Description</h2>
                        {tourData && tourData.description && (
                            <div>{tourData.description.blocks[0].text}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default CategoryToursDescription
