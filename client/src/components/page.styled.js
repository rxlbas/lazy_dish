import styled from 'styled-components';

export const WholeGrid = styled.div`
  display: grid;
  width: 80vw;
  max-width: 100%;
  margin: 0 auto;
  grid-template-rows: auto auto;

  @media (min-width: 501px) {
    gap: 8%;
  }
  @media (max-width: 500px) {
    gap: 2%;
  }

`
// not in use right now
export const HorizontalLine = styled.div`
  max-width: 100%;
  margin: 0 auto;

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
  @media (min-width: 501px) {
    font-size: 3rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
export const PageDescription = styled.h3`
  margin: 0 auto;
  @media (min-width: 501px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

// below PageButtonGrid is not inuse right now
export const PageButtonGrid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: auto auto auto auto;
  gap: 5%;
`
// this button is the random recipe generator
export const PageButton = styled.button`
  border-radius: 5px;
  margin: 0 auto;
  @media (min-width: 501px) {
    max-width:40%
  }
  @media (max-width: 500px) {
    max-width: 80%
  }
  &:hover {
    background-color: #eb9534
  }
`
export const RandomRecipeContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

// bottom section where the searching and adding recipe exists
export const Page1Grid = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 501px) {
    grid-template-columns: 2fr 1fr;
    gap: 5%;
  }
  @media (max-width: 500px) {
    grid-template-rows: auto auto;
    gap: 10%;
  }
`;

// red: left section IngredientSelect
export const RecipeGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-rows: auto auto auto auto auto;
  gap: 2%;
  // @media (max-width: 500px) {
  //   max-height: 5rem;
  // }
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
  // @media (max-width: 500px) {
  //   max-height: 4rem;
  // }
`
export const SmallSectionGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: auto auto auto;
  overflow-x: scroll;
  gap: 5%;
`
export const MediumSectionTitle = styled.h2`
  max-width: auto;
  // background-color: #7DBD07;

  @media (min-width: 501px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 500px) {

  }

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
  @media (min-width: 501px) {

  }
  @media (max-width: 500px) {
    max-length: 2rem
  }
`
export const MatchingRecipe = styled.a`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffe3a1;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #99AEAD
  }
`