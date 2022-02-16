import { render, screen } from '@testing-library/svelte'

import NotFound from '../routes/NotFound.svelte'

describe('App', () => {
  test("says 'hello world!'", () => {
    render(NotFound)
    // console.log(screen)
    const node = screen.queryByText('NotFound')
    expect(node).toBeInTheDocument()
  })
})
