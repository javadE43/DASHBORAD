import {React,useContext,useEffect,useState}from 'react';
import Styled,{css} from 'styled-components';
import './sidebar.scss';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineLogout,MdDashboard,MdOutlineLocalShipping ,MdOutlinePsychology,MdOutlineSettingsSystemDaydream,MdOutlineInsertChartOutlined} from "react-icons/md";
import { FiUser,FiSettings } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";
import { BsJustify } from "react-icons/bs";
import {IoIosNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import {Link} from 'react-router-dom';
import {DarkModecontext}from '../../contextdarkmode/darkmodecontext';
import {collapsesidebar} from '../../data/data'
function Sidebar(props) {
   const {state,dispatch}=useContext(DarkModecontext);
   const [collapse,setcollapse]=useContext(collapsesidebar)
  const handlertooglecollapsesidebar=()=>{
      setcollapse(!collapse)
   };



   const closetabwindow=()=>{
     
      }

  return (
    <div className={collapse?'sidebar toggle':'sidebar'}>
     
       <div className='top'>
       <Link to='/' style={{textDecoration:'none'}}>{collapse?<span className='logo'>LAMADMIN</span>: ''} </Link>
          {collapse?<Btncollapse onClick={handlertooglecollapsesidebar}></Btncollapse>: <Btncollapse  onClick={handlertooglecollapsesidebar}></Btncollapse>}
          </div>
      
      <hr></hr>
      <div className='center'>
         <ul>
           <li>
             <MdDashboard className='icon'></MdDashboard>
             {collapse?<span>Dashboard</span> : ''}
            </li>
              <p className='title'>LISTS</p>
           <li>
              <Link to='/users'  style={{textDecoration:'none'}}>
                  <FiUser className='icon'></FiUser>
                  {collapse? <span>Users</span> : ''}
              </Link>
            </li>
           <li>
              <Link to='/products'  style={{textDecoration:'none'}}>
                  <SiHomeassistantcommunitystore className='icon'></SiHomeassistantcommunitystore>
                  { collapse?<span>Products</span> :''}
                  
              </Link>
            </li>
           <li>
              <Link to='/'  style={{textDecoration:'none'}}>
               <FaRegCreditCard className='icon'></FaRegCreditCard>   
               {collapse?<span>Orders</span>: '' }
               
              </Link>
           </li>
           <li>
              <Link to='/'  style={{textDecoration:'none'}}>
                  <MdOutlineLocalShipping className='icon'></MdOutlineLocalShipping>
                  {collapse? <span>Delivery</span>: ''}         
              </Link>
            </li>
            <p className='title'>USEFUL</p>
           <li>
              <MdOutlineInsertChartOutlined className='icon'></MdOutlineInsertChartOutlined>
              {collapse? <span>Stats</span> : ''}           
            </li>
           <li>
              <IoIosNotificationsOutline className='icon'></IoIosNotificationsOutline>
              {collapse?  <span>Notifications</span>: ''}           
            </li>
            <p className='title'>SERVICE</p>

           <li>
             <MdOutlineSettingsSystemDaydream className='icon'></MdOutlineSettingsSystemDaydream>
             {collapse? <span>System health</span> : ''}           
            </li>
           <li>
              <MdOutlinePsychology className='icon'></MdOutlinePsychology>
              {collapse?  <span>Logs</span>: ''}          
            </li>
           <li>
              <FiSettings className='icon'></FiSettings> 
              {collapse?<span>Settings</span> : ''}       
            </li>
            <p className='title'>USER</p>
           <li>
              <VscAccount className='icon'></VscAccount>
              {collapse? <span>Profile</span>: ''}             
            </li>
           <li>
              <MdOutlineLogout className='icon' onClick={closetabwindow}></MdOutlineLogout>  
              {collapse?<span>Logout</span> : ''}       
            </li>
         </ul>
      </div>
      <div className='bottom'>
         {collapse ? 
               <>
                  <div className="colorOption light" onClick={()=>dispatch({type:'LIGHT'})}></div>
                  <div className="colorOption dark" onClick={()=>dispatch({type:'DARK'})}></div>
                  {/* <div className="colorOption"></div> */}
               </>
         : 
             <>  
                  <div className="togglecollaps "onClick={()=>dispatch({type:'TOGGLE'})}></div>
             </>
         
         }
     
      </div>

    </div>
  )
}



const Btncollapse=Styled(BsJustify)`
${props=>props.buttoncollapse?css`
margin-left:-0.5rem;
font-size: 1.5rem;
`:css`

margin-left:0.5rem;
font-size: 1.5rem;
`}
 
`

export default Sidebar