export function Validation(values) {
  const errors = {}

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  // At least 1 digit, 1 lowercase character, 1 uppercase character and length more than 8
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.name !== undefined) {
    if (values.name === '') {
      errors.name = "Name is required!";
    } else {
      errors.name = undefined;
    }
  } else {
    errors.name = ''
  }

  if (values.username !== undefined) {
    if (values.username === '') {
      errors.username = "Email is required!";
    } else if (!emailPattern.test(values.username)) {
      errors.username = "Please enter a valid email address";
    } else {
      errors.username = undefined;
    }
  } else {
    errors.username = '';
  }

  if (values.password !== undefined) {
    if (values.password === '') {
      errors.password = "Password is required!";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password should be 8-20 characters and include at least 1 letter, 1 number";
    } else {
      errors.password = undefined;
    }
  } else {
    errors.password = '';
  }

  if (values.age !== undefined) {
    if (values.age === '') {
      errors.age = "Age is required!"
    } else {
      errors.age = undefined
    }
  } else {
    errors.age = ''
  }

  if (values.address !== undefined) {
    if (values.address === '') {
      errors.address = "Address id required!"
    } else {
      errors.address = undefined
    }
  } else {
    errors.address = ''
  }

  if (values.recordId !== undefined) {
    if (values.recordId === '') {
      errors.recordId = 'Record ID is required!'
    } else {
      errors.recordId = undefined
    }
  } else {
    errors.recordId = ''
  }

  if (values.license !== undefined) {
    if (values.license === '') {
      errors.license = 'License is required!'
    } else {
      errors.license = undefined
    }
  } else {
    errors.license = ''
  }

  if (values.phone !== undefined) {
    if (values.phone === '') {
      errors.phone = 'Phone is required'
    } else {
      errors.phone = undefined
    }
  } else {
    errors.phone = ''
  }

  return errors;  
}