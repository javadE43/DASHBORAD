import React from 'react';
import './widget.scss';
import {RiArrowUpSLine} from'react-icons/ri';
import {IoIosPerson} from'react-icons/io';
import {FiShoppingCart} from'react-icons/fi';
import {MdOutlineMonetizationOn,MdOutlineAccountBalanceWallet} from'react-icons/md';



function Widget({type}) {
    
  let data;

 let amount=100;
 let diff=20;
 
  switch(type){
    case 'user':
        data={
          title:'کاربران',
          isMoney:false,
          link:'مشاهده همه کاربران',
          icon:<IoIosPerson style={{backgroundColor:'rgba(128,0,128,0.2)',color:'#f53b57'}} className='icon'></IoIosPerson>
        };
        break;
        case 'order':
          data={
            title:'سفارشات',
            isMoney:false,
            link:'مشاهده تمامی سفارشات',
            icon:<FiShoppingCart style={{backgroundColor:'rgba(255, 218, 77, 0.2)',color:'#ffd32a'}} className='icon'></FiShoppingCart>
          };
          break;
          case 'earning':
            data={
              title:'درآمد',
              isMoney:true,
              link:'مشاهده تمام درآمدها',
              icon:<MdOutlineMonetizationOn style={{backgroundColor:'rgba(137, 233 ,231, 0.2)',color:'#00d8d6'}} className='icon'></MdOutlineMonetizationOn>
            };
            break;
            case 'balance':
              data={
                title:'تعادل',
                isMoney:true,
                link:'مشاهده تمام جزئیات',
                icon:<MdOutlineAccountBalanceWallet style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}} className='icon'></MdOutlineAccountBalanceWallet>
              };
              break;
        default:
        break;
  }



  return (
    <div className='widget'>
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && 'تومان'}{amount}</span>
          <span className="link">{data.link}</span>

        </div>
        <div className="right">
          <div className="perceentage positive">
              <RiArrowUpSLine></RiArrowUpSLine>
              {diff} %
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget