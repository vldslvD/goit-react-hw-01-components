import styled from '@emotion/styled';
export const ProfileBox = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
   border: solid #e7ecf2 2px;
`;
export const AvatarThumb = styled.div`
  width: 300px;
  height: 200px;
`;
export const Avatar = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`;
export const Field = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #808f9e;
  text-align: center;
`;
export const FieldName = styled.p`
  margin-top: 14px;
  margin-bottom: 13px;
  font-size: 24px;
  font-weight: 700;
  color: #333131;
  text-align: center;
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