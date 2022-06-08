import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color:#000;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: solid 1px #000000;
      background-color: #4F4F4F;
      color: #fff;
      border-radius: 0.25rem;

      &:first-child {
        color: #fff;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    
    }
  }
`;
