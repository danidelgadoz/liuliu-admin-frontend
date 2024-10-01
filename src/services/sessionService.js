export const setAccessToken = (accessToken) => {
  return localStorage.setItem('access_token', accessToken);
};

export const getAccessToken = () => {
  // return localStorage.getItem('access_token');
  return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3NTU2OTY1LCJpYXQiOjE3Mjc1NDk3NjUsImp0aSI6IjBlYWQzNTI5MmU3ZjRlYTJhZDFmNmUyMzFhODhmOGY2IiwidXNlcl9pZCI6MX0.1qwG2RBgO4OcNTVoQeykFkDTNqo6fsDk5s9jbUvWQr8`;
};

export const isLogged = () => {
  return !!localStorage.getItem('access_token');
};
