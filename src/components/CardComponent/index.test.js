import React from 'react'
import CardComponent from '.'

test('render CardComponent', () => {
  const cardWrapper = mount(
    <CardComponent
      title="Under Siege"
      actors="Steven Seagal, Erika Eleniak, Tommy Lee Jones"
      director="Andrew Davis"
      productionCompany="‎Regency Enterprises"
      releaseYear="1992"
      writer="J. F. Lawton"
    />,
  )

  expect(cardWrapper.prop('title')).toEqual('Under Siege')
  expect(cardWrapper.prop('actors')).toEqual('Steven Seagal, Erika Eleniak, Tommy Lee Jones')
  expect(cardWrapper.prop('director')).toEqual('Andrew Davis')
  expect(cardWrapper.prop('productionCompany')).toEqual('‎Regency Enterprises')
  expect(cardWrapper.prop('releaseYear')).toEqual('1992')
  expect(cardWrapper.prop('writer')).toEqual('J. F. Lawton')
})

test('test onClick function', () => {
  const clickHandler = jest.fn()

  const cardWrapper = mount(<CardComponent onClick={clickHandler} />)
  const styledButton = cardWrapper.find('StyledButton')
  styledButton.simulate('click')
  expect(clickHandler).toHaveBeenCalledTimes(1)
})
