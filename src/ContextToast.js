import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

class ContextToast extends React.Component {
  constructor(props) {
    super(props)
    if (!props.title && !props.children) {
      throw new Error('ContextToasts requires you to provide either a title, children or both.')
    }
    this.onClickFunc = this.onClickFunc.bind(this)
    this.state = { isVisible: false }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isVisible: true }), 0)
  }
  onClickFunc() {
    if (this.props.closeOnClick) {
      this.setState({ isVisible: false })
      setTimeout(this.props.removeToastFunc, this.props.animationLength)
    }
  }
  getTitle() {
    if (!this.props.title) {
      return null
    }
    return <h1 className='ContextToaster__Toast__textContainer__title'>{this.props.title}</h1>
  }
  render() {
    const toastClassNames = classnames({
      ContextToaster__Toast: true,
      'ContextToaster__Toast--visible': this.state.isVisible,
      [`ContextToaster__Toast--${this.props.type.toUpperCase()}`]: !!this.props.type,
      [this.props.className]: !!this.props.className
    })
    return <li className={toastClassNames} onClick={this.onClickFunc}>
      <div className='ContentToaster__Toast__iconContainer' />
      <div className='ContextToaster__Toast__textContainer'>
        {this.getTitle()}
        <div className='ContextToaster__Toast__textContainer__textMessage'>{this.props.children}</div>
      </div>
    </li>
  }
}
ContextToast.defaultProps = {
  animationLength: 200,
  closeOnClick: true,
  customClass: null,
  lifetime: 5000,
}
ContextToast.propTypes = {
  animationLength: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
  lifetime: PropTypes.number,
  title: PropTypes.string,
  removeToastFunc: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default ContextToast