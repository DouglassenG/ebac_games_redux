import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  padding: 24px;
  border-radius: 6px;
  margin-bottom: 80px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    ul {
      display: flex;

      li {
        margin-left: 16px;

        a {
          color: ${cores.branca};
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    nav {
      margin-top: 16px;
    }
  }
`

export const CartButton = styled(Link)`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    margin-left: 8px;
  }
`
