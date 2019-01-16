import React from 'react';
import ReactDOM from 'react-dom';
import SiteComponent from "./product.component";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
