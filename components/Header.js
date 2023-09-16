import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold">{name}</a>
          </Link>
          <nav className="ml-6 space-x-4">
            {/* Navigation Links */}
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/categories">
              <a>Categories</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Optional Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md border"
          />
          <button className="bg-blue-700 text-white px-3 py-1 ml-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

