# odin-dropdown

A simple dropdown component for vanilla JavaScript.

## Installation

```bash
npm install @k0r0bkin/odin-dropdown
```

## Usage

```js
import '@k0r0bkin/odin-dropdown/src/dropdown.css';
import { Dropdown } from '@k0r0bkin/odin-dropdown';

// Grab your dropdown element from the page
const dropdownElement = document.querySelector('#some-dropdown');
const dropdown = new Dropdown(dropdownElement);
```

## HTML Structure

```html
<div id="some-dropdown">
  <button class="dropdown-button">Menu</button>
  <div class="dropdown-content">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</div>
```

## License

This repository and the code inside it is licensed under the MIT License.
