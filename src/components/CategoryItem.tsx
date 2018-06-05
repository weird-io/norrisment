import * as React from "react";
import { Link } from "react-router-dom";

export const CategoryItem = props => (
  <li key={props.name}>
    <Link to={`/${props.name}`}>{props.name}</Link>
  </li>
);
