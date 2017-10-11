# Storybook styles

This [storybook](https://storybook.js.org/) decorator allows you to add custom styles to the storybook preview panel.

![Screenshot of a styles storybook preview](./storybook-styles.png)

### Getting Started

```sh
npm install --save @sambego/storybook-styles
```

Then write your stories like this:

```js
import React from 'react';
import { storiesOf } from "@storybook/react";
import styles from "@sambego/storybook-styles";

storiesOf("Button", module)
  .addDecorator(styles({
    fontFamily: 'Helvetica, Arial, sans-serif',
    background: '#e1ecfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
  }))
  .add("with text", () => <button>Click me</button>);
```

The style decorator accepts a JavaScript object with camelCased style properties which will be applied around the content of the preview area.
