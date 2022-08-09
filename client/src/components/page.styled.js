import styled from 'styled-components';

export const PageGrid = styled.div`
  display: grid;
  width: 90vw;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: 2fr 1fr;
  gap: 5%;
`

// red: left section IngredientSelect
export const RecipeGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-rows: auto auto auto auto auto;
`
// blue
export const TitleLayout = styled.div`
  max-width: 100%;
`
// blue
export const SectionGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-rows: auto auto;
`
// orange
export const SectionTitleLayout = styled.div`
  max-width: 100%;
`
// orange
export const IngredientListGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: auto auto auto auto auto;
`
// green
export const TagLayout = styled.div`
  max-width: 100%;
  grid-template-rows: auto auto auto auto auto;
`
///////////////////////////////////
// red: input new recipe form on right
export const NewRecipeGrid = styled.div`
display: grid;
  max-width: 100%;
  grid-column-start: auto;
  grid-column-end: auto;
  grid-template-rows: auto auto auto auto auto auto auto;
`
// blue
export const NewRecipeTitle = styled.div`
  max-width: 100%;
`
export const NewRecipeName = styled.form`
  max-width: 100%;
  max-height: 5em;
`
// blue: protein, vege, carb selection box
export const NewRecipeSelect = styled.div`
  max-width: 100%;
`
export const NewRecipeSubmit = styled.button`
  max-width: 100%;
  background-color: green;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #99AEAD
  }
`