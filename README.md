# Storybook styles

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
    background: '#e1ecfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
  }))
  .add("with text", () => <button>Click me</button>);
```

The style decorator accepts a JavaScript object with camelCased style properties which will be applied around the content of the preview area.
