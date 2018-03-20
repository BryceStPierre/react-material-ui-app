const routes = new Map([
  ['/', 'Skeam'],
  ['/explore', 'Explore'],
  ['/sign-in', 'Sign In'],
  ['/register', 'Register']
]);

export default function titleMap (path) {
  return routes.get(path) ? routes.get(path) : 'Error';
}