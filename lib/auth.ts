// WARNING: Storing credentials directly in the code is a security risk.
// It is highly recommended to use environment variables for production environments.
export function checkCredentials(username, password) {
  const adminUsername = process.env.ADMIN_USERNAME || "adminMykenjos";
  const adminPassword = process.env.ADMIN_PASSWORD || "Mykenjos1478";
  return username === adminUsername && password === adminPassword;
}
