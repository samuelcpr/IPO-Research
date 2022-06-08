import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: -8rem;

  div {
    background-color:#4F4F4F;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #fff;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: #4F4F4F ;
      color: #fff;
    }
  }
`;