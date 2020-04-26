import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChartTodayUsage from './ChartTodayUsage';
import MostPopularJump from './MostPopularJump';
import RecentJumpEvents from './RecentJumpEvents';
import LocationHeader from './LocationHeader';

const useStyles = makeStyles((theme) => ({  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 251,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Paper style={{marginBottom: "20px", padding: "20px"}}>
        <LocationHeader />
      </Paper>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <ChartTodayUsage />
          </Paper>
        </Grid>
        {/* Most Popular Jump */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <MostPopularJump />
          </Paper>
        </Grid>
        {/* Recent Jump Events */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentJumpEvents />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}