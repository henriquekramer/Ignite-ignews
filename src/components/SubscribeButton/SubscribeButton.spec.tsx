import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { SubscribeButton } from '.'

jest.mock('next-auth/react')

jest.mock('next/router')

describe('SubscribeButton component', ()=> {
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'loading'
    })

    render(<SubscribeButton />)
  
    expect(screen.getByText(/subscribe now!/i)).toBeInTheDocument() 
  })

  it('redirects user to sign in when not authenticated', ()=> {
    const signInMocked = jest.mocked(signIn) // pegamos a função signIn
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'loading'
    })

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText(/subscribe now!/i);

    fireEvent.click(subscribeButton) // Iremos disparar um click no subscribeButton

    expect(signInMocked).toHaveBeenCalled() //Esperamos que a função signIn tenha sido chamada, pois qnd usuário está deslogado e clica no botão de subscribe ele é redirecionado para a fun signIn
  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "john.doe@example.com" },
        expires: "fake-expires",
        activeSubscription: 'fake-subscription' 
      },
      status: "authenticated",
    })

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText(/subscribe now!/i);

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})