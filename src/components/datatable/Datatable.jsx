import React,{useContext,useState} from 'react';
import './datatable.scss';
import { DataGrid } from '@material-ui/data-grid';
import {usercontext,userColumns} from '../../data/data'
import {Link} from 'react-router-dom'
import {dataform}from '../../formdata'

function Datatable() {
    const [users,setuser]=useContext(usercontext)
   const handlerDelete=(id)=>{
    setuser(users.filter(item=>{
        return(
            item.id !== id
        )
    }))
    }

    const actionColumn=[
        {field:'action',headerName:'Action', width:200,renderCell:(params)=>{
            return(
                <div className='cellAction'>
                    <Link to='/users/test' style={{textDecoration:'none'}}>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='DeletButton' onClick={()=>handlerDelete(params.row.id)}>Delete</div>

                </div>
            )
        }}
    ]
  return (
    <div className='datatable'>
        <div className="datatabletitle">
             Add new user
             <Link to='/users/new' style={{textDecoration:'none'}} className='link'>
                Add New
             </Link>
        </div>
        <DataGrid
                className='dataGrid'
                rows={users}
                columns={userColumns.concat(actionColumn)}
                pageSize={12}
                rowsPerPageOptions={[12]}
                checkboxSelection
           
        />
    </div>   
  )
}

export default Datatable