import React from "react";

class TableView extends React.Component {
  render() {
    const data = this.props.entry;
    
    return (
      <tr className="table_row">
        <th scope="row">{data.index}</th>
        <td>{data.acc_x}</td>
        <td>{data.acc_y}</td>
        <td>{data.acc_z}</td>
        <td>{data.created_on}</td>
      </tr>
    );
  }
}

export default TableView;
