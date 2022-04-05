import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setPhones(data.data));
    }, []);
    console.log(phones);
    // return [phones,setPhones];
    return (
        <div>
            <PieChart width={800} height={600}>
                <Pie data={phones} dataKey="investment" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
                <Pie data={phones} dataKey="investment" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>

            <BarChart width={600} height={400} data={phones}>
                <Bar dataKey="investment" fill="#8884d8" />
                <XAxis datakey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>

            <LineChart width={400} height={500} data={phones}>
                <Line dataKey="sell"></Line>
                <Line dataKey="revenue"></Line>
                <XAxis datakey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>

        </div>



    );
};

export default Dashboard;