import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { createStore } from "redux";
import * as Types from "../types/Types";

const initializitState = {
  counter: 10,
  valu: "",

  tasks: [],

  taskForm: {
    _id: null,
    Title: "",
    Prority: "",
  },
};

function CounterReducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
      break;

    case Types.UPDATE_NEW_VAL:
      alert("successfull");
      return {
        ...state,

        taskForm: {
          Title: "",
          Prority: " ",
        },
      };
      break;
    case Types.GET_TASKS_Details:
      return {
        ...state,
        taskForm: action.payload,
      };
      break;

    case Types.CHANGE_TASK_INPUT:
      const taskForm = { ...state.taskForm };

      taskForm[action.payload.name] = action.payload.value;
      console.log(`taskForm`, taskForm);
      return {
        ...state,
        taskForm,
      };
      break;

    default:
      break;
  }
  return state;
}
export default CounterReducer;
