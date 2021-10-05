export const validateRequired = value => {
  const errors = [];
  if (value.length === 0) {
    errors.push('Required');
  }
  return errors;
};

export const validateName = name => {
  const errors = [];
  if (name.length === 0) {
    errors.push('Required');
  }
  if (name.length > 32) {
    errors.push('Must be 32 characters or less');
  }
  return errors;
};

export const validateUserName = username => {
  const errors = [];
  if (username.length === 0) {
    errors.push('Required');
  }
  if (username.length > 32) {
    errors.push('Must be 32 characters or less');
  }
  if (username.includes(' ')) {
    errors.push('Must not contain spaces');
  }
  return errors;
};

export const validateFullName = fullname => {
  const errors = [];
  if (fullname.length === 0) {
    errors.push('Required');
  }
  if (fullname.length > 32) {
    errors.push('Must be 32 characters or less');
  }
  return errors;
};

export const validateEmail = email => {
  console.log('email', email);
  const errors = [];
  if (email === undefined) {
    errors.push('Required');
  } else if (email.length === 0) {
    errors.push('Required');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push('Invalid email address');
  } else if (email.length < 6) {
    errors.push('Must be 6 characters or more');
  } else if (email.length > 32) {
    errors.push('Must be 32 characters or less');
  }
  return errors;
};

export const validateUserNameOrEmail = username => {
  const errors = [];
  if (username.length === undefined) {
    errors.push('Required');
  } else if (username.length === 0) {
    errors.push('Required');
  } else if (username.length > 32) {
    errors.push('Must be 32 characters or less');
  } else if (username.includes(' ')) {
    errors.push('Must not contain spaces');
  }
  return errors;
};

export const validatePassWord = password => {
  const errors = [];
  if (password === undefined) {
    errors.push('Required');
  } else if (password.length === 0) {
    errors.push('Required');
  } else if (password.length < 8) {
    errors.push('Must be 8 characters or more');
  } else if (password.length > 32) {
    errors.push('Must be 32 characters or less');
  }
  return errors;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const errors = [];
  if (confirmPassword === undefined) {
    errors.push('Required');
  } else if (confirmPassword.length === 0) {
    errors.push('Required');
  } else if (confirmPassword !== password) {
    errors.push('Must match password');
  }
  return errors;
};
