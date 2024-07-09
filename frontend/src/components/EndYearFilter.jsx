import React from 'react'
import EndYearCards from './EndYearCards';
const EndYearFilter = ({
    selectedEndYear,
    data
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Topic Filter</h1>
      <div className="flex justify-center mb-6">
        <select 
          value={selectedTopic} 
          onChange={handleTopicChange} 
          className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>Select a topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div> */}
      {selectedEndYear ? (
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Data for {selectedEndYear}
          </h2>
          <div className="border-slate-900 flex flex-wrap gap-2 justify-around">
            {" "}
            {data &&
              data.map((d) => {
                return <EndYearCards data={d} />;
              })}
          </div>
          {/* <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            {JSON.stringify(data, null, 2)}
          </pre> */}
        </div>
      ) : (
        // <div className="bg-white shadow-md rounded p-4">
        //   <h2 className="text-xl font-semibold mb-2 text-center">All Data </h2>
        //   <div className="border-slate-900 flex flex-wrap gap-2 justify-around">
        //     {" "}
        //     {data &&
        //       data.map((d) => {
        //         return <Cards data={d} />;
        //       })}
        //   </div>

        // </div>
        ""
      )}
    </div>
  )
}

export default EndYearFilter;