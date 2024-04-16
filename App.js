const heading = React.createElement(
  'h1',
  { id: 'heading', islogin: 'true' },
  'Hello'
);
// heading is an object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
// render function makes html tag
