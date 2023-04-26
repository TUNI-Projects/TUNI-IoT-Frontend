import React from "react";

class TableView extends React.Component {
  render() {
    const data = this.props.entry;
    const source = this.props.source;
    const created_on = new Date(data.created_on).toLocaleString('en-GB')

    return (
        <tr className="table_row">
        <th scope="row">{data.index}</th>
        {source === "acc" && (<td>{data.acc_x}</td>)}
        {source === "acc" && (<td>{data.acc_y}</td>)}
        {source === "acc" && (<td>{data.acc_z}</td>)}

        {source === "gyro" && (<td>{data.gyro_x}</td>)}
        {source === "gyro" && (<td>{data.gyro_y}</td>)}
        {source === "gyro" && (<td>{data.gyro_z}</td>)}
        <td>{created_on}</td>
      </tr>
    );
  }
}

export default TableView;
