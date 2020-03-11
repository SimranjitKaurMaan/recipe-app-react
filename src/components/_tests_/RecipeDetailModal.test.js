import React from 'react';
import { mount , configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDetailModal from '../RecipeDetailModal';


configure({adapter: new Adapter()});

it('shows a recipe image and text ', () =>
{
    const wrapped = mount(<RecipeDetailModal show='true'/>);
    expect(wrapped.find('div').length).toEqual(1);
    //TODO for the image and text instructions

});

