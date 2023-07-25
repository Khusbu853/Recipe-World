import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CLink } from "./style";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}&number=18`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.length ? (
        searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <CLink to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </CLink>
            </Card>
          );
        })
      ) : (
        <h2
          style={{
            fontFamily: "cursive",
            margin: "80px auto",
            background: "linear-gradient(35deg, #494949, #313131)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Result not found!
        </h2>
      )}
    </Grid>
  );
};

export default Searched;
