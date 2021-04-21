import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  let taskss = useSelector((state) => state.counterreducer.tasks);

  //for clock
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  // useEffect(() => {
  //   var timerID = setInterval(() => tick(), 1000);

  //   return function cleanup() {
  //     clearInterval(timerID);
  //   };
  // });

  // function tick() {
  //   setDate(new Date());
  // }

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    });
  });
  return (
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./">Home</Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./detail">Task List</Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./getapi">Get Api</Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./aboutus">About Us</Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <span class="badge badge-danger">{taskss.length}</span>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button class="btn btn-dark my-2 my-sm-0">
            {date.toLocaleTimeString()}
          </button>
        </form>
      </div>
    </nav>
  );
}
