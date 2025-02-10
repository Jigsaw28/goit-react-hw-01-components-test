import { Table, TableTd, TableTh, TableThead, TableTr } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableThead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>   
        </tr>
      </TableThead>
      <tbody>
        {items.map(item => (
          <TableTr key={item.id}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </TableTr>
        ))}
      </tbody>
    </Table>
  );
};
