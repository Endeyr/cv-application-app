export function Display() {
	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={onSubmit}>
			<section>
				<h3>General Info</h3>
				<div className="input-group mb-3">
					<label htmlFor="name" className="input-group-text">
						Name
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="email" className="input-group-text">
						Email
					</label>
					<input type="email" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="phone" className="input-group-text">
						Phone Number
					</label>
					<input
						type="tel"
						className="form-control"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="address" className="input-group-text">
						Mailing Address
					</label>
					<input type="text" className="form-control" placeholder="street" />
					<input type="text" className="form-control" placeholder="city" />
					<input type="text" className="form-control" placeholder="state" />
					<input type="text" className="form-control" placeholder="zipcode" />
				</div>
			</section>
			<section>
				<h3>Educational Experience</h3>
				<div className="input-group mb-3">
					<label htmlFor="school" className="input-group-text">
						School Name
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="degree" className="input-group-text">
						Field of Study
					</label>
					<input type="email" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="graduation" className="input-group-text">
						Graduation Date
					</label>
					<input type="month" className="form-control" />
				</div>
			</section>
			<section>
				<h3>Practical Experience</h3>
				<div className="input-group mb-3">
					<label htmlFor="company" className="input-group-text">
						Company Name
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="title" className="input-group-text">
						Title
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="duties" className="input-group-text">
						Duties
					</label>
					<input type="text" className="form-control" />
					<input type="text" className="form-control" />
					<input type="text" className="form-control" />
				</div>
				<div className="input-group mb-3">
					<label htmlFor="employment" className="input-group-text">
						Dates of Employment
					</label>
					<input type="date" className="form-control" />
					<input type="date" className="form-control" />
				</div>
			</section>
			<div className="d-flex justify-content-between">
				<button type="button" className="btn btn-secondary mb-3">
					Add Experience
				</button>
				<button type="submit" className="btn btn-primary mb-3">
					Submit
				</button>
			</div>
		</form>
	)
}
