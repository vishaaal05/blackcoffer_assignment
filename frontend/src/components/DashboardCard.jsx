import React from 'react'
import ChartInfo from './ChartInfo'
import BubbleChart from './BubbleChart'
import TopicFilter from './TopicFilter'


const DashboardCards = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <ChartInfo />
                </div>

                <div class="flex items-center justify-center h-48 mb-12 m-20 rounded bg-gray-5">
                    <BubbleChart />
                </div>

            </div>

        </div>
    )
}

export default DashboardCards