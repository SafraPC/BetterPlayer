import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   width: 100%;
   align-items: center;
   height: 75px;
   background-color: ${({ theme }) => theme.colors.secondary};
   border-radius: 4px;
   padding: ${({ theme }) => theme.spacing.sm}px;
   flex-direction: row;
   justify-content: space-between;
`;

export const Column = styled.View`
   flex: 1;
   padding-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const Title = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 14px;
   font-weight: bold;
`;

export const Subtitle = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 12x;
   margin-top: 5px;
`;

export const Image = styled.Image`
   width: 60px;
   height: 60px;
   border-radius: 4px;
`;

export const Options = styled.TouchableOpacity`
   width: 30px;
   height: 30px;
   border-radius: 4px;
   justify-content: center;
   align-items: center;
`;

export const Like = styled.TouchableOpacity`
   width: 30px;
   height: 30px;
   margin-right: 15px;
   border-radius: 4px;
   justify-content: center;
   align-items: center;
`;
