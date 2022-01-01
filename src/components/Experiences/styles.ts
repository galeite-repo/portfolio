import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    @media (max-width: 1000px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    max-width: 19rem;
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s;
    border-radius: 0.6rem;

    div.title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
      span {
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
        display: block;
      }
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.6rem;
    }
  }
  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }
  &:nth-child(even) > div {
    margin-top: 4rem;
  }
  @media (max-width: 1000px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    > div {
      max-width: 100%;
      div.title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        h1 {
          color: ${({ theme }) => theme.primary};
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        span {
          color: ${({ theme }) => theme.text};
          margin-bottom: 1.2rem;
        }
      }
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;
      div.title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        h1 {
          color: ${({ theme }) => theme.primary};
          font-size: 2rem;
        }
        span {
          color: ${({ theme }) => theme.text};
          margin-bottom: 2rem;
        }
      }

      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
