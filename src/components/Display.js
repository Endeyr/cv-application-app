import { useState } from 'react'
import uniqid from 'uniqid'

export function Display() {
	const [infos, setInfos] = useState([])

	function handleChange(e) {
		setInfos((prevState) => ({
			...prevState,
			id: uniqid(),
			[e.target.name]: e.target.value,
		}))
	}

	function onSubmit(e) {
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
					<input
						type="text"
						className="form-control"
						name="name"
						value={infos.name || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="email" className="input-group-text">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						name="email"
						value={infos.email || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="phone" className="input-group-text">
						Phone Number
					</label>
					<input
						type="tel"
						className="form-control"
						name="number"
						value={infos.number || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="address" className="input-group-text">
						Mailing Address
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="street"
						name="street"
						value={infos.street || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="city"
						name="city"
						value={infos.city || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="state"
						name="state"
						value={infos.state || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="zipcode"
						name="zip"
						value={infos.zip || ''}
						onChange={handleChange}
					/>
				</div>
			</section>
			<section>
				<h3>Educational Experience</h3>
				<div className="input-group mb-3">
					<label htmlFor="school" className="input-group-text">
						School Name
					</label>
					<input
						type="text"
						className="form-control"
						name="school"
						value={infos.school || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="degree" className="input-group-text">
						Field of Study
					</label>
					<input
						type="text"
						className="form-control"
						name="degree"
						value={infos.degree || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="graduation" className="input-group-text">
						Graduation Date
					</label>
					<input
						type="month"
						className="form-control"
						name="graduationYear"
						value={infos.graduationYear || ''}
						onChange={handleChange}
					/>
				</div>
			</section>
			<section>
				<h3>Practical Experience</h3>
				<div className="input-group mb-3">
					<label htmlFor="company" className="input-group-text">
						Company Name
					</label>
					<input
						type="text"
						className="form-control"
						name="company"
						value={infos.company || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="title" className="input-group-text">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						name="title"
						value={infos.title || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="duties" className="input-group-text">
						Duties
					</label>
					<input
						type="text"
						className="form-control"
						name="duties1"
						value={infos.duties1 || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="form-control"
						name="duties2"
						value={infos.duties2 || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="form-control"
						name="duties3"
						value={infos.duties3 || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="input-group mb-3">
					<label htmlFor="employment" className="input-group-text">
						Dates of Employment
					</label>
					<input
						type="date"
						className="form-control"
						name="employmentMonth"
						value={infos.employmentMonth || ''}
						onChange={handleChange}
					/>
					<input
						type="date"
						className="form-control"
						name="employmentYear"
						value={infos.employmentYear || ''}
						onChange={handleChange}
					/>
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
