import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    width: 300px;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    box-shadow: silver 2px 5px 5px;;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 15px;
    
    
    .avatar {
        margin-left: 10px;
    }
    .name {
        margin-left: 10px;
    }
`
export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
   return props.children ? 'green' : 'red';
  }};
`;
