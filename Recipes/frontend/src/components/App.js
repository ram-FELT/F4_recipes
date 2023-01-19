import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import CategoryList from "./CategoryList";
import RecipeDetail from "./RecipeDetail";
import CategoryDetail from "./CategoryDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../../ui/recipes/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="../../ui/recipes/">Recipes</Nav.Link>
            <Nav.Link href="../../ui/categories/">Categories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="ui/recipes/" element={<RecipeList />} />
        <Route exact path="ui/recipes/:id" element={<RecipeDetail />} />
        <Route exact path="ui/categories/" element={<CategoryList />} />
        <Route exact path="ui/categories/:id" element={<CategoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("App");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
