import React from 'react'
import './featured.scss';
import {FiMoreVertical} from 'react-icons/fi';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {IoIosArrowDown} from 'react-icons/io';

function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>کل درآمد</h1>
        <FiMoreVertical fontSize='small'></FiMoreVertical>
      </div>
      <div className='bottom'>
           <div className="featuredchart">
               <CircularProgressbar value={70} text={'70%'} strokeWidth={'5'} ></CircularProgressbar>
           </div>
            <p className="title">حالت های فروش کل امروز</p>
            <p className="amount">$420</p>
            <p className="dese">جذاب برای موفقیت در فروش یک محصول یا خدمات حیاتی است.</p>
            <div className="summary">
              <div className="item">
                 <div className="itemtitle">هدف</div>
                 <div className="itemresult negative">
                    <IoIosArrowDown fontSize='small'></IoIosArrowDown>
                   <div className="resultamount">$12.4k</div>
                 </div>
              </div>
              <div className="item">
                 <div className="itemtitle">هفته گذشته</div>
                 <div className="itemresult positive">
                    <IoIosArrowDown fontSize='small'></IoIosArrowDown>
                   <div className="resultamount">$12.4k</div>
                 </div>
              </div>
              <div className="item">
                 <div className="itemtitle">ماه گذشته</div>
                 <div className="itemresult positive">
                    <IoIosArrowDown fontSize='small'></IoIosArrowDown>
                   <div className="resultamount">$12.4k</div>
                 </div>
              </div>
            </div>  
       </div>
    </div>
  )
}

export default Featured