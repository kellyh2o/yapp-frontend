import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Dashboard/Title';
import moment from 'moment';
import LocationHeader from '../Dashboard/LocationHeader';


const useStyles = makeStyles((theme) => ({  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 250,
  },
}));

function buildTableData(jump) {

  let tableData = [];

  jump.events.forEach(jumpEvent => {

      let customId = `${jump._id}-----${jumpEvent._id}`;

      if (tableData.filter(data => data.id === customId).length === 0) {
          tableData.push({
              id: customId,
              date: new Date(jumpEvent.timeStamp),
              jump: jump.name,
              riderMass: jumpEvent.riderMass,
              riderSpeed: jumpEvent.riderSpeed
          });
      }
  });

  return tableData.sort((x, y) => {
      return y.date - x.date;
  });
}

const Reports = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Paper style={{marginBottom: "20px", padding: "20px"}}>
        <LocationHeader />
      </Paper>
      <Grid container spacing={3}>
        {/* Jump Event Tables */}
        {props.demoLocation && props.demoLocation.jumps ? 
          props.demoLocation.jumps.map(jump => {
            let tableData = buildTableData(jump);
            return (
              <Grid key={jump._id} item xs={12}>
                <Paper className={classes.paper}>
                  <React.Fragment>
                    <Title>{jump.name} Jump Events</Title>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                         <TableCell>Date</TableCell>
                         <TableCell>Rider Mass (lbs) </TableCell>
                         <TableCell>Rider Speed (mph) </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.map(data => (
                          <TableRow key={data.id}>
                            <TableCell>{moment(data.date).calendar()}</TableCell>
                            <TableCell>{data.riderMass}</TableCell>
                            <TableCell>{data.riderSpeed}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </React.Fragment>
                </Paper>
              </Grid>
            );
          })
        :
        (<div />)
        }
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      demoLocation: state.demoLocation
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      selectView: (view) => {dispatch({type: 'SELECT_VIEW', view: view})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);