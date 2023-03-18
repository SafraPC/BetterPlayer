import styled from 'styled-components/native';

export const Filter = styled.TextInput.attrs(({ theme }) => ({
   placeholderTextColor: theme.colors.gray,
}))`
   width: 100%;
   height: 50px;
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 4px;
   margin-top: 10px;
   padding: ${({ theme }) => theme.spacing.sm}px;
   margin-bottom: ${({ theme }) => theme.spacing.sm}px;
   color: ${({ theme }) => theme.colors.white};
   font-size: 14px;
   font-weight: bold;
`;
