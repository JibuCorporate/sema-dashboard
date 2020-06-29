import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { fetchOverviewStats } from "./operations";

const defaultOverviewState = {
  date: new Date(),
  users: 0,
  products: 0,
  franchises: 0
};

export class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultOverviewState;

    this.updateStats = this.updateStats.bind(this);
  }

  updateStats(subState) {
    this.setState(subState, () =>
      fetchOverviewStats(
      )
        .then(data => {
          const { users, products, franchises } = data;
          console.log(data);
          this.setState({
            users,
            products,
            franchises
          });
        })
        .catch(error => this.props.notify(error.message))
    );
  }

  componentDidMount() {
    this.updateStats({});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.viewVersion !== this.props.viewVersion) {
      this.updateStats({});
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
        <Typography variant="headline">Overview</Typography>


        <Grid className={classes.grid} item xs={12} md={4} container spacing={16}>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography variant="body2">Users</Typography>
              <Grid container justify="space-between">
                <Grid item>
                  <Grid container alignItems="center" spacing={16}>
                    <Typography variant="display1">{this.state.users}</Typography>

                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography variant="body2">Products</Typography>
              <Grid container justify="space-between">
                <Grid item>
                  <Grid container alignItems="center" spacing={16}>
                    <Typography variant="display1">{this.state.products}</Typography>

                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography variant="body2">Franchise</Typography>
              <Grid container justify="space-between">
                <Grid item>
                    <Typography variant="display1">{this.state.franchises}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid> 
      </>
    );
  }
}
