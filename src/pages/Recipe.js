import React from "react";
import { recipeData } from "../data/recipeDetails";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Recipe()
{
    const params = useParams();
    const recipe = recipeData.find(r => r.recipe_id === params.id);
    return (
            <div className="container my-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <Link
                    to="/recipes"
                    className="btn btn-warning mb-5 text-capatilize"
                  >
                    back to recipes list
                  </Link>
                  <img
                    src={recipe.image_url}
                    className="d-block w-100"
                    style={{ maxHeight: "30rem" }}
                    alt="recipe"
                  />
                </div>
                {/* info */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h6 className="text-uppercase">{recipe.title}</h6>
                  <h6 className="text-warning text-capitalize text-slanted">
                    provided by {recipe.publisher}
                  </h6>
                  <a
                    href={recipe.publisher_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2 text-capitalize"
                  >
                    publisher webpage
                  </a>
                  <a
                    href={recipe.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-2 mx-2 text-capitalize"
                  >
                    recipe url
                  </a>
                  <ul className="list-group mt-4">
                    <h2 className="mt-3 mb-4">Ingredients</h2>
                    {recipe.ingredients.map((item, index) => {
                      return (
                        <li key={index} className="list-group-item text-slanted">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
}

export default Recipe