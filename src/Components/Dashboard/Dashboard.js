import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 24100,
            "revenue": 105401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 42530,
            "revenue": 274500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 72160,
            "revenue": 678010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 52090,
            "revenue": 404705
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 60110,
            "revenue": 509500
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 67090,
            "revenue": 610500
        }
    ]
    return (
        <div className='container'>
            <h2 className='text-center fw-bold my-3'>This is Dashboard</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 mt-5'>
                <div className='col p-3'>
                    <LineChart width={390} height={350} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82cad5" />
                    </LineChart>
                </div>
                <div className='col p-3'>
                    <ComposedChart width={390} height={350} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    </ComposedChart>
                </div>
                <div className='col p-3'>
                    <BarChart width={390} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='col p-3'>
                    <AreaChart width={390} height={350} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;