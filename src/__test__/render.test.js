import renderer from 'react-test-renderer';
import CalcDisplay from '../components/CalcDisplay'
import CalcButton from '../components/CalcButton'
import ButtonClick  from '../__mocks__/ButtonClick'
import React from 'react';

/*
* test to check whether the DOM and display rendered correct based on the buttons clicked
*
*/
describe('check the rendering of components', () => {
  it('CalcDisplay component renders correctly', () => {
    const tree = renderer
      .create(<CalcDisplay value="23"></CalcDisplay>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CalcDisplay component renders correctly', () => {
    const tree = renderer
      .create(<CalcDisplay value="{ButtonClick.clickEvent('2')}"></CalcDisplay>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CalcDisplay component renders correctly', () => {
    const tree = renderer
      .create(<CalcDisplay value="{ButtonClick.clickEvent('C')}"></CalcDisplay>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('CalcButton component renders correctly', () => {
    const tree = renderer
      .create(<CalcButton label={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
