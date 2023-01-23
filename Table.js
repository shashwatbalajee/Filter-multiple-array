import React from 'react'

const Table = ({data})=>{
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
                {data.map((item)=>(
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Mobile}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table