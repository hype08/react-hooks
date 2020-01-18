# Chapter 5 - React Context Hooks

5_1 Provider and Consumer

## Getting Started & Install

```
cd 5_1 && npm install
```

## Run

```
npm run start
```

React context is used to share values across a tree of React components. We may want to share global values like `user` state and the `dispatch` function, the theme of app, or chosen language.

Consists of two parts:

The **provider** which sets value.
The **consumer** which uses it.

1. To use it, we first *define the context*. 

```jsx
export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

```

2.  

- Import `useContext` from React.
- Import `ThemeContext` from `App.js` into your file.
- Define the `useContext` hook. 

```jsx
// Header.js

import React, { useContext } from 'react'
import { ThemeContext } from './App'

const Header = ({text}) => {
  const theme = useContext(ThemeContext)
  
  return <h1 style={{ color: theme.primaryColor }}>{text}</h1>
}

export default Header
```

3. Back in `App.js` import your file.