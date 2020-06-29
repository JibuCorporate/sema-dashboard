import React from "react";
import {
  Typography,
  Grid,
  IconButton,
  Select,
  MenuItem
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, Share } from "@material-ui/icons";
import moment from "moment";
import { stringify } from "qs";

import { backendUrl } from "../../config";
 
export const UnitOfTimePicker = props => {
  const handleChange = event => {
    const unitOfTime = event.target.value;
    props.onChange({ unitOfTime });
  };
  return (
    <Select onChange={handleChange} value={props.value}>
      <MenuItem value="week">Week</MenuItem>
      <MenuItem value="month">Month</MenuItem>
      <MenuItem value="quarter">Quarter</MenuItem>
      <MenuItem value="year">Year</MenuItem>
    </Select>
  );
};

export const DateRangePicker = props => {
  const { value, unitOfTime, onChange } = props;
  const disableNext = moment(value)
    .endOf(unitOfTime)
    .add(1, unitOfTime)
    .isAfter(moment().endOf(unitOfTime));
  const handleChange = delta => () => {
    const date = moment(value)
      .add(parseInt(delta), unitOfTime)
      .toDate();
    onChange({ date });
  };
  return (
    <Grid container alignItems="center">
      <Grid item>
        <IconButton onClick={handleChange(-1)}>
          <ChevronLeft />
        </IconButton>
      </Grid>

      <Grid item>
        <Typography variant="body2">
          {format(props.value, props.unitOfTime)}
        </Typography>
      </Grid>

      <Grid item>
        <IconButton disabled={disableNext} onClick={handleChange(1)}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export const FacilityPicker = props => {
  const handleChange = event => {
    const value = event.target.value;
    const facilityId = value !== "all" ? value : null;
    props.onChange({ facilityId });
  };
  return (
    <Select onChange={handleChange} value={props.value || "all"}>
      <MenuItem value="all">All Facilities</MenuItem>
      {props.facilities.map(facility => (
        <MenuItem key={facility.id} value={facility.id}>
          {facility.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export class ExportCSV extends React.Component {
  constructor(props) {
    super(props);

    this.handleExport = this.handleExport.bind(this);
  }

  handleExport() {
    window.open(
      `${backendUrl}/portal/stats/aggregate/csv?${stringify({
        access_token: localStorage.getItem("token"),
        date: this.props.date,
        unitOfTime: this.props.unitOfTime
      })}`
    );
  }

  render() {
    return (
      <IconButton onClick={this.handleExport}>
        <Share />
      </IconButton>
    );
  }
}

function format(date = new Date(), unitOfTime = "week") {
  const value = moment(date);
  if (unitOfTime === "month") {
    return value.format("MMMM");
  }

  if (unitOfTime === "year") {
    return value.format("YYYY");
  }

  if (unitOfTime === "quarter") {
    return (
      value.startOf(unitOfTime).format("MMM") +
      " - " +
      value.endOf(unitOfTime).format("MMM YYYY")
    );
  }

  return (
    value.startOf(unitOfTime).format("Do MMM") +
    " - " +
    value.endOf(unitOfTime).format("Do MMM YYYY")
  );
}
