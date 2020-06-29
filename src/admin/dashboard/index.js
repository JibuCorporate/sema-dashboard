import React from "react";
import { connect } from "react-redux";
import { showNotification } from "react-admin";
import { withStyles } from "@material-ui/core";
import { Overview } from "./overview";
   
const Dashboard = props => {
  return (
    <>
      <Overview {...props} />
    </>
  );
};

const styles = theme => ({
  grid: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
});

export default connect(
  state => ({ viewVersion: state.admin.ui.viewVersion }),
  { notify: showNotification }
)(withStyles(styles)(Dashboard));
