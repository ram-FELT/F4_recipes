import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

const RecipeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`../../api/recipes/${id}`)
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
    data && (
      <div className="recipe">
        <h1>{data.title}</h1>
        <br />
        <h2>
          Category:{" "}
          <Link to={`/ui/categories/${data.category}`}>
            {data.category_title}
          </Link>
        </h2>
        <br />
        <div className="cooktime">
          <h3>{data.cook_time}</h3>
        </div>
        <br />
        <h2>{parse(data.ingredients)}</h2>
        <br />
        <h2>{parse(data.steps)}</h2>
      </div>
    )
  );
};

export default RecipeDetail;
