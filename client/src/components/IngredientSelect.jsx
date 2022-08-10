import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { RecipeGrid, SectionTitle, SectionGrid, SmallSectionTitle, IngredientListGrid, TagLayout, NewRecipeSubmit } from './page.styled.js'
import Tag from './Tag.jsx';

const proteinOptions = [
  { value: 'beef', label: '🐄 Beef' },
  { value: 'pork', label: '🐖 Pork' },
  { value: 'chicken', label: '🐔 Chicken' },
  { value: 'egg', label: '🥚 egg' },
  { value: 'lamb', label: '🐑 Lamb' },
  { value: 'salmon', label: '🐟 Salmon' },
  { value: 'tofu', label: '🧈 Tofu' }
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
  { value: 'pasta', label: '🍝Pasta' },
  { value: 'bread', label: '🍞 Bread' },
  { value: 'potato', label: '🥔 Potato' },
  { value: 'corn', label: '🌽 Corn' }
]

export default function IngredientSelect() {

  const [protein, setProtein] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [carb, setCarb] = useState([]);
  const [matchingRecipe, setMatchingRecipe] = useState([]);

  // when click, will do a get request
  const handleSubmit = () => {
    const options = [];
    // change array of obj to array of string
    // right now protein looks like [{value: xxx, label: xxxx}]
    for (let i = 0; i < protein.length; i++) {
      options.push(protein[i].value)
      console.log('protein')
    }
    for (let i = 0; i < vegetable.length; i++) {
      options.push(vegetable[i].value)
    }
    for (let i = 0; i < carb.length; i++) {
      options.push(carb[i].value)
    }

    // now I have an array options that contains all the client input ingredients

    axios.get('/lazydish')
      .then((response) => {
        // response.data looks like [{id, ingredients, recipeName, url}, {id, ingredients, recipeName, url}, {id, ingredients, recipeName, url}]
        const recipeArray = response.data;
        console.log('recipeArray is: ', recipeArray)
        const possibleRecipe = []
        for (let i = 0; i < recipeArray.length; i++) {
          // for each database recipe, check if all its ingredients are include in the client input array
          // client ingredient options is the bigger array, we check recipe ingredients array in there
          if(recipeArray[i].ingredients.every(r => options.indexOf(r) >= 0)) {
            possibleRecipe.push(recipeArray[i]);
          }
        }
        console.log('found matching recipe: ', possibleRecipe);
        setMatchingRecipe(possibleRecipe);
      })
      .catch((err) => console.log(err));
  }

  return (
    <RecipeGrid>
      <SectionTitle>
      👩‍🍳 Welcome to Lazy Dish! Please pick the ingredients you have~👨‍🍳
      </SectionTitle>
      <SectionGrid>
        <SmallSectionTitle>Select proteins you have~</SmallSectionTitle>
        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={proteinOptions}
          placeholder="Protein(s) in your fridge"
          onChange={setProtein}
          isSearchable
          autoFocus
          />
      </SectionGrid>
      <SectionGrid>
        <SmallSectionTitle>Select vegetables you have~</SmallSectionTitle>
        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={vegetableOptions}
          placeholder="Vegetable(s) in your fridge"
          onChange={setVegetable}
          isSearchable
          autoFocus
          />
      </SectionGrid>

      <SectionGrid>
        <SmallSectionTitle>Select carbs you have~</SmallSectionTitle>
        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={carbOptions}
          placeholder="Protein(s) in your fridge"
          onChange={setCarb}
          isSearchable
          autoFocus
        />
      </SectionGrid>
      <NewRecipeSubmit onClick={() => handleSubmit()}>Submit your ingredients~</NewRecipeSubmit>
      <SectionGrid>
        <SmallSectionTitle>Matching recipes:</SmallSectionTitle>
          {matchingRecipe.length > 0 ? matchingRecipe.map((recipe, index) => {
            // console.log('I am in map funciton', recipe);
            return <Tag key={recipe.url + index} recipe={recipe}/>
          }) : null

          }
      </SectionGrid>
    </RecipeGrid>
  )

}