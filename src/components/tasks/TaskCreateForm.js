import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetApiDataAction,
  StoreTaskDAtaAction,
  handlechngeInputForm,
} from "../../redux/action/TasklistAction";

export default function TaskCreateForm(props) {
  const dispatch = useDispatch();

  // const TaskFromInpute = useSelector((state) => state.CounterReducer.tasks);

  const TaskFromInpute = useSelector((state) => state.counterreducer.taskForm);

  const handlechngeInput = (name, value) => {
    dispatch(handlechngeInputForm(name, value));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    dispatch(StoreTaskDAtaAction(TaskFromInpute));
  };
  return (
    <div>
      <form className="container" onSubmit={(e) => submitForm(e)}>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Title"
            value={TaskFromInpute.Title}
            onChange={(e) => handlechngeInput("Title", e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            class="form-control"
            value={TaskFromInpute.Priority}
            onChange={(e) => handlechngeInput("Prority", e.target.value)}
          >
            <option value="">select priority</option>
            <option value="Low">Low</option>
            <option value="Average">Average</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" className="btn-success float-left">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
