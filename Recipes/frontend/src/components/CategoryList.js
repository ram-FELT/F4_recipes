import "./main.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("../../api/categories/")
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
        data.map((category) => {
          return (
            <div className="container" key={category.id}>
              <h1>
                <Link key={category.id} to={`/ui/categories/${category.id}`}>
                  {category.title}
                </Link>
              </h1>
              <div
                className="preview"
                style={{ background: `url(${category.preview})` }}
              ></div>
            </div>
          );
        })}
    </ul>
  );
};

export default CategoryList;
