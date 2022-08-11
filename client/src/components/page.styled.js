import styled from 'styled-components';

export const WholeGrid = styled.div`
  display: grid;
  width: 80vw;
  max-width: 100%;
  margin: 0 auto;
  grid-template-rows: auto auto;
  gap: 4%;
`
export const PageTopGrid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;
  grid-template-rows: auto auto auto auto;
  gap: 5%;
`
export const PageTitle = styled.h1`
  padding-top: 3%;
  margin: 0 auto;
  color:
`
export const PageDescription = styled.h3`
  margin: 0 auto;
`

// below is not inuse right now
export const PageButtonGrid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;

  grid-template-columns: auto auto auto auto;
  gap: 5%;
`
export const PageButton = styled.button`
  max-width: 40%;
  border-radius: 5px;
  margin: 0 auto;
`
export const RandomRecipeContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

export const Page1Grid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;
  gap: 5%;
  grid-template-columns: 2fr 1fr;
  // @media (min-width: 501px) {
  //   grid-template-columns: 2fr 1fr;
  // }
  // @media (max-width: 500px) {
  //   grid-template-rows: auto auto;
  // }
`

// red: left section IngredientSelect
export const RecipeGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-rows: auto auto auto auto auto;
  gap: 2%;
`
// blue
export const SectionTitle = styled.h2`
  max-width: 100%;
`
// blue
export const SectionGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-rows: auto auto;
`
export const SmallSectionGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: auto auto auto;
  overflow-x: scroll;
  gap: 5%;
`
export const MediumSectionTitle = styled.h3`
  max-width: auto;
  // background-color: #7DBD07;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
`

// orange
// used by both IngredientSelect and NewRecipe
export const SmallSectionTitle = styled.div`
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
  grid-template-rows: auto auto auto auto auto auto auto auto;
  gap: 2%;
`
// blue
export const NewRecipeTitle = styled.h2`
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

// blue: used by both the left submit and right submit
export const NewRecipeSubmit = styled.button`
  border-radius: 5px;
  max-width: 100%;
  background-color: green;
  cursor: pointer;
  &:hover {
    background-color: #eb9534
  }
`
export const MatchingRecipe = styled.a`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #F0F0F0;
  border: 1px solid black;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #99AEAD
  }
`