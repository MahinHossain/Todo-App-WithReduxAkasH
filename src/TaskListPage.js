import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "./components/components/Layout";
import Tasklist from "./components/tasks/Tasklist";
import TaskCreateForm from "./components/tasks/TaskCreateForm";
import CounterComponent from "./counter/CounterComponent";
import TextHit from "./components/components/TextHit";
import { GetApiDataAction } from "./redux/action/TasklistAction";
export default function TaskListPage(props) {
  const [newUserFormInputShow, setnewUserFormInputShow] = useState(false);
  const dispatch = useDispatch();
  let taskss = useSelector((state) => state.counterreducer.tasks);
  useEffect(() => {
    dispatch(GetApiDataAction());
  }, []);

  return (
    <div>
      <Layout>
        <CounterComponent />
        <br></br>
        <TextHit />
        <br></br>

        {newUserFormInputShow ? (
          <div>
            <h3> New User</h3>

            <div>
              <TaskCreateForm />
            </div>

            <br />
            <br />
          </div>
        ) : (
          <div></div>
        )}

        <div className="container">
          <div className="float-left ml-5">
            <h3 className="mt-2 bor mb-2 border bg-aqua border-primary text-primary">
              My Task
            </h3>
          </div>

          <div className="float-right mr-5">
            {newUserFormInputShow ? (
              <div>
                {" "}
                <button
                  className=" btn-danger mt-2 mb-2"
                  onClick={() =>
                    setnewUserFormInputShow(newUserFormInputShow ? false : true)
                  }
                >
                  Cancel Task
                </button>
              </div>
            ) : (
              <div>
                <button
                  className=" btn-success mt-2 mb-2"
                  onClick={() =>
                    setnewUserFormInputShow(newUserFormInputShow ? false : true)
                  }
                >
                  create Task
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="container mt-5">
          <Tasklist tasks={taskss} />
        </div>
      </Layout>
    </div>
  );
}
