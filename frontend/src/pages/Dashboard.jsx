import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BubbleChart from "../components/BubbleChart";
import Cards from "../components/DashboardCard";
import TopicFilter from "../components/TopicFilter";
import ChartInfo from "../components/ChartInfo";

export const Dashboard = () => {
  // const [selectedTopic, setSelectedTopic] = useState("");
  // const [data, setData] = useState([]);
  // const [topics, setTopics] = useState([]);
  // const [datas, setAllDatas] = useState();
  // useEffect(() => {
  //   // Fetch documents from the backend API
  //   const fetchDocuments = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/v1/data");
  //       const documents = await response.json();
  //       setAllDatas(documents);
  //       // Extract unique topics from the documents
  //       const uniqueTopics = [...new Set(documents.map((doc) => doc.topic))];
  //       setTopics(uniqueTopics);
  //     } catch (error) {
  //       console.error("Error fetching documents:", error);
  //     }
  //   };

  //   fetchDocuments();
  // }, []);

  // useEffect(() => {
  //   if (selectedTopic) {
  //     fetchData();
  //   } else {
  //     setData([]);
  //   }
  // }, [selectedTopic]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/v1/data/filter?topics=${selectedTopic}`
  //     );
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  return (
    <div>
      <div>
        {/* <Sidebar
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          data={data}
          setData={setData}
          topics={topics}
          setTopics={setTopics}
          datas={datas}
          setAllDatas={setAllDatas}
        /> */}
        <ChartInfo />
        <BubbleChart />
      </div>
    </div>
  );
};
