import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import './Tabela.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,

    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});






function Tabela(props) {
  const classes = useStyles();
  const [Admini, SetAdmini] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:56415/api/AdminApi").then(result => (
      SetAdmini(result.data)
    ))
  },[]);


  var Redirect=(id)=>{
    props.history.push({pathname:props.match.url + '/editrezervacije'+'/' + id})
    
  }
  var Obrisi=(id)=>{
    axios.delete("http://localhost:56415/api/AdminApi?id="+id);
    axios.get("http://localhost:56415/api/AdminApi").then(result => (
      SetAdmini(result.data)
    ));

    
  }
  var DodajNovog=()=>{
    props.history.push({pathname:props.match.url + '/dodajrezervaciju'})

  }
  

  return (
    <div>
    
      <br />
      <button className="button" onClick={DodajNovog}>Dodaj novog</button>
      <br />
      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">KorisnickoIme</StyledTableCell>
              <StyledTableCell align="right">Sifra</StyledTableCell>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="right" >Akcija</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Admini.map((row) => (
              <StyledTableRow key={row.id}>
               
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">{row.password}</StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right" ><button className="button" onClick={() => Redirect(row.id)} >Uredi</button>
                <button className="button" onClick={() => Obrisi(row.id)} >Obrisi</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabela;