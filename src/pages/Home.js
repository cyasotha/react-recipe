import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home()
{
    return ( <Header title="my recipes">
    <Link to="recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
      search recipes
    </Link>
  </Header>)
}

export default Home