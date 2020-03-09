import React from 'react';
import { mount , configure} from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import RecipeDetailModal from '../RecipeDetailModal';


configure({adapter: new Adapter()});

it('shows a recipe image and text ', () =>
{
//     const wrapped = mount(<RecipeDetailModal show='true' meal={[{"idMeal":"52926","strMeal":"Tourtiere"}]}/>);

//    console.log(wrapped.find('div'));


});

