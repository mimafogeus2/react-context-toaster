import React from 'react';

import ContextToaster, { addContextToasterNotificationInterface, TOAST_TYPES } from '../dist/index'

const exampleContent = [
  'Hey!',
  'Hello, I am a longer message. I can wrap and span multiple lines. How do you do?',
  <div>Things that are also possible: <ul><li>HTML content</li></ul></div>
]
class ExampleChild extends React.Component {
  constructor(props) {
    super(props)
    this.notifyExample = this.notifyExample.bind(this)
  }
  notifyExample() {
    const typeValues = Object.values(TOAST_TYPES)
    const type = typeValues[Math.floor(Math.random() * typeValues.length)]
    const message = exampleContent[Math.floor(Math.random() * exampleContent.length)]
    this.context.ContextToastNotify({ title: 'title', message, type })
  }
  render() {
    return <button onClick={this.notifyExample}>click</button>
  }
}
// Usually you'll wrap the object with addContextToasterNotificationInterface when exporting it.
const ToastableExampleChild = addContextToasterNotificationInterface(ExampleChild)

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContextToaster>
        <ToastableExampleChild />
      </ContextToaster>
    )
  }
}

export default Example;