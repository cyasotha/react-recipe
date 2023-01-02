import React, { useState } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/recipeList";

function Recipes()
{
    const [recipes] = useState(recipeData);
    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
      }

    return (<>
    <Search search = {search} handleChange={setSearch} handleSubmit = {handleSubmit}/>
    <RecipeList recipes = {recipes}/>
    </>)
}

export default Recipes