import axios from "axios";
import * as Types from "../types/Types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const GetApiDataAction = () => async (dispatch) => {
  let data = [];
  axios.get("http://todo-app37.herokuapp.com/loadtodo").then((res) => {
    data = res.data;

    data.sort();
    data.reverse();
    dispatch({ type: Types.GET_TASKS, payload: data });
  });
};
export const GetApiDataActionDetails = (id) => async (dispatch) => {
  let data = [];
  axios
    .get(`http://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then((res) => {
      data = res.data;

      dispatch({ type: Types.GET_TASKS_Details, payload: data });
    });
};

export const StoreTaskDAtaAction = (newUser) => async (dispatch) => {
  console.log(`newUser`, newUser);
  if (newUser.Title.length == 0) {
    alert("Enter Title");
    return false;
  }

  if (newUser.Prority.length == 0) {
    alert("Enter Title");
    return false;
  }

  await axios
    .post("http://todo-app37.herokuapp.com/addTodo", newUser)
    .then((res) => {
      dispatch({ type: Types.UPDATE_NEW_VAL, payload: newUser });
      dispatch(GetApiDataAction());
    });
};
export const UpdateTaskDAtaAction = (newUser, id) => (dispatch) => {
  if (newUser.Title.length == 0) {
    alert("Enter Title");
    return false;
  }

  if (newUser.Prority.length == 0) {
    alert("Enter Title");
    return false;
  }

  axios
    .patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, newUser)
    .then((res) => {
      // dispatch({ type: Types.UPDATE_NEW_VAL, payload: newUser });
      //dispatch(GetApiDataAction());

      if (res.data.ok == 1) {
        alert("Task Updated");
      } else {
        alert("failed");
      }
    });
};

export const deleteTaskAction = (id, name) => (dispatch) => {
  axios
    .delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
    .then((res) => {
      // dispatch({ type: Types.UPDATE_NEW_VAL, payload: newUser });
      //dispatch(GetApiDataAction());
      if (res.data.ok == 1) {
        dispatch(GetApiDataAction());
        alert(`${name}  deleted`);
      } else {
        alert(`${name}  Not Deletted`);
      }
    });
};
export const handlechngeInputForm = (name, value) => async (dispatch) => {
  const taskform = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_TASK_INPUT, payload: taskform });
};
