import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { NewRecipeGrid, NewRecipeTitle, NewRecipeName, NewRecipeSelect, NewRecipeSubmit, SmallSectionTitle } from './page.styled.js'

export default function NewRecipe({ proteinOptions, vegetableOptions, carbOptions }) {

  const [protein, setProtein] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [carb, setCarb] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (recipeName.length && url.length && (protein.length || vegetable.length || carb.length)) {
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
      if (!isValidHttpUrl(url)) {
        alert('please input a valid url that includes the http/https in front of www');
      } else {
        options['url'] = url;
        axios.post('/lazydish', options)
          .then((response) => {
            alert('Recipe Added!');
            ClearFields();
            setProtein([]);
            setVegetable([]);
            setCarb([]);
          })
          .catch((err) => console.log(err));


      }
    } else {
      alert('Please input the dish name, url & at least one ingredient.')
    }

  }

  function ClearFields() {
    document.getElementById("recipeName").value = "";
    document.getElementById("dishName").value = "";

  }

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <NewRecipeGrid>
      <NewRecipeTitle>
        🍱 🍲🥘🥙🍛🍝
        <br />
        Have a recipe you like? Input it below:
      </NewRecipeTitle>
      <NewRecipeName>
        <label htmlFor="dishName">What's the name of the dish?</label>
        <input id="recipeName" type="text" onChange={() => setRecipeName(event.target.value)} required />
      </NewRecipeName>
      <NewRecipeName>
        <label htmlFor="dishName">What's the link to this recipe? (please include https in front)</label>
        <input id="dishName" type="text" onChange={() => setUrl(event.target.value)} required />
      </NewRecipeName>
      <SmallSectionTitle>Select at least one ingredient this recipe includes:</SmallSectionTitle>
      <NewRecipeSelect>
        <Select
          // defaultMenuIsOpen
          isMulti
          components={makeAnimated()}
          options={proteinOptions}
          placeholder="Protein(s) in this recipe"
          onChange={setProtein}
          value={protein}
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
          value={vegetable}
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
          value={carb}
          isSearchable
          autoFocus
        />
      </NewRecipeSelect>
      <NewRecipeSubmit onClick={() => handleSubmit()}>Submit this recipe~</NewRecipeSubmit>
    </NewRecipeGrid>
  )
}