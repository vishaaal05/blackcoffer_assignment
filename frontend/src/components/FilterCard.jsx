import React from "react";
import TopicFilter from "./TopicFilter";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import DashboardCards from "./DashboardCard";

const FilterCard = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [data, setData] = useState([]);
  const [topics, setTopics] = useState([]);
  const [datas, setAllDatas] = useState();
  const [showCharts, SetShowCarts] = useState("Show");
  const [selectedEndYear, setSelectedEndYear] = useState("");
  const [endYear, setEndYear] = useState([]);
  // console.log(endYear)
  


  return (
    <div>
      <Navbar />
      {showCharts === "Show" ? <DashboardCards /> : ""}

      <Sidebar
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        data={data}
        setData={setData}
        topics={topics}
        setTopics={setTopics}
        datas={datas}
        setAllDatas={setAllDatas}
        showCharts={showCharts}
        SetShowCarts={SetShowCarts}
        selectedEndYear={selectedEndYear}
        setSelectedEndYear={setSelectedEndYear}
        endYear={endYear}
        setEndYear={setEndYear}
      />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <TopicFilter
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            selectedEndYear={selectedEndYear}
            setSelectedEndYear={setSelectedEndYear}
            data={data}
            setData={setData}
            topics={topics}
            setTopics={setTopics}
            datas={datas}
            setAllDatas={setAllDatas}
            endYear={endYear}
            setEndYear={setEndYear}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
