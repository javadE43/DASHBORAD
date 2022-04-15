import React,{useContext} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import data from '../../data/data'
import './single.scss';
import Chart from '../../components/chart/Chart'
import {usercontext}from '../../data/data';
import Tablelist from '../../components/table/Tablelist';
function Single() {

  return (
    <div className='single'>
      <Sidebar></Sidebar>
      <div className='singlecontainer'>
        <Navbar></Navbar>

        <div className="top">
          <div className="left">
            <div className="editbutton">
            ویرایش                
            </div>
            <h1 className="title">اطلاعات</h1>
             <div className="item">
               <img src='../images/product-1.jpg' alt='' className='itemimg'/>
               <div className="details">
                 <h1 className="itemtitle">حمید</h1>
                 <div className="detailitem">
                   <span className="itemkey">Email:</span>
                   <span className="itemvalue">javadahmadi@gmail.com</span>
                 </div>
                 <div className="detailitem">
                   <span className="itemkey">تلفن:</span>
                   <span className="itemvalue">09367394353</span>
                 </div>
                 <div className="detailitem">
                   <span className="itemkey">نشانی:</span>
                   <span className="itemvalue">تهران خیابان 3 </span>
                 </div>
                 <div className="detailitem">
                   <span className="itemkey">کشور:</span>
                   <span className="itemvalue">ایران</span>
                 </div>
               </div>
             </div>
          </div>
          <div className="right">
            <Chart aspect={3 /1} title='هزینه کاربر (6 ماه گذشته)'></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className='title'>آخرین فروش </h1>
          <Tablelist></Tablelist>
        </div>

      </div>
    </div>
  )
}

export default Single