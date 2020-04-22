import React from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import moment from 'moment';

function buildTableData(demoLocation) {

    let tableData = [];
        
    if (demoLocation && demoLocation.jumps) {
        const jumps = demoLocation.jumps;

        jumps.forEach(jump => {
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
        });
    }

    return tableData.sort((x, y) => {
        return y.date - x.date;
    });
}

const RecentJumpEvents = (props) => {

    let tableData = buildTableData(props.demoLocation);

    return (
        <React.Fragment>
        <Title>Recent Jump Events</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Jump Name</TableCell>
                <TableCell>Rider Mass (lbs) </TableCell>
                <TableCell>Rider Speed (mph) </TableCell>
            </TableRow>
            </TableHead>
            { tableData && tableData.length ? (
                <TableBody>
                {tableData.map(data => (
                    <TableRow key={data.id}>
                        <TableCell>{moment(data.date.toString()).calendar()}</TableCell>
                        <TableCell>{data.jump}</TableCell>
                        <TableCell>{data.riderMass}</TableCell>
                        <TableCell>{data.riderSpeed}</TableCell>
                    </TableRow>
                ))}
                </TableBody>)
             : <TableBody />
            }
        </Table>
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