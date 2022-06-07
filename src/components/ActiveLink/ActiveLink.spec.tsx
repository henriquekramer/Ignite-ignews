import { render, screen } from '@testing-library/react' //vai renderizar um componente de uma maneira virtual, para ver qual é o output de um componente
import { ActiveLink } from '.'

jest.mock('next/router', ()=> { // Qnd renderizarmos o ActiveLink, qnd ele for utilizar o useRouter, ele vai utilizar o meu mock ao invés de utilizar a funcionalidade default do Next
  return {
    useRouter(){
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', ()=> {

  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('Home')).toBeInTheDocument() //Espero que encontre um elemento de texto escrito 'Home' que esteja no documento do test
  })
  
  it('adds active class if the link is currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(screen.getByText('Home')).toHaveClass('active') //Espero que o elemento Home tenha a classe 'active'
  })
})