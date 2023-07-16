import PropTypes from 'prop-types';
import {Table, TableHeadEl, TableDataEl} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadEl>Type</TableHeadEl>
          <TableHeadEl>Amount</TableHeadEl>
          <TableHeadEl>Currency</TableHeadEl>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableDataEl>{type}</TableDataEl>
            <TableDataEl>{amount}</TableDataEl>
            <TableDataEl>{currency}</TableDataEl>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
