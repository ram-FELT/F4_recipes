import "./main.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CategoryDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`../../api/categories/${id}`)
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
                style={{
                  background: `url(${recipe.preview})`,
                }}
              ></div>
            </div>
          );
        })}
    </ul>
  );
};

export default CategoryDetail;
