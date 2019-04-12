import React from 'react'
import Link from './Link'

const SiteNav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/about">
          {'About Us'}
        </Link>
      </li>
    </ul>
  </nav>
)

export default SiteNav
