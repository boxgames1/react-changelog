# react-changelog

> Easy include your changelog as a React component

[![NPM](https://img.shields.io/npm/v/react-changelog.svg)](https://www.npmjs.com/package/react-changelog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/86af4120108f481facaaa26661911a86)](https://www.codacy.com/app/boxgames1/react-changelog?utm_source=github.com&utm_medium=referral&utm_content=boxgames1/react-changelog&utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/boxgames1/react-changelog.svg?branch=master)](https://travis-ci.org/boxgames1/react-changelog)

### Demo

[EXAMPLE](https://boxgames1.github.io/react-changelog/){:target="\_blank"}

## Install

```bash
npm install --save react-changelog
```

## Usage

```jsx
import React, { Component } from "react";

import ReactChangelog from "react-changelog";

class Example extends Component {
  render() {
    return <ReactChangelog endpoint="changelog.json" />;
  }
}
```

## License

MIT © [boxgames1](https://github.com/boxgames1)
