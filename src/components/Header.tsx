import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Vision & Mission', path: '/vision-mission' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="https://static.wixstatic.com/media/2019fd_486bae4956e04def972fe83303774e9a~mv2.jpeg"
                alt="PGIMTECH Logo"
                className="w-full h-full object-contain"
                width={56}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>PGIMTECH</span>
              <span className={`text-xs transition-colors duration-300 font-paragraph ${
                isScrolled ? 'text-foreground/70' : 'text-white/80'
              }`}>Pinnacle Global Institute</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-paragraph text-sm transition-all duration-200 ${
                  location.pathname === item.path
                    ? isScrolled 
                      ? 'text-primary font-semibold bg-primary/5'
                      : 'text-white font-semibold bg-white/10'
                    : isScrolled
                      ? 'text-foreground hover:text-primary hover:bg-primary/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/admissions">
              <Button className={`rounded-lg px-6 transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary hover:bg-white/90'
              }`}>
                Apply Now
              </Button>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 transition-colors duration-300 ${
            isScrolled 
              ? 'border-t border-secondary bg-white' 
              : 'border-t border-white/20 bg-white/95 backdrop-blur-sm'
          }`}>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-paragraph transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary font-semibold bg-primary/5'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg mt-4">
                  Apply Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
