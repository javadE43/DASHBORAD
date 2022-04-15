import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable';

function List() {
  return (
    <div className='list'>
        <Sidebar></Sidebar>
          <div className="liscontainer">
            <Navbar></Navbar>
            <Datatable></Datatable>
        </div>
    </div>
  )
}

export default List