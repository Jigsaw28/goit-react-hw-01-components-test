import styled from 'styled-components';

const selectColor = props => {
  switch (props.label) {
    case '.docx':
      return 'aqua';
    case '.pdf':
      return '#aa59aa';
    case '.mp3':
      return '#ff5050';
    case '.psd':
      return 'skyblue';
    default:
      return 'orange';
  }
};

export const StatWrapper = styled.section`
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  border: 1px solid silver;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  color: lightgray;
  padding: 30px 0;
`;
export const ListStatistics = styled.ul`
  display: flex;
`;

export const ItemStatistics = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px 30px;
  background-color: ${selectColor};
  color: #fff;
`;

export const PercentageStatistics = styled.span`
  margin-top: 5px;
  font-size: 25px;
`;
