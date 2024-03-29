import React from 'react';
import { useTable } from 'react-table';
import { FaRegChartBar, FaPen } from 'react-icons/fa';
import './Tabledynamic.css';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="table-container">
      <table {...getTableProps()} className='root-table'>
        <thead className='header-table'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className='row-table'>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className='column-header-cell'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='row-table'>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className='cell-table'>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

