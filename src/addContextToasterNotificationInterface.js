import React from 'react'
import PropTypes from 'prop-types'

const CONTEXT_TOAST_NOTIFY_FUNC = 'ContextToastNotify'

export default function addContextToasterNotificationInterface(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      const nextContextTypes = Object.assign(
        {},
        WrappedComponent.contextTypes,
        { [CONTEXT_TOAST_NOTIFY_FUNC]: PropTypes.func.isRequired }
      )
      WrappedComponent.contextTypes = nextContextTypes
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
