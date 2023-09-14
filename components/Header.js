import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>

      {/* Navigation Links */}
      <nav className="text-center mt-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-700">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a className="text-blue-500 hover:text-blue-700">Categories</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-blue-500 hover:text-blue-700">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-blue-500 hover:text-blue-700">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Optional Search Bar */}
      <div className="mt-4 text-center">
        {/* Add your search bar component here if needed */}
      </div>
    </header>
  );
}
