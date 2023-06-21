import React, { useCallback, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { server_url } from '../../../config/config';

interface Row {
  _id: string,
  total: number
}

const RegSocietiesList = () => {
  const [rows, setRows] = useState<Array<Row>>([])
  const [total, setTotal] = useState(0)

  const calcTotal = useCallback((rows:Row[]) => {
		let total = 0;
		for (const object of rows) {
			total += object.total;
		}
    setTotal(total)
  }, []);
  
  React.useEffect(() => {
		const getData = async () => {
			let { data: res } = await axios.get(server_url + "/chart/stateWise");
			console.log(res)
      setRows(res);
      calcTotal(res)
		};
		getData();
	}, [calcTotal]);

  return (
		<Paper sx={{ width: '50%', overflow: 'hidden' }}>
      <TableContainer component={Paper} sx={{ maxHeight: 800 }}>
        <Table sx={{ width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={1}>
                <h2>State - Wise</h2>
              </TableCell>
              <TableCell align="right"><h2>Number Of Societies</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={1} />
              <TableCell><h3>Total - {total}</h3></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default RegSocietiesList