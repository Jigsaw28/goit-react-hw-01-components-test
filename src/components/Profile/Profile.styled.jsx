import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: #fff;
  border: 1px solid silver;
  border-radius: 5px;
  width: 300px;
`;
export const DescriptionCard = styled.div`
  font-family: 'Roboto', sans-serif;
  padding-bottom: 30px;
  font-size: 16px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
  border-radius: 50%;
  object-fit: contain;
  background-color: aliceblue;
`;
export const DescriptionName = styled.p`
  margin-top: 40px;
  font-size: 25px;
  font-weight: 800;
`;
export const DescriptionText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: lightgray;
`;
export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid lightgray;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: calc(100% / 3);
  background-color: aliceblue;
  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const StatsLabel = styled.span`
  color: gray;
`;
export const StatsQuantity = styled.span`
  font-weight: 800;
  margin-top: 10px;
`;
