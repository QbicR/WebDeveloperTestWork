import React from 'react'

const ApplicationsList = () => {
    return (
        <div>
            <table className="table container-md">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Creating time</th>
                        <th>Change time</th>
                        <th>Status</th>
                        <th>Side</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Instrument</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ApplicationsList
