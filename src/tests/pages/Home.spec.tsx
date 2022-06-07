import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '../../pages'
import { stripe } from '../../services/stripe'

jest.mock('next/router')
jest.mock('next-auth/react', ()=> {
  return {
    useSession: () => [null, false]
  }
})
jest.mock('../../services/stripe')

describe('Home page', ()=> {
  it('renders correctly', ()=> {
    render(<Home product={{priceId: 'fake-price-id', amount: '$15,50'}} />)

    expect(screen.getByText("for $15,50 month")).toBeInTheDocument()
  })

  it('loads initial data', async () => { // nosso getStaticProps
    const retriveStripePricesMocked = jest.mocked(stripe.prices.retrieve) //é uma func async

    retriveStripePricesMocked.mockResolvedValueOnce({  //pq é uma promise
      id: 'fake-price-id',
      unit_amount: 1000, //$10.00
    } as any) 

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00' // temos a conversão de 1000 para $10.00
          }
        }
      })
    )
  })
})
