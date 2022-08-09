import React, { useEffect, useState, useContext } from 'react';
import IngredientSelect from './IngredientSelect.jsx';
import NewRecipe from './NewRecipe.jsx';
import { PageGrid } from './page.styled.js'

export default function APP(){

  return (
    <PageGrid>
      <IngredientSelect />
      <NewRecipe />
    </PageGrid>
  )
 }