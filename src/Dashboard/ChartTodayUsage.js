import React from 'react';
import { connect } from "react-redux";
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const ChartTodayUsage = (props) => {
    const theme = useTheme();

    let jumpData = [];

    if (props.demoLocation && props.demoLocation.jumps) {
        const jumps = props.demoLocation.jumps;
        const events = [];
        
        jumps.forEach(jump => {
            jump.events.forEach(event => {
                events.push(event);
            });
        });

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const hour3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 3);
        const hour6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6);
        const hour9 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9);
        const hour12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
        const hour15 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15);
        const hour18 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18);
        const hour21 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21);
        const hour24 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

        const todaysEvents = events.filter(jumpEvent => new Date(jumpEvent.timeStamp) > startOfDay);

        const time0to3Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) <= hour3).length;
        const time3to6Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour3 && new Date(jumpEvent.timeStamp) <= hour6).length;
        const time6to9Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour6 && new Date(jumpEvent.timeStamp) <= hour9).length;
        const time9to12Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour9 && new Date(jumpEvent.timeStamp) <= hour12).length;
        const time12to15Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour12 && new Date(jumpEvent.timeStamp) <= hour15).length;
        const time15to18Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour15 && new Date(jumpEvent.timeStamp) <= hour18).length;
        const time18to21Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour18 && new Date(jumpEvent.timeStamp) <= hour21).length;
        const time21to24Count = todaysEvents.filter(jumpEvent => new Date(jumpEvent.timeStamp) > hour21 && new Date(jumpEvent.timeStamp) <= hour24).length;

        let data = [
            createData('00:00', time0to3Count),
            createData('03:00', time3to6Count),
            createData('06:00', time6to9Count),
            createData('09:00', time9to12Count),
            createData('12:00', time12to15Count),
            createData('15:00', time15to18Count),
            createData('18:00', time18to21Count),
            createData('21:00', time21to24Count),
            createData('24:00', 0),
            ];

        jumpData = data;
    }

    return (
        <React.Fragment>
        <Title>Peak Times</Title>
        <ResponsiveContainer>
            <LineChart
            data={jumpData}
            margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
            }}
            >
            <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
                Hour
            </XAxis>
            <YAxis stroke={theme.palette.text.secondary}>
                <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                >
                Jump Hits
                </Label>
            </YAxis>
            <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
            </LineChart>
        </ResponsiveContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartTodayUsage);