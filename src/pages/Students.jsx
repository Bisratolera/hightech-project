import React from 'react'

const Students = () => {
  return (
    <div>
      <div style={{overflowX: "auto"}}>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>FULLNAME</th>
        <th>STREAM</th>
        <th>DIVISION</th>
        <th>ID NUMBER</th>
        <th>GENDER</th>
        <th>SUB CITY</th>
        <th>WOREDA</th>
        <th>PHONE NUMBER</th>
        <th>QR</th>
        <th>CREATED AT</th>
        <th>UPDATED AT</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore illum eum rem nemo, dolor possimus dicta autem sunt quaerat eos. Quidem, quas at odit inventore dolorem eveniet minima blanditiis.</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Students