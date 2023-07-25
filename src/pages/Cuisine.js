import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CLink } from "./style";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisines = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisines(params.type);
    // console.log(params.type)
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => (
        <Card key={item.id}>
          <CLink to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </CLink>
        </Card>
      ))}
    </Grid>
  );
};

export default Cuisine;
