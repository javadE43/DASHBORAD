import {React,useContext}from 'react'
import './navbar.scss';
import {GrSearch,GrLanguage} from 'react-icons/gr';
import {MdOutlineDarkMode,MdNotificationsNone,MdChatBubbleOutline} from 'react-icons/md'
import {BsFullscreenExit,BsCardList} from 'react-icons/bs'
import {DarkModecontext} from '../../contextdarkmode/darkmodecontext'

function Navbar() {

      const {dispatch}=useContext(DarkModecontext)



  return (
    <div className='navbar'>
      <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='search...' />
            <GrSearch className='icon'></GrSearch>
          </div>
          <div className="items">
            <div className="item">
                  <GrLanguage className='icon'></GrLanguage>
                  English
            </div>
            <div className="item">
                  <MdOutlineDarkMode className='icon' onClick={()=>dispatch({type:'TOGGLE'})}></MdOutlineDarkMode>
            </div>
            <div className="item">
                  <BsFullscreenExit className='icon'></BsFullscreenExit>
            </div>
            <div className="item">
                  <MdNotificationsNone className='icon'></MdNotificationsNone>
                  <div className="counter">1</div>
            </div>
            <div className="item">
                  <MdChatBubbleOutline className='icon'></MdChatBubbleOutline>
                  <div className="counter">2</div>

            </div>
            <div className="item">
                  <BsCardList className='icon'></BsCardList>
            </div>
            <div className="item">
                 <img src='./avatar.webp' className='avatar'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar