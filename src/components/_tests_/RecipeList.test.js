import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeList from "../RecipeList";
import RecipeItem from "../RecipeItem";

configure({ adapter: new Adapter() });

it("shows list of recipe items", () => {
  const wrapped = shallow(
    <RecipeList
      meals={[
        {
          strMeal: "Pouding chomeur",
          strMealThumb:
            "https:/www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
          idMeal: "52932"
        },
        {
          strMeal: "Poud cho",
          strMealThumb:
            "https:/www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
          idMeal: "52933"
        }
      ]}
    />
  );
  expect(wrapped.find(RecipeItem).length).toEqual(2);
});
