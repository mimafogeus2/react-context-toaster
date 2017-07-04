import React from 'react'
import PropTypes from 'prop-types'

import ContextToast from './ContextToast'
import './contextToaster.css'

const INITIAL_STATE = {
  toasts: []
}
const DEFAULT_LIFETIME = 5000
const DEFAULT_ANIMATION_LENGTH = 200
export const TOAST_TYPES = {
  ERROR: 'ERROR',
  NOTIFY: 'NOTIFY',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN'
}
const CONTEXT_TOAST_NOTIFY_FUNC = 'ContextToastNotify'

export function addContextToasterNotificationInterface(WrappedComponent) {
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

class ContextToaster extends React.Component {
  constructor(props) {
    super(props)
    this.notify = this.notify.bind(this)
    this.state = INITIAL_STATE
  }
  removeToast(toastKey) {
    const nextToasts = this.state.toasts.filter(toast => toast.key !== toastKey)
    this.setState({ toasts: nextToasts })
  }
  notify({
    title,
    message,
    type = TOAST_TYPES.NOTIFY,
    className,
    lifetime = DEFAULT_LIFETIME,
    animationLength = DEFAULT_ANIMATION_LENGTH,
    closeOnClick = true
  }) {
    const timestamp = (new Date()).getTime()
    const key = `${type}_${message}_${timestamp}`
    const removeToastFunc = this.removeToast.bind(this, key)
    const newToast = { title, message, type, className, key, lifetime, removeToastFunc, closeOnClick, animationLength }
    const nextToasts = this.state.toasts.concat(newToast)
    setTimeout(removeToastFunc, lifetime + animationLength)
    this.setState({ toasts: nextToasts })
  }
  getChildContext() {
    return { [CONTEXT_TOAST_NOTIFY_FUNC]: this.notify }
  }
  getToasts() {
    return this.state.toasts.map(toast =>
      <ContextToast
        title={toast.title}
        key={toast.key}
        lifetime={toast.lifetime}
        animationLength={toast.animationLength}
        type={toast.type}
        removeToastFunc={toast.removeToastFunc}
        closeOnClick={toast.closeOnClick}
      >
        {toast.message}
      </ContextToast>
    )
  }
  render() {
    return <div className="ContextToaster__Scope">
      {this.props.children}
      <ul className='ContextToaster__ToastsList'>
        {this.getToasts()}
      </ul>
    </div>
  }
}

ContextToaster.childContextTypes = {
  [CONTEXT_TOAST_NOTIFY_FUNC]: PropTypes.func
}

ContextToaster.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

ContextToaster.addContextToasterNotificationInterface = addContextToasterNotificationInterface

export default ContextToaster
