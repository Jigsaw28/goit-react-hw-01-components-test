import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
`;
export const TableThead = styled.thead`
  background-color: skyblue;
`;
export const TableTh = styled.th`
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  padding: 10px 0;
`;
export const TableTr = styled.tr`
  background-color: #fff;

  &:nth-child(odd) {
    background-color: rgb(197, 226, 226);
  }
`;
export const TableTd = styled.td`
  padding: 10px 0;
  color: rgb(145, 145, 145);
  text-align: center;
`;
