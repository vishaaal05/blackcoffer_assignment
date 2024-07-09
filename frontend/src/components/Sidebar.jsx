import React from "react";
import Cards from "./DashboardCard";
import BubbleChart from "./BubbleChart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = ({
  selectedTopic,
  setSelectedTopic,
  setData,
  topics,
  setTopics,
  endYear,
  setEndYear,
  setAllDatas,
  showCharts,
  SetShowCarts,
  selectedEndYear, setSelectedEndYear
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch documents from the backend API
    const fetchDocuments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/data");
        const documents = await response.json();
        setAllDatas(documents);
        // Extract unique topics from the documents
        const uniqueTopics = [...new Set(documents.map((doc) => doc.topic))];
        const uniqueEndYear = [...new Set(documents.map((doc) => doc.end_year))];
        setTopics(uniqueTopics);
        setEndYear(uniqueEndYear);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);
//-------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (selectedTopic) {
      fetchData();
      SetShowCarts("Notshow");
    } else {
      setData([]);
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (selectedEndYear) {
      fetchData();
      SetShowCarts("Notshow");
    } else {
      setData([]);
    }
  }, [selectedEndYear]);

  // useEffect(() => {
  //   if (selectedSector) {
  //     fetchData();
  //     SetShowCarts("Notshow");
  //   } else {
  //     setData([]);
  //   }
  // }, [selectedSector]);
//------------------------------------------------------------------------------------------------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/data/filter?topics=${selectedTopic}&endYear=${selectedEndYear}`
    //    `http://localhost:5000/api/v1/data/filter?topics=${selectedTopic}&sector=${selectedSector}&region=${selectedRegion}&pestle=${selectedPestle}&source=${seletedSource}&endYear=${selectedEndYear}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //----------------------------------------------------------------------------------


  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setSelectedEndYear(event.target.value);
  };

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li
              className={
                showCharts === "Show"
                  ? "text-white rounded-md p-2 w-full cursor-pointer border-white border "
                  : "text-white ml-3 cursor-pointer"
              }
              onClick={() => {
                SetShowCarts("Show"); 
                setSelectedTopic("");
              }}
            >
              Charts

            </li>

            <li>
              <div className="">
                <select
                  value={selectedTopic}
                  onChange={handleTopicChange}
                  className= "block w-full  p-2 border-white border rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option className="p-4" value="" disabled>
                    Filter by topic
                  </option>
                  {topics &&
                    topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                </select>
              </div>
            </li>
            <li>
            <div className="">
                <select
                  value={selectedEndYear}
                  onChange={handleEndYearChange}
                  className= "block w-full  p-2 border-white border rounded-md bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option className="p-4" value="" disabled>
                      Filter by end year
                  </option>
                  {endYear &&
                    endYear.map((endYear) => (
                      <option key={endYear} value={endYear}>
                        {endYear}
                      </option>
                    ))}
                </select>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
