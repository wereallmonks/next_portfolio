import Link from 'next/link';
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li><Link href="/">home</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/projects">projects</Link></li>
      </ul>
    </nav>
    )
}
