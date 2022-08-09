import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { NewRecipeGrid, NewRecipeTitle, NewRecipeName, NewRecipeSelect, NewRecipeSubmit } from './page.styled.js'

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

export default function NewRecipe() {

  const [protein, setProtein] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [carb, setCarb] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [url, setUrl] = useState('');


  const handleSubmit = () => {
    if (recipeName.length && url.length) {
      const options = {
        recipeName: '',
        ingredients: [],
        url: ''
      };

      // change array of obj to array of string
      // right now protein looks like [{value: xxx, label: xxxx}]
      for (let i = 0; i < protein.length; i++) {
        options['ingredients'].push(protein[i].value)
      }
      for (let i = 0; i < vegetable.length; i++) {
        options['ingredients'].push(vegetable[i].value)
      }
      for (let i = 0; i < carb.length; i++) {
        options['ingredients'].push(carb[i].value)
      }
      console.log('ingredient array looks like: ', options['ingredients'])
      options['recipeName'] = recipeName;
      options['url'] = url;

      axios.post('/lazydish', options)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    } else {
      alert('input the dish name & url')
    }
  }

  return (
    <NewRecipeGrid>
      <NewRecipeTitle>
        Have a recipe you like? Input it below:
      </NewRecipeTitle>
      <NewRecipeName>
        <label htmlFor="dishName">What's the name of the dish?</label>
        <input id="recipeName" type="text" onChange={() => setRecipeName(event.target.value)} required />
      </NewRecipeName>
      <NewRecipeName>
        <label htmlFor="dishName">What's the link to this recipe?</label>
        <input id="dishName" type="text" onChange={() => setUrl(event.target.value)} required />
      </NewRecipeName>
      <NewRecipeSelect>
        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={proteinOptions}
          placeholder="Protein(s) in this recipe"
          onChange={setProtein}
          isSearchable
          autoFocus
        />
      </NewRecipeSelect>
      <NewRecipeSelect>

        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={vegetableOptions}
          placeholder="Vegetable(s) in this recipe"
          onChange={setVegetable}
          isSearchable
          autoFocus
        />
      </NewRecipeSelect>

      <NewRecipeSelect>

        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={carbOptions}
          placeholder="Carb(s) in this recipe"
          onChange={setCarb}
          isSearchable
          autoFocus
        />
      </NewRecipeSelect>
      <NewRecipeSubmit onClick={() => handleSubmit()}>Submit this recipe~</NewRecipeSubmit>
    </NewRecipeGrid>
  )
}