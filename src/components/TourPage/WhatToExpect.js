import React , {useEffect , useState} from 'react'
import { Editor, EditorState, ContentState, convertFromRaw } from 'draft-js';

const WhatToExpect = () => {
    const [backendData, setBackendData] = useState(null);
    const url = window.location.href;
    const spliturl = url.split("/");
    const slug = spliturl[4];
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:9900/${slug}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setBackendData(data);
        } catch (error) {
          console.error("Error fetching data from the backend:", error.message);
        }
      };
  
      fetchData();
    }, []);
  
    // Function to convert the JSON data to ContentState
    const convertToContentState = (json) => {
      const rawContentState = JSON.parse(json);
      return convertFromRaw(rawContentState);
    };
    return (
        <div>
            <div className="Whattoexpect">
                <div className="titlewithhd">
                    <h3>What to expect</h3>
                </div>
                <ul>
                {backendData && backendData.data && backendData.data.map((tour) => (
                    <div  key={tour.id}>
                      <Editor editorState={EditorState.createWithContent(convertToContentState(tour.included))} readOnly />
                      </div>
                
                  ))}
                </ul>
            </div>
        </div>
    )
}

export default WhatToExpect
