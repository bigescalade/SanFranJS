/* eslint-disable */
import { css } from 'styled-components'

const widthSizes = {
  xsmall: 400,
  small: 768,
  medium: 1024,
  large: 1280,
  xlarge: 1440,
}

export const media = Object.keys(widthSizes).reduce((accumulator, label) => {
  const emSize = widthSizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
