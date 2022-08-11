import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { RecipeGrid, SectionTitle, SectionGrid, SmallSectionGrid, MediumSectionTitle, SmallSectionTitle, IngredientListGrid, TagLayout, NewRecipeSubmit } from './page.styled.js'
import Tag from './Tag.jsx';


export default function IngredientSelect({ proteinOptions, vegetableOptions, carbOptions, recipeArray }) {

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

    const possibleRecipe = []
    for (let i = 0; i < recipeArray.length; i++) {
      // for each database recipe, check if all its ingredients are include in the client input array
      // client ingredient options is the bigger array, we check recipe ingredients array in there
      if (recipeArray[i].ingredients.every(r => options.indexOf(r) >= 0)) {
        possibleRecipe.push(recipeArray[i]);
      }
    }
    console.log('found matching recipe: ', possibleRecipe);
    setMatchingRecipe(possibleRecipe);
  }

  return (
    <RecipeGrid>
      <SectionTitle>
        👩‍🍳 Please pick the ingredients you have~👨‍🍳
      </SectionTitle>
      <SectionGrid>
        <SmallSectionTitle>Select proteins you have (optional)</SmallSectionTitle>
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
        <SmallSectionTitle>Select vegetables you have (optional)</SmallSectionTitle>
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
        <SmallSectionTitle>Select carbs you have (optional)</SmallSectionTitle>
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
        <MediumSectionTitle>Matching recipes:</MediumSectionTitle>
        <SmallSectionGrid>
        {matchingRecipe.length > 0 ? matchingRecipe.map((recipe, index) => {
          // console.log('I am in map funciton', recipe);
          return <Tag key={recipe.url + index} recipe={recipe} />
        }) : <div>I don't see any matching recipe yet, consider adding more ingredients you have or consider go on a grocery shopping trip? 🛒 </div>
        }
        </SmallSectionGrid>
      </SectionGrid>
    </RecipeGrid>
  )

}