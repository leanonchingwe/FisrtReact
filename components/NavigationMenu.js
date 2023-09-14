import Link from 'next/link';

export default function NavigationMenu() {
  // Define your navigation links here
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Categories', href: '/categories' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="hidden md:flex space-x-4">
      {/* Render navigation links */}
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <a className="text-white hover:underline">{link.text}</a>
        </Link>
      ))}
    </nav>
  );
}
