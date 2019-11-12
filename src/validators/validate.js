import * as yup from 'yup'

import formSchema1 from './formSchema1'
import formSchema2 from './formSchema2'

const validate = (value, field, form, setErrors) => {
	let schema = {}
	switch (form) {
		case 'form1':
			schema = formSchema1
			break
		case 'form2':
			schema = formSchema2
			break
		default:
			break
	}
	yup.reach(schema, field)
		.validate(value)
		.then(() =>
			setErrors(errs => ({
				...errs,
				[field]: ''
			}))
		)
		.catch(({ errors }) =>
			setErrors(errs => ({
				...errs,
				[field]: errors[0]
			}))
		)
}

export default validate