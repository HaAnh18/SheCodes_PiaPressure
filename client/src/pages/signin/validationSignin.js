export function ValidationSignin(values) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if(values.username !== undefined) {
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

 if(values.password !== undefined) {
  if (values.password === '') {
    errors.password = "Password is required!";
  } else {
    errors.password = undefined;
  }
 } else {
   errors.password = '';
 }

  return errors;  
}