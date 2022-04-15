import React,{useContext,useEffect,useState} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import {MdDriveFileMoveOutline} from 'react-icons/md'
import './new.scss';
function New({title,datainput}) {
  const [submit,setsetsubmit]=useState(false)
  const [file,setfile]=useState('');
  const [error,seterror]=useState({})
  const [data,setdata]=useState({
    family:'',
    last:'',
    email:'',
    phone:'',
    addr:'',
    user:'',
    country:''

  });


 const handlersubmit=(e)=>{
         e.preventDefault();
         seterror(validate(data))
         setsetsubmit(true)
         
   };
   
const hanchange=(e)=>{
  const {name,value}=e.target;
  setdata({...data,[name]:value})

}

useEffect(()=>{
  if(Object.keys(error).length === 0 && submit){
  }

},[error])

 const validate=(value)=>{
   const errors={};
   const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!value.email) {
    errors.email='email is reguired'
   }else if(!regex.test(value.email)){
    errors.email='this is not a valid email format'
   }
   if (!value.last) {
    errors.last='last is reguired'
   }else if(value.last.length<10){
    errors.last='this is not a valid last format'
   }
   if (!value.family) {
    errors.family='family is reguired'
   }else if(value.family.length<10){
    errors.family='this is not a valid family format'
   }
   if (!value.phone) {
    errors.phone='phone is reguired'
   }else if(value.phone.length <9){
    errors.phone='this is not a valid phone format'
   }
   if (!value.user) {
    errors.user='user is reguired'
   }else if(value.user.length<10){
    errors.user='this is not a valid user format'
   }
   return errors;
}


  return (
    <div className='new'>
      <Sidebar></Sidebar>
      <div className="newcontainer">
        <Navbar></Navbar>
        
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file):'../images/noimage.jpg'} alt=''/>
          </div>
          <div className="right">
            {(Object.keys(error).length === 0 && submit)?<p style={{color:'green',fontSize:'1,5rem',fontWeight:'bold'}}>success</p>:''}
            <form onSubmit={handlersubmit} action="" method="get">
            <div className="inputcontainer">
                     <label htmlFor="file">Image: <MdDriveFileMoveOutline className='icon'></MdDriveFileMoveOutline> </label>
                     <input type="file"  id='file' style={{display:'none'}} onChange={(e)=>setfile(e.target.files[0])}/>
                 </div>
                 {datainput.map(input =>{
                   return(
                    
                        <div className="inputcontainer" key={input.id}>
                          <p className='textError'>{error[input.name]}</p>
                          <label htmlFor="">{input.lable}</label>
                          <input name={input.name} type={input.type} placeholder={input.placeholder} onChange={(e)=>hanchange(e)}/>
                      </div>
                    
                   )
                 })}
                  
               
                 <button className='submit' type='submit'>ارسال</button>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default New