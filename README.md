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
    background: 'tomato',
    fontFamily: 'Helvetica, Arial, sans-serif'
  }))
  .add("with text", () => <button>Click me</button>);
```
