import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=10`
      );
      const json = await data.json();
      console.log(json);

      localStorage.setItem("popular", JSON.stringify(json.recipes));
      setPopular(json.recipes);
    }
  };

  return (
    <Wrapper>
      <h2>Trending Recipes</h2>
      <Splide
        options={{
          perPage: "4",
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
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
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Popular;
