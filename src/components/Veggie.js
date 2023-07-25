import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Wrapper, VeggieCard, Gradient } from "./style";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10&tags=vegetarian`
      );
      const json = await data.json();
      console.log(json);

      localStorage.setItem("veggie", JSON.stringify(json.recipes));
      setVeggie(json.recipes);
    }
  };

  return (
    <Wrapper>
      <h2>Vegetarian Recipes</h2>
      <Splide
        options={{
          perPage: "5",
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            640: {
              perPage: 2,
              gap: ".7rem",
              height: "6rem",
            },
            480: {
              perPage: 1,
              gap: ".7rem",
              height: "auto",
              pagination: true,
            },
          },
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <VeggieCard>
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </VeggieCard>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
