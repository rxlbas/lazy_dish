import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { RecipeGrid, TitleLayout, SectionGrid, SectionTitleLayout, IngredientListGrid, TagLayout, NewRecipeSubmit } from './page.styled.js'

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
  { value: 'pasta', label: '🥘 Pasta' },
  { value: 'bread', label: '🍞 Bread' },
  { value: 'potato', label: '🥔 Potato' },
  { value: 'corn', label: '🌽 Corn' }
]

export default function IngredientSelect() {

  const [protein, setProtein] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [carb, setCarb] = useState([]);

  const handleSubmit = () => {
    
      console.log('matching found!', )
  }

  return (
    <RecipeGrid>
      <TitleLayout>
        Welcome to Lazy Dish! Please pick the ingredients in your fridge.
      </TitleLayout>
      <SectionGrid>
        <TitleLayout>Select proteins you have~</TitleLayout>
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
        <TitleLayout>Select vegetables you have~</TitleLayout>
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
        <TitleLayout>Select carbs you have~</TitleLayout>
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
      <NewRecipeSubmit onClick={() => handleSubmit()}>Submit this recipe~</NewRecipeSubmit>
      <SectionGrid>
        <TitleLayout>Matching recipes:</TitleLayout>
        <div>some recipes</div>
      </SectionGrid>
    </RecipeGrid>
  )

}