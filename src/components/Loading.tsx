import * as React from "react";
import { Link } from "react-router-dom";
import "./Loading.css";

export const Loading = props => (
  <div className="w-100 spinner">
    <div className="rect1" />
    <div className="rect2" />
    <div className="rect3" />
    <div className="rect4" />
    <div className="rect5" />
  </div>
);
