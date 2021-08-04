import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function Users() {
	const [data, setData] = useState([])
	useEffect(() => {
		let url = "https://jsonplaceholder.typicode.com/users"
		fetch(url).then((response) => {
			response.json().then((result) => {
				console.warn(result)
				setData(result)
			})

		})
	}, [])

	return (
		<div>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Userame</th>
						<th>Email Id</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.address.street}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</div>
	)
}
