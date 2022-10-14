export function Display(props) {
	const { infos } = props
	function editForm() {
		document.getElementById('form').classList.remove('d-none')
		document.getElementById('display').classList.add('d-none')
	}

	return (
		<div id="display" className="d-none">
			<h3 className="mb-3">General Info</h3>
			<ul className="list-group mb-3">
				<li className="list-group-item">Name: {infos.name}</li>
				<li className="list-group-item">Email: {infos.email}</li>
				<li className="list-group-item">Phone Number: {infos.number}</li>
				<li className="list-group-item">
					Mailing Address:
					{infos.street}, {infos.state}, {infos.zip}
				</li>
			</ul>
			<h3 className="mb-3">Educational Experience</h3>
			<ul className="list-group mb-3">
				<li className="list-group-item">School Name: {infos.school}</li>
				<li className="list-group-item">Field of Study: {infos.degree}</li>
				<li className="list-group-item">
					Graduation Date: {infos.graduationYear}
				</li>
			</ul>
			<h3 className="mb-3">Practical Experience</h3>
			<ul className="list-group mb-3">
				<li className="list-group-item">Company: {infos.company}</li>
				<li className="list-group-item">Title: {infos.title}</li>
				<li className="list-group-item">
					Duties: {infos.duties1}, {infos.duties2}, {infos.duties3}
				</li>
				<li className="list-group-item">
					Dates of Employment: {infos.employmentMonth} to
					{infos.employmentYear}
				</li>
			</ul>
			<div className="d-flex justify-content-end ">
				<button className="btn btn-primary mb-3" onClick={editForm}>
					Edit
				</button>
			</div>
		</div>
	)
}
