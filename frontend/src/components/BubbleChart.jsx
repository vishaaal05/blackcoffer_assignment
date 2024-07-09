// src/components/BubbleChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const BubbleChart = () => {
    const svgRef = useRef();

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/data/')
            .then(response => {
                const data = response.data.slice(0, 25);  // Adjust the slice as necessary
                drawChart(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const drawChart = (data) => {
        const width = 300;
        const height = 300;

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('background-color', '#f0f0f0');

        const bubble = d3.pack()
            .size([width, height])
            .padding(10);

        const root = d3.hierarchy({ children: data })
            .sum(d => d.relevance)
            .sort((a, b) => b.value - a.value);

        bubble(root);

        const nodes = svg.selectAll('.node')
            .data(root.children)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x}, ${d.y})`)
            .on('mouseover', (event, d) => {
                const tooltip = d3.select('.tooltip');
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(`Topic: ${d.data.topic}<br>Relevance: ${d.data.relevance}<br>Likelihood: ${d.data.likelihood}<br>Intensity: ${d.data.intensity}`)
                    .style('left', `${event.pageX}px`)
                    .style('top', `${event.pageY - 28}px`);
            })
            .on('mouseout', () => {
                d3.select('.tooltip').transition()
                    .duration(500)
                    .style('opacity', 0);
            })
            .on('click', (event, d) => {
                // Add interactivity here, such as filtering or displaying detailed info
                alert(`Clicked on: ${d.data.topic}
                    Relevance: ${d.data.relevance}
                    Likelihood: ${d.data.likelihood}
                    Intensity: ${d.data.intensity}`);
            });

        nodes.append('circle')
            .attr('r', d => d.r)
            .attr('fill', (d, i) => color(i))
            .attr('stroke', 'black')
            .attr('stroke-width', 1);

        nodes.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text(d => d.data.topic.substring(0, d.r / 3))
            .attr('font-size', d => `${Math.min(d.r / 3, 15)}px`);
    };

    return (
        <div className="">
            <svg ref={svgRef}></svg>
            <div className="tooltip absolute text-center p-2 bg-blue-300 border border-gray-400 rounded-lg pointer-events-none opacity-0"></div>
        </div>
    );
};

export default BubbleChart;
