import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Default()
{
    return (<Header title="404" styleClass="default-hero">
    <h2 className="text-light text-uppercase">
      recipe not found
    </h2>
    <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
       home
    </Link>
  </Header>)
}

export default Default