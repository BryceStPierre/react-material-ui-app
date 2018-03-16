const routes = new Map([
  ['/', ' '],
  ['/explore', 'Explore'],
  ['/sign-in', 'Sign In'],
  ['/register', 'Register']
]);

export default function pageTitle (path) {
  return routes.get(path) ? routes.get(path) : 'Error';
}