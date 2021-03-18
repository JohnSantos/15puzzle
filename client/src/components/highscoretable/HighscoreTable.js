import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const HighscoreTable = () => {
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getHighscores = async () => {
      const endpoint = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/records/highscore`;
      const res = await axios.get(endpoint);

      if (res && res.status === 200) {
        setRows(res.data.orderedRecords);
      }
    };
    getHighscores();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time&nbsp;(milliseconds)</TableCell>
            <TableCell>Moves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row, index) => (
              <TableRow key={`row-${index}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.moves}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HighscoreTable;
