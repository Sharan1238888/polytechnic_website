import React from 'react';

const Students = () => {
    return (
        <div className="container mt-5">
            <h2>Students</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>PIN Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Uday</td>
                        <td>123456</td>
                    </tr>
                    <tr>
                        <td>chaithra</td>
                        <td>654321</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Students;
