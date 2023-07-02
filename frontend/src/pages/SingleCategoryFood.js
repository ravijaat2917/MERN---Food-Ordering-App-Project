import React from 'react';
import { useParams } from 'react-router-dom';
import BestFoodComponent from '../Components/SingleCategoryFood';
import { brandsItems } from './../data/brandsLists';


const SingleCategoryFood = () => {
  const params = useParams();
  const category = params.category
  const heading = `TOP RESTAURANTS DELIVER ${category.toUpperCase()}`
    
  return (
    <>
      <BestFoodComponent brandsItems={brandsItems} heading={heading} category={category} />
    </>
  )
}

export default SingleCategoryFood
