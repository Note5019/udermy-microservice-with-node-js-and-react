import Link from 'next/link';

export default ({ currentUser }) => {
    return <nav className="navber navbar-light bg-light">
                <Link href="/">
                    <a className="navbar-brand"> GitTix </a>
                </Link>
                <div className="d-flex justify-content-end">
                    <ul className="nav d-fex align-items-center">
                        { currentUser ? 'Sign out' : 'Sign in'}
                    </ul>
                </div>
            </nav>
}