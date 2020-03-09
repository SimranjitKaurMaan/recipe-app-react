import React from 'react';
import { shallow , configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import RecipeList from '../RecipeList';
import RecipeDetailModal from '../RecipeDetailModal';


configure({adapter: new Adapter()});

it('shows a recipe list', () =>
{
    const wrapped = shallow(<App/>);
    expect(wrapped.find(RecipeList).length).toEqual(1);
    
});


it('shows a recipe detail modal',() =>{
   
    const wrapped = shallow(<App/>);
    expect(wrapped.find(RecipeDetailModal).length).toEqual(1);

});

