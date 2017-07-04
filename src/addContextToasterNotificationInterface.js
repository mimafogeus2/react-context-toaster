import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

import { CONTEXT_TOAST_NOTIFY_FUNC_NAME } from './consts'

export default function addContextToasterNotificationInterface(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return createReactClass({
    componentWillMount() {
      WrappedComponent[CONTEXT_TOAST_NOTIFY_FUNC_NAME] = this.context[CONTEXT_TOAST_NOTIFY_FUNC_NAME]
    },
    render() {
      const propsWithToastFunc = Object.assign({}, this.props,
        { [CONTEXT_TOAST_NOTIFY_FUNC_NAME]: this.context[CONTEXT_TOAST_NOTIFY_FUNC_NAME] }
      )

      return <WrappedComponent {...propsWithToastFunc} />
    },
    contextTypes: { [CONTEXT_TOAST_NOTIFY_FUNC_NAME]: PropTypes.func.isRequired }
  })
}
