export function Display() {
	return (
		<div>
			<section>
				<h3>General Info</h3>
				<div className="input-group mb-3">
					<span className="input-group-text">Name</span>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Email</span>
					<input type="email" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Phone Number</span>
					<input type="tel" className="form-control" />
				</div>
			</section>
			<section>
				<h3>Educational Experience</h3>
				<div className="input-group mb-3">
					<span className="input-group-text">School Name</span>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Field of Study</span>
					<input type="email" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Graduation Date</span>
					<input type="month" className="form-control" />
				</div>
			</section>
			<section>
				<h3>Practical Experience</h3>
				<div className="input-group mb-3">
					<span className="input-group-text">Company Name</span>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Title</span>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Duties</span>
					<input type="text" className="form-control" />
					<input type="text" className="form-control" />
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">Dates of Employment</span>
					<input type="date" className="form-control" />
					<input type="date" className="form-control" />
				</div>
			</section>
			<button type="button" className="btn btn-primary">
				Submit
			</button>
		</div>
	)
}
