import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
   padding: ${({ theme }) => theme.spacing.sm}px;
`;