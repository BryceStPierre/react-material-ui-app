const routes = new Map([
  ['/', 'Skeam'], 
  ['/sign-in', 'Sign In']
]);

export default function pageTitle (path) {
  const title = routes.get(path);
  return title ? title : 'Broken Link';
}