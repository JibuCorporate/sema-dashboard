import React from "react";
import * as moment from "moment";

export function TimestampField({ record, source }) {
  const timestamp = record[source];

  if (!timestamp) {
    return <span>-</span>;
  }

  return <span>{moment(timestamp).fromNow()}</span>;
}
