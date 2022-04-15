import React from 'react';
import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data=[
  {name : 'فروردین', Total:1200},
  {name : 'اردیبهشت', Total:2100},
  {name : 'خرداد', Total:800},
  {name : 'تیر', Total:1600},
  {name : 'مرداد', Total:900},
  {name : 'شهریور', Total:1700},
];

function Chart({aspect,title}) {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
              <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
        
          </defs>
          <XAxis dataKey="name" stroke='gray'/>
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className='chartgrid' />
          <Tooltip />
          <Area
           type="monotone"
            dataKey="Total"
             stroke="#8884d8"
              fillOpacity={1}
               fill="url(#total)"
                />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart