import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './table.scss';
import {rowscontext} from '../../data/data';
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  
  },
});

function Tablelist() {
  const [rows,setrows]=useContext(rowscontext);
   console.log(rows[0].img+'table');
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className='table'>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((rows) => (
          <TableRow key={rows.id}>
              <TableCell className='tableCell'>{rows.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={rows.img} className='image'/>
                  {rows.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{rows.Customer}</TableCell>
              <TableCell className='tableCell'>{rows.data}</TableCell>
              <TableCell className='tableCell'>{rows.amount}</TableCell>
              <TableCell className='tableCell'>{rows.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${rows.status}`}>{rows.status}</span>
                
                
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tablelist