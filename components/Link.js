import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

function Link({
  children, router, href, style
}) {
  const linkStyle = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  const handleClick = (event) => {
    event.preventDefault()

    router.push(href)
  }

  return(
    <a href={href} onClick={handleClick} style={{ ...style, linkStyle }}>{children}</a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  href: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object
}

Link.defaultProps = {
  style: { color: 'green' }
}

export default withRouter(Link)
