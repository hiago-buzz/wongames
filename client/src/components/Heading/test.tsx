import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading for default', () => {
    renderWithTheme(<Heading>Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white
    })
  })
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black
    })
  })
  it('should render a line heading to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'padding-left': theme.spacings.xxsmall,
      'border-left': `0.5rem solid ${theme.colors.secondary}`
    })
  })
  it('should render a line heading to the bottom side', () => {
    renderWithTheme(<Heading lineBottom>Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })
})
