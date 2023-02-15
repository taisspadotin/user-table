import React from 'react';

interface ITable{
    data: any[];
}

export const Table = ({ data }: ITable): JSX.Element => {
    return(
        <>
        <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Primary Group</th>
            <th>Phone Number</th>
            <th>Hours Studied</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.primaryGroup}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.hoursStudied}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}