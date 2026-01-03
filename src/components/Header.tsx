import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  
  const isProjectPage = location.pathname.startsWith('/project/');

  const navItems = [
    { label: t('nav.home'), href: isProjectPage ? '/' : '#home', isLink: isProjectPage },
    { label: t('nav.about'), href: isProjectPage ? '/#about' : '#about', isLink: isProjectPage },
    { label: t('nav.projects'), href: isProjectPage ? '/#projects' : '#projects', isLink: isProjectPage },
    { label: t('nav.contact'), href: isProjectPage ? '/#contact' : '#contact', isLink: isProjectPage },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-mono text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors">
            Portfolio Johan Svensson
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              )
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2 border-l border-border pl-4">
              <button
                onClick={() => handleLanguageChange('sv')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'sv' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                SV
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleLanguageChange('sv')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'sv' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground'
                }`}
              >
                SV
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
