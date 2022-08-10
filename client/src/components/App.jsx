import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import IngredientSelect from './IngredientSelect.jsx';
import NewRecipe from './NewRecipe.jsx';
import Tag from './Tag.jsx';
import { WholeGrid, PageTopGrid, PageTitle, PageDescription, PageButtonGrid, PageButton, Page1Grid } from './page.styled.js'

export default function APP() {

  // when click the page button, sent axio get request to get all the recipe. And then use Tag.jsx to generate a button
  const [recipeArray, setRecipeArray] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState({});

  useEffect(() => {
    axios.get('/lazydish')
      .then((response) => {
        setRecipeArray(response.data);
      })
      .catch((err) => console.log(err));
  }, [])

  const handleClick = () => {
    var num = randomNumberInRange(0, recipeArray.length - 1);
    console.log('randomNumberInRange is: ', num)
    console.log('randomRecipe is: ', recipeArray[num])
    setRandomRecipe(recipeArray[num]);
  }

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <WholeGrid>
      <PageTopGrid>
        <PageTitle>
          🍱 🍲🥘 Lazy Dish 🥙🍛🍝
        </PageTitle>
        <PageDescription>Don't know what to eat today? Pick the ingredients you have and we will generate a list of dishes you can make 😋</PageDescription>
        {/* <PageButtonGrid>
          <PageButton>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>4</PageButton>
        </PageButtonGrid> */}
        <PageButton onClick={() => handleClick()}>Click to ramdonmy generate a dish</PageButton>
        {Object.keys(randomRecipe).length > 0 ? <Tag recipe={randomRecipe} /> : null}
      </PageTopGrid>
      <Page1Grid>
        {recipeArray.length > 0 && <IngredientSelect recipeArray={recipeArray} />}
        <NewRecipe />
      </Page1Grid>
    </WholeGrid>
  )
}