import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const FeedbackBtn = styled.button`
  border-radius: 8px;
  font-weight: 700;
  padding: 10px;
  font-size: 15px;
  margin: 5px;
  :hover {
    background-color: rgb(18, 84, 237);
  }
`;
