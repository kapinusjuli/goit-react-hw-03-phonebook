import React, { Component } from "react";

const Filter = ({ filter, changeFilter }) => (
  <label>
    <h3>Find contacts by name</h3>
    <input type="text" value={filter} onChange={changeFilter}></input>
  </label>
);

export default Filter;
