import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured'
import {Rowsprovider} from '../../data/data'
import './home.scss'
import Tablelist from '../../components/table/Tablelist';
function Home() {
  return (
    <div className='home'>
       <Rowsprovider>
        <Sidebar></Sidebar>
        <div className='home-container'>
          <Navbar></Navbar>
          <div className="widgets">
            <Widget type='user'></Widget>
            <Widget type='order'></Widget>
            <Widget type='earning'></Widget>
            <Widget type='balance'></Widget>
          </div>
          <div className="charts">
            <Featured></Featured>
            <Chart aspect={2 /1} title='6 ماه گذشته (درآمد)'></Chart>
          </div>
          <div className="listcontainer">
            <div className="listtitle">Latest transactions</div>
            <Tablelist></Tablelist>
          </div>
        </div>
        </Rowsprovider>
    </div>

  )
}

export default Home