import styled from '@emotion/styled';
export const Container = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
`;

export const StatsUl = styled.ul`
padding: 0;
background-color: #f3f6f9;
display: flex;
  font-size: 16px;
  color: #808f9e;
  list-style: none;
  border-top: solid #e7ecf2 2px;
`;

export const StatLi = styled.li`
margin-top:10px;
margin-bottom: 10px;
width: calc(100%/3);
display:flex;
flex-direction: column;
&:not(:last-child){
  border-right: solid #e7ecf2 2px;
}
`;
export const StatName = styled.span`
text-align: center;
`;

export const StatNumber = styled.span`
font-weight: 700;
text-align: center;
  color: #24384d;
`;