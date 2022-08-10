import React from 'react';
import { MatchingRecipe } from './page.styled.js';


export default function Tag({ recipe }) {
  // input recipe is an object that contains ingredient, recipeName and url
  // the tags should contain the ingredients, recipeName and a url link
  console.log('I am in Tag.jsx', recipe.ingredients)
  const recipeIngredients = recipe.ingredients.join(', ');
  return (
    <div>
    {
      Object.keys(recipe).length > 0 && <MatchingRecipe href={recipe.url} target={"_blank"}>
      😋 {recipe.recipeName} : {recipeIngredients}
      </MatchingRecipe>
    }
    </div>
  )
}