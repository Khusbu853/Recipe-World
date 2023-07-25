import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Info, DetailsWrapper, Button, Col1, ButtonGroup } from "./style";

const Recipe = () => {
  const params = useParams();
  // const navigate=useNavigate();
  const [recipeData, setRecipeData] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchData = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );
    const response = await data.json();
    setRecipeData(response);
  };

  useEffect(() => {
    fetchData(params.id);
  }, [params]);

  return (
    <>
      <DetailsWrapper>
        <Col1>
          <h2>{recipeData.title}</h2>
          <img src={recipeData.image} alt={recipeData.title} />
        </Col1>
        <Info>
          <ButtonGroup>
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
          </ButtonGroup>
          {activeTab === "instructions" && (
            <div style={{ marginTop: "1rem" }}>
              <p dangerouslySetInnerHTML={{ __html: recipeData.summary }}></p>
              <h4 style={{ marginTop: "1rem" }}>Instructions:-</h4>
              <p
                dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
              ></p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {recipeData.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </DetailsWrapper>
    </>
  );
};

export default Recipe;
