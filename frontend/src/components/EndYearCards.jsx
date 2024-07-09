import React from 'react'

const EndYearCards = ({data}) => {
  return (
    <div className="border-slate-400 border w-60 p-2 rounded-md drop-shadow-md">
    <div>
      <h2>
        <b>Sector: </b>
        {data.sector}
      </h2>
      <p>
        <b>Topic: </b>
        {data.topic}
      </p>
      <p>
        <b>Region: </b>
        {data.region}
      </p>
      <p>
        <b>Insight: </b>
        {data.insight}
      </p>
      <p>
        <span className="font-bold">
          {data.end_year ? `End Year: ${data.end_year}` : ""}
        </span>
      </p>
    
      <p>
        <span className="font-bold">
          {data.start_year ? `Start Year: ${data.start_year}` : ""}
        </span>
      </p>
    </div>
  </div>
  )
}

export default EndYearCards;