import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './ui/Icon';
import { Container } from './ui/Container';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-white/5">
      <Container className="flex items-center justify-between h-16">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
            <img
                src="/images/logo.png"
                alt="Give IT Back"
                className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight dark:text-white">Give IT Back</span>
            </div>
        </Link>

        <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Śledź, pożyczaj, oddawaj.
            </span>
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
            >
                {isDark ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
