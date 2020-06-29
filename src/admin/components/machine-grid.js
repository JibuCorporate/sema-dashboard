import React from "react";
import { Row, Col } from "react-grid-system";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  ButtonBase
} from "@material-ui/core";
import { green, orange, red } from "@material-ui/core/colors";
import { TimestampField } from "./fields";

export const MachineGrid = ({ ids = [], data = {} }) => {
  return (
    <Row style={{ padding: "1em 0" }}>
      {ids.map(id => {
        const record = data[id];
        return (
          <Col key={id} sm={4}>
            <MachineCard record={record} />
          </Col>
        );
      })}
    </Row>
  );
};

export function MachineHeader({ record }) {
  if (!record) {
    return <div />;
  }

  return (
    <Typography variant="body1">
      {record.name.toUpperCase()}
      <span
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          margin: "2px 5px",
          borderRadius: "5px",
          background: getStatusColor(record.updatedAt)
        }}
      />
    </Typography>
  );
}

export function MachineSystem({ record }) {
  if (!record) {
    return <div />;
  }

  return <Typography variant="caption">{record.systemId}</Typography>;
}

export function MachineCard({ record }) {
  if (!record) {
    return <div />;
  }

  return (
    <ButtonBase
      href={"/#/machines/" + record.id + "/show"}
      style={{ marginBottom: "2em", width: "100%" }}
    >
      <Card key={record.id} style={{ flexGrow: 1 }}>
        <CardHeader
          title={<MachineHeader record={record} />}
          subheader={<MachineSystem record={record} />}
        />

        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div>
              <Typography variant="caption">FIRST SEEN</Typography>
              <TimestampField
                label="First Uploaded"
                record={record}
                source="createdAt"
                showTime
              />
            </div>

            <div>
              <Typography variant="caption">LAST SEEN</Typography>
              <TimestampField
                label="Last Uploaded"
                record={record}
                source="updatedAt"
                showTime
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

function getStatusColor(timestamp) {
  const tenDays = 864000000;
  const elapsedMilliSeconds = Date.now() - new Date(timestamp).getTime();

  if (elapsedMilliSeconds < tenDays) {
    return green["500"];
  }

  if (elapsedMilliSeconds < tenDays * 2) {
    return orange["500"];
  }

  return red["500"];
}
