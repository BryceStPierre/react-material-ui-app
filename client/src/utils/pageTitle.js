const routes = new Map([
  ['/', ''],
  ['/sign-in', 'Sign In'],
  ['/register', 'Register']
]);

export default function pageTitle (path) {
  const title = path !== '/' ? routes.get(path) : '';
  return title ? title : 'Broken Link';
}