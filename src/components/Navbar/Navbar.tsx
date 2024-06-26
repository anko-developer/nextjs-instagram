'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../ui/icons/HomeIcon';
import HomeFillIcon from '../ui/icons/HomeFillIcon';
import SearchIcon from '../ui/icons/SearchIcon';
import SearchFillIcon from '../ui/icons/SearchFillIcon';
import NewIcon from '../ui/icons/NewIcon';
import NewFillIcon from '../ui/icons/NewFillIcon';
import ColorButton from '../ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from '../Avatar/Avatar';

const menus = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>

      <nav className="flex gap-4 items-center p-4">
        {menus.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            {pathname !== menu.href ? menu.icon : menu.clickedIcon}
          </Link>
        ))}
        {user && (
          <Link href={`/user/${user.username}`}>
            <Avatar size="sm" highlight image={user.image} />
          </Link>
        )}
        {session ? (
          <ColorButton text="Sign out" onClick={() => signOut()} />
        ) : (
          <ColorButton text="Sign in" onClick={() => signIn()} />
        )}
      </nav>
    </div>
  );
}
