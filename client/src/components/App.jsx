import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import IngredientSelect from './IngredientSelect.jsx';
import NewRecipe from './NewRecipe.jsx';
import Tag from './Tag.jsx';
import { WholeGrid, PageTopGrid, PageTitle, PageDescription, PageButtonGrid, PageButton, RandomRecipeContainer, Page1Grid } from './page.styled.js'

export default function APP() {
  const proteinOptions = [
    { value: 'beef', label: '🐄 Beef' },
    { value: 'pork', label: '🐖 Pork' },
    { value: 'chicken', label: '🐔 Chicken' },
    { value: 'egg', label: '🥚 egg' },
    { value: 'lamb', label: '🐑 Lamb' },
    { value: 'salmon', label: '🐟 Salmon' },
    { value: 'tofu', label: '🧈 Tofu' },
    { value: 'cheese', label: '🧀 Cheese' }
  ];

  const vegetableOptions = [
    { value: 'asparagus', label: '🥬 Asparagus' },
    { value: 'bell_pepper', label: '🫑 Bell Pepper' },
    { value: 'broccoli', label: '🥦  Broccoli' },
    { value: 'carrot', label: '🥕 Carrot' },
    { value: 'celery', label: '🥬 Celery' },
    { value: 'cucumber', label: '🥒  Cucumber' },
    { value: 'lettuce', label: '🥬 Lettuce' },
    { value: 'mushroom', label: '🍄 Mushroom' },
    { value: 'onion', label: '🧅 Onion' },
    { value: 'tomato', label: '🍅 Tomato' }
  ]

  const carbOptions = [
    { value: 'rice', label: '🍚 Rice' },
    { value: 'pasta', label: '🍝 Pasta' },
    { value: 'bread', label: '🍞 Bread' },
    { value: 'potato', label: '🥔 Potato' },
    { value: 'corn', label: '🌽 Corn' }
  ]

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
        <PageDescription>
          Don't know what to eat today? Pick the ingredients you have and we will generate a list of dishes you can make 😋
        </PageDescription>
        {/* <PageButtonGrid>
          <PageButton>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>4</PageButton>
        </PageButtonGrid> */}
        <PageButton onClick={() => handleClick()}>Can't choose? Click here 🍽️ </PageButton>
        <RandomRecipeContainer>
          {Object.keys(randomRecipe).length > 0 ? <Tag recipe={randomRecipe} /> : null}
        </RandomRecipeContainer>
      </PageTopGrid>
      <Page1Grid>
        {recipeArray.length > 0 && <IngredientSelect proteinOptions={proteinOptions} vegetableOptions={vegetableOptions} carbOptions={carbOptions} recipeArray={recipeArray} />}
        <NewRecipe proteinOptions={proteinOptions} vegetableOptions={vegetableOptions} carbOptions={carbOptions}/>
      </Page1Grid>
    </WholeGrid>
  )
}