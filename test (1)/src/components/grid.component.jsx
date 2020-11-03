import React from "react";
import "./grid.styles.css";
const formatDate = (date) => {
  return date.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", "-");
}

const RenderBody = ({ id, name, date, perchase, rewards }) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      <td>{name}</td>
      <td>
        {formatDate(date)}
      </td>
      <td>${perchase}</td>
      <td>{rewards}</td>
    </tr>
  );
};

const RenderHead = (data) => {
  const [row] = data.slice(0, 1)
  return  <tr key="0">{ Object.keys(row).map(ele =><th scope="col">{ele}</th>) } </tr>
}

const Grid = ({ data }) => {
  return (
    <div className="table-responsive-lg main-table">
      <table className="table table-bordered">
        <thead>
         
            {RenderHead(data)}
        </thead>
        <tbody>
          {data.length && data.map((ele) => <RenderBody {...ele} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
