const routes = new Map([
  ['/', 'Skeam'],
  ['/explore', 'Explore'],
  ['/sign-in', 'Sign In'],
  ['/register', 'Register'],
  ['/skeam/new', 'New Skeam']
]);

export default function titleMap (path) {
  return routes.get(path) ? routes.get(path) : 'Error';
}