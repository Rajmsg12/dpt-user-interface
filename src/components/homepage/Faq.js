import React, { useEffect, useState } from 'react';
import '../../Style/header.css';

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/faq/list');
        const data = await response.json();
        setFaqData(data.data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="accordionDiv">
        <div className="container">
          <div className="accordionDivIN">
            <h2>Frequently asked Questions</h2>
            <div className="accordionDivWrapper">
              <div className="faqBox">
                <div className="accordion" id="accordionExample">
                  {faqData.map((faqItem) => (
                    <div className="accordion-item" key={faqItem.id}>
                      <h2 className="accordion-header" id={`heading${faqItem.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faqItem.id}`}
                          aria-expanded="false"
                          aria-controls={`collapse${faqItem.id}`}
                        >
                          {faqItem.name}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faqItem.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${faqItem.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{faqItem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
