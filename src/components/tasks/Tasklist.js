import React from "react";
import { useDispatch } from "react-redux";

import { deleteTaskAction } from "../../redux/action/TasklistAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Tasklist(props) {
  const { tasks } = { ...props };

  const dispatch = useDispatch();

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">prority</th>
            <th className="pointer" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.Title}</td>
              <td>{item.Prority}</td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  {" "}
                  <button className="btn-success ">edit</button>
                </Link>

                <button
                  className="btn-danger ml-2"
                  onClick={() =>
                    dispatch(deleteTaskAction(item._id, item.Title))
                  }
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
