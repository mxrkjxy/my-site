export const isArray = (value) => Array.isArray(value);

export const isObject = (value) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export const isDataEmpty = (data) => {
  if (Array.isArray(data)) {
    if (data.length === 0) return false;
    return data.every(obj => 
      Object.values(obj).every(value => 
        (Array.isArray(value) && value.length === 0) || value === '' || value == null
      )
    );
  } else if (typeof data === 'object' && data !== null) {
    return Object.values(data).every(value => 
      (Array.isArray(value) && value.length === 0) || value === '' || value == null
    );
  }

  return false;
};