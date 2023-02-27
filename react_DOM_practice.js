// Below the import statements, call ReactDOM.render().

// Pass in this expression as a first argument:

// <h1>Render me!</h1>
// Pass in this expression as a second argument:

// document.getElementById('app')

import React from 'react'
import ReactDOM from 'react-dom'

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'))

// 1.
// On line 5, declare a variable named myList. Set myList equal to a JSX <ul></ul> element. Wrap your <ul></ul> in parentheses.

// Add several <li></li> elements in between your <ul></ul> tags. Put some text in each <li></li>. Use line breaks and indentation similar to the above example.

// 2.
// At the bottom of the file, call ReactDOM.render().

// For ReactDOM.render()‘s first argument, pass in the variable myList.

// For ReactDOM.render()‘s second argument, select an HTML element with an id of app.

// Feel free to use the example code as a guide.
// Write code here:
const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2! </li>
  </ul>
)

ReactDOM.render(myList, document.getElementById('app'))
