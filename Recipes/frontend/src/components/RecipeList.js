import "./main.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const RecipeList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("../../api/recipes/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data &&
        data.map((recipe) => {
          return (
            <div className="container" key={recipe.id}>
              <h1>
                <Link key={recipe.category} to={`/ui/recipes/${recipe.id}`}>
                  {recipe.title}
                </Link>
              </h1>
              <h3>{recipe.desc}</h3>
              <div
                className="preview"
                style={{ background: `url(${recipe.preview})` }}
              ></div>
              <h4>
                Category:{" "}
                <li>
                  <Link
                    key={recipe.category}
                    to={`/ui/categories/${recipe.category}`}
                  >
                    {recipe.category_title}
                  </Link>
                </li>
              </h4>
            </div>
          );
        })}
    </ul>
  );
};

export default RecipeList;
