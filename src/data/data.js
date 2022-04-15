
import {React,createContext,useState} from 'react';

export const rowscontext=createContext([])
export const usercontext=createContext([])


export const Rowsprovider=({children})=>{
    const [rows,setrows] = useState([
        {
            id:1143155,
            product:'Acer Nitro 5',
            img:'./images/product-7.jpg',
            data: '1 اسفند',
            amount:185,
            Customer:'ali',
            method:'cash on Delivery',
            status:'Approved'
        },
        {
            id:2243155,
            product:'Acer Nitro 5',
            img:'./images/product-8.jpg',
            data: '1 مهر',
            amount:785,
            Customer:'javad',
            method:'cash on Delivery',
            status:'Approved'
        },
        {
            id:3343155,
            product:'Acer Nitro 5',
            img:'./images/product-9.webp',
            data: '1 تیر',
            amount:385,
            Customer:'hamed',
            method:'cash on Delivery',
            status:'Pending'
        },
        {
            id:4443155,
            product:'Acer Nitro 5',
            img:'./images/product-10.jpg',
            data: '1 مرداد',
            amount:285,
            Customer:'majid',
            method:'cash on Delivery',
            status:'Approved'
        },
        {
            id:5543155,
            product:'Acer Nitro 5',
            img:'./images/product-11.jpg',
            data: '1 بهمن',
            amount:585,
            Customer:'ahmad',
            method:'cash on Delivery',
            status:'Pending'
        },
        {
            id:6643155,
            product:'Acer Nitro 5',
            img:'/images/product-7.jpg',
            data: '1 دی',
            amount:685,
            Customer:'ahmadi',
            method:'cash on Delivery',
            status:'Pending'
        },
        {
            id:7743155,
            product:'Acer Nitro 5',
            img:'/images/product-9.webp',
            data: '1 آبان',
            amount:775,
            Customer:'sara',
            method:'cash on Delivery',
            status:'Pending'
        },
    
    ])

    return(
        <rowscontext.Provider value={[rows,setrows]}>
            {children}
        </rowscontext.Provider>
    )
}

// data Users
// 
export const userColumns=[

  {field:'id',headerName:'ID',width:70},
  {field:'user',headerName:'User',width:230,renderCell:(params)=>{
    // console.log(params.row.id)
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt='avatar'/>
          {params.row.username}
          
        </div>
        
      )
  }
},

{

  field:'email',
  headerName:'Email',
   width:230,

},

{

  field:'age',
  headerName:'Age',
   width:100,

},

{

  field:'status',
  headerName:'Status',
   width:160,
   renderCell:(params)=>{
     return(
      <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
     )
   }
},

]

export const Userprovider=({children})=>{
  
    const [users,setuser]=useState([
        {
            id:1143155,
            username:'ali',
            img:'./images/product-4.webp',
            email:'ali1143155@gmail.com',
            status:'pending',
            age:35
        },
        {
            id:2243155,
            username:'javad',
            img:'./images/product-6.webp',
            email:'javad2243155@gmail.com',
            status:'passive',
            age:21
        },
        {
            id:3343155,
            username:'sara',
            img:'./images/product-1.jpg',
            email:'sara33431555@gmail.com',
            status:'active',
            age:23
        },
        {
            id:4443155,
            username:'ahmad',
            img:'./images/product-2.jpg',
            email:'ahmad4443155@gmail.com',
            status:'pending',
            age:24
        },
        {
            id:5543155,
            username:'hamed',
            img:'./images/product-3.jpg',
            email:'hamed5543155@gmail.com',
            status:'passive',
            age:27
        },
        {
            id:6643155,
            username:'majid',
            img:'./images/product-4.webp',
            email:'majid6643155@gmail.com',
            status:'active',
            age:29
        },
        {
            id:7743155,
            username:'majid',
            img:'./images/product-6.webp',
            email:'majid7743155@gmail.com',
            status:'passive',
            age:33
        },
        {
          id:7093155,
          username:'majid2',
          img:'./images/product-6.webp',
          email:'majid27743155@gmail.com',
          status:'passive',
          age:40
      },
      
      {
          id:79043155,
          username:'majid1',
          img:'./images/product-6.webp',
          email:'majid7743155@gmail.com',
          status:'passive',
          age:45
      }
      
      ]
      )
    return(
       <usercontext.Provider value={[users,setuser]}>
           {children}
       </usercontext.Provider>
    )


}






















// collapsesidebartoggle




export const collapsesidebar=createContext(false);


export const Usecollpas=({children})=>{
    const [collapse,setcollapse]=useState(false)


    return(
        <collapsesidebar.Provider value={[collapse,setcollapse]}>
          {children}
        </collapsesidebar.Provider>
    )
}




