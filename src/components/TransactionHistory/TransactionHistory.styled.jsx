import styled from '@emotion/styled';
export const Table = styled.table`
	margin-bottom: 20px;
	border: 15px solid #F2F8F8;
	border-top: 5px solid #F2F8F8;
	border-collapse: collapse; 
`;

export const TableHeadEl = styled.th`
	font-weight: bold;
	padding: 5px;
	background: #F2F8F8;
	border: none;
	border-bottom: 5px solid #F2F8F8;
  
`;

export const TableDataEl = styled.td`
	padding: 10px 40px;
	border: none;
	border-bottom: 5px solid #F2F8F8;
  text-transform: capitalize;
`;