import React from 'react';
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, jump, riderMass, riderSpeed) {
  return { id, date, jump, riderMass, riderSpeed };
}


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const RecentJumpEvents = (props) => {
    const classes = useStyles();

    let tableData = [];
    if (props.demoLocation && props.demoLocation.jumps) {
        const jumps = props.demoLocation.jumps;

        let eventData = [];
        
        jumps.forEach(jump => {
            jump.events.forEach(event => {
                eventData.push({
                    id: event._id,
                    date: event.timeStamp,
                    jump: jump.name,
                    riderMass: event.riderMass,
                    riderSpeed: event.riderSpeed
                });
            });
        });

        tableData = eventData;
    }

    return (
        <React.Fragment>
        <Title>Recent Jump Events</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Jump</TableCell>
                <TableCell>Rider Mass (lbs) </TableCell>
                <TableCell>Rider Speed (mph) </TableCell>
            </TableRow>
            </TableHead>
            { tableData && tableData.length ? (
                <TableBody>
                {tableData.map(data => (
                    <TableRow key={data.id}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.jump}</TableCell>
                    <TableCell>{data.riderMass}</TableCell>
                    <TableCell>{data.riderSpeed}</TableCell>
                    </TableRow>
                ))}
                </TableBody>)
             : <TableBody />
            }
        </Table>
        <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
            </Link>
        </div>
        </React.Fragment>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecentJumpEvents);