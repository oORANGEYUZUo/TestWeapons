import { Search } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { weapons, type Weapon } from "@/data/weapons";

/**
 * Premium Fantasy MMORPG Weapons Database
 * 
 * Design Philosophy: Premium Korean MMORPG Portal Aesthetic
 * - Deep navy/midnight blue gradient background
 * - Subtle full-screen square grid overlay
 * - Sparse tiny star particles
 * - Soft ambient radial glow
 * - Metallic gold accents
 * - Elegant cinematic minimalism
 * - Navy + gold visual identity
 * - Production-ready responsive design
 */

const weaponTypes = ["All", "Axe", "Dual Swords", "Gauntlets", "Greatsword", "Book", "Lance", "Longsword", "Cudgel", "Rapier", "Staff", "Shield", "Wand"];
const weaponSeries = ["All", "Black Flame Wings", "Eternal Grace", "Indomitable Guard"];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTypeFilter, setActiveTypeFilter] = useState("All");
  const [activeSeriesFilter, setActiveSeriesFilter] = useState("All");
  const [stars, setStars] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const starArray = Array.from({ length: 80 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setStars(starArray);
    };
    generateStars();
  }, []);

  const filteredWeapons = useMemo(() => {
    return weapons.filter((weapon) => {
      const matchesSearch = weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        weapon.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        weapon.series.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = activeTypeFilter === "All" || weapon.type === activeTypeFilter;
      const matchesSeries = activeSeriesFilter === "All" || weapon.series === activeSeriesFilter;
      
      return matchesSearch && matchesType && matchesSeries;
    });
  }, [searchTerm, activeTypeFilter, activeSeriesFilter]);

  return (
    <div className="cosmic-bg min-h-screen relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="grid-overlay" />

      {/* Star Particles */}
      <div className="stars">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glow Effects */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ 
        borderColor: 'rgba(212, 175, 55, 0.2)',
        backgroundColor: 'rgba(10, 14, 39, 0.85)'
      }}>
        <div className="flex items-center justify-between py-4 px-6 lg:px-8">
          {/* Logo - Far Left */}
          <div className="text-sm font-bold gold-glow flex-shrink-0" style={{ 
            letterSpacing: '3px',
            fontFamily: 'Georgia, serif'
          }}>
            7DSORIGIN
          </div>

          {/* Flexible Space */}
          <div className="flex-1" />

          {/* Navigation Items - Far Right */}
          <div className="flex gap-6 lg:gap-8 items-center">
            {/* Menu Items */}
            <a href="#" className="text-xs font-medium transition-colors duration-200" style={{ 
              color: '#e8e8e8',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
            >
              หน้าแรก
            </a>
            
            <a href="#" className="text-xs font-medium transition-colors duration-200" style={{ 
              color: '#e8e8e8',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
            >
              ตัวละคร
            </a>
            
            {/* Active Page - อาวุธ */}
            <a href="#" className="text-xs font-medium relative" style={{ 
              color: '#d4af37',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px',
              paddingBottom: '2px',
              borderBottom: '2px solid rgba(212, 175, 55, 0.4)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'rgba(212, 175, 55, 0.6)'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(212, 175, 55, 0.4)'}
            >
              อาวุธ
            </a>
            
            <a href="#" className="text-xs font-medium transition-colors duration-200" style={{ 
              color: '#e8e8e8',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
            >
              จัดอันดับ
            </a>
            
            <a href="#" className="text-xs font-medium transition-colors duration-200" style={{ 
              color: '#e8e8e8',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
            >
              อีเวนต์
            </a>
            
            <a href="#" className="text-xs font-medium transition-colors duration-200" style={{ 
              color: '#e8e8e8',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
            >
              ไกด์
            </a>

            {/* Divider */}
            <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />

            {/* Language Toggle */}
            <div className="flex gap-2 items-center px-3 py-1 rounded-full" style={{
              backgroundColor: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
              <button className="text-xs font-medium transition-colors duration-200" style={{ 
                color: '#d4af37',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.5px'
              }}>
                EN
              </button>
              <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />
              <button className="text-xs font-medium transition-colors duration-200" style={{ 
                color: '#e8e8e8',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#e8e8e8'}
              >
                TH
              </button>
            </div>

            {/* LOGIN Button */}
            <a href="#" className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200" style={{
              color: '#d4af37',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px',
              border: '1.5px solid #d4af37',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              🔐 LOGIN
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container relative z-10 py-16 px-4">
        {/* Centered Page Heading Section */}
        <div className="text-center mb-20 pt-8">
          {/* Title */}
          <h1 
            className="mb-6 font-bold tracking-wider"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontFamily: 'Georgia, serif',
              color: '#ffffff',
              letterSpacing: '0.15em',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
              fontWeight: '700'
            }}
          >
            WEAPONS
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-sm md:text-base tracking-widest"
            style={{
              color: 'rgba(212, 175, 55, 0.6)',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.08em',
              fontWeight: '400'
            }}
          >
            COMPLETE WEAPONS DATABASE - 36 WEAPONS
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-16 px-4 md:px-6">
          <div className="relative group">
            <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2" size={20} style={{ color: '#d4af37' }} />
            <input
              type="text"
              placeholder="Search weapons by name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 rounded-lg text-sm md:text-base focus:outline-none transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(15, 21, 51, 0.6)',
                border: '1.5px solid rgba(212, 175, 55, 0.3)',
                color: '#e8e8e8',
                boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                e.currentTarget.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 16px rgba(212, 175, 55, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.currentTarget.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.3)';
              }}
            />
          </div>
        </div>

        {/* First Filter Row - Series Filter */}
        <div 
          className="max-w-3xl mx-auto mb-12 px-4 py-6 md:py-8 rounded-2xl"
          style={{
            backgroundColor: 'rgba(15, 21, 51, 0.4)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05)'
          }}
        >
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {weaponSeries.map((series) => (
              <button
                key={series}
                onClick={() => setActiveSeriesFilter(series)}
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  background: activeSeriesFilter === series ? '#d4af37' : 'rgba(15, 21, 51, 0.6)',
                  color: activeSeriesFilter === series ? '#0a0e27' : '#d4af37',
                  border: activeSeriesFilter === series ? '1px solid #d4af37' : '1.5px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: activeSeriesFilter === series 
                    ? '0 0 16px rgba(212, 175, 55, 0.4)' 
                    : 'none',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  if (activeSeriesFilter !== series) {
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSeriesFilter !== series) {
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {series}
              </button>
            ))}
          </div>
        </div>

        {/* Second Filter Row - Type Filter */}
        <div 
          className="max-w-5xl mx-auto mb-16 px-4 py-6 md:py-8 rounded-2xl"
          style={{
            backgroundColor: 'rgba(15, 21, 51, 0.4)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05)'
          }}
        >
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {weaponTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveTypeFilter(type)}
                className="px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  background: activeTypeFilter === type ? '#d4af37' : 'rgba(15, 21, 51, 0.6)',
                  color: activeTypeFilter === type ? '#0a0e27' : '#d4af37',
                  border: activeTypeFilter === type ? '1px solid #d4af37' : '1.5px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: activeTypeFilter === type 
                    ? '0 0 16px rgba(212, 175, 55, 0.4)' 
                    : 'none',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  if (activeTypeFilter !== type) {
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTypeFilter !== type) {
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-8">
          <div 
            className="text-base md:text-lg font-bold mb-8 text-left"
            style={{
              color: '#d4af37',
              textShadow: '0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)',
              letterSpacing: '0.15em',
              fontFamily: 'Georgia, serif',
              fontWeight: '700'
            }}
          >
            ▶ WEAPONS ({filteredWeapons.length})
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredWeapons.map((weapon) => (
              <div 
                key={weapon.id} 
                className="premium-card rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: 'rgba(15, 21, 51, 0.5)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  backdropFilter: 'blur(10px)',
                  minHeight: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.05)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 21, 51, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 21, 51, 0.5)';
                }}
              >
                {/* Weapon Image */}
                <div className="relative bg-gradient-to-b from-blue-900/20 to-blue-950/40 flex items-center justify-center overflow-hidden" style={{ height: '150px' }}>
                  <img
                    src={weapon.imageUrl}
                    alt={weapon.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-300" style={{ maxHeight: '160px', maxWidth: '160px' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Series Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded text-xs font-bold" style={{
                    backgroundColor: '#d4af37',
                    color: '#0a0e27',
                    letterSpacing: '0.5px'
                  }}>
                    {weapon.type.substring(0, 3).toUpperCase()}
                  </div>
                </div>

                {/* Weapon Info */}
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e8e8e8', letterSpacing: '1px' }}>
                    {weapon.name}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: 'rgba(232, 232, 232, 0.6)' }}>
                    {weapon.series}
                  </p>

                  {/* Description */}
                  <p className="text-xs mb-4" style={{ color: 'rgba(212, 175, 55, 0.8)', lineHeight: '1.5' }}>
                    {weapon.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p style={{ color: 'rgba(232, 232, 232, 0.5)' }}>{weapon.stats.label1}</p>
                      <p className="gold-glow font-bold">{weapon.stats.value1}</p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(232, 232, 232, 0.5)' }}>{weapon.stats.label2}</p>
                      <p className="gold-glow font-bold">{weapon.stats.value2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredWeapons.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: 'rgba(232, 232, 232, 0.5)', letterSpacing: '1px' }}>
                NO WEAPONS FOUND
              </p>
            </div>
          )}
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16 pt-16 border-t px-4" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}>
          <div className="premium-card rounded-lg p-6 text-center">
            <p className="text-3xl gold-glow font-bold mb-2">36</p>
            <p className="text-xs" style={{ color: 'rgba(232, 232, 232, 0.6)', letterSpacing: '1px' }}>
              TOTAL WEAPONS
            </p>
          </div>
          <div className="premium-card rounded-lg p-6 text-center">
            <p className="text-3xl gold-glow font-bold mb-2">3</p>
            <p className="text-xs" style={{ color: 'rgba(232, 232, 232, 0.6)', letterSpacing: '1px' }}>
              WEAPON SERIES
            </p>
          </div>
          <div className="premium-card rounded-lg p-6 text-center">
            <p className="text-3xl gold-glow font-bold mb-2">12</p>
            <p className="text-xs" style={{ color: 'rgba(232, 232, 232, 0.6)', letterSpacing: '1px' }}>
              WEAPON TYPES
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t py-8 mt-16" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}>
        <div className="container text-center text-xs px-4" style={{ color: 'rgba(232, 232, 232, 0.4)', letterSpacing: '1px' }}>
          © 2026 7DS ORIGIN · WEAPONS DATABASE · PREMIUM MMORPG PORTAL
        </div>
      </footer>
    </div>
  );
}
