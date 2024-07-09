// src/components/ChartInfo.js
import React from 'react';

const ChartInfo = () => {
    return (
        
        <div className="p-4 bg-white border border-gray-400 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Bubble Chart Information</h2>
            <p className="mb-2">
                This bubble chart visualizes data based on intensity, likelihood, and relevance of different topics. Each bubble represents a topic from the dataset.
            </p>
            <ul className="list-disc list-inside mb-2">
                <li><strong>Bubble Size:</strong> Indicates the relevance of the topic. Larger bubbles have higher relevance.</li>
                <li><strong>Bubble Color:</strong> Represents different categories or sectors.</li>
                <li><strong>Position:</strong> The X and Y positions of the bubbles are randomly placed within the chart for visual separation.</li>
            </ul>
            <p className="mb-2">
                <strong>Tooltip Information:</strong> When you hover over a bubble, a tooltip will appear showing:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Topic:</strong> The name of the topic.</li>
                <li><strong>Relevance:</strong> The relevance score of the topic.</li>
                <li><strong>Likelihood:</strong> The likelihood score of the topic.</li>
            </ul>
        </div>
    );
};

export default ChartInfo;
