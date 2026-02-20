import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'; // <-- This was missing
import './index.css'; // <-- This was missing
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Menu, X, Target, Shield, Zap, Flame, Infinity as InfinityIcon, 
  Mail, Phone, Globe, Send, ChevronRight, Crown, Code2, Sparkles, Feather,
  TrendingUp, CheckCircle2, ArrowRight
} from 'lucide-react';
/**
 * SHOPSARAS: THE PARTHA SARATHI OF COMMERCE
 * A high-performance, designer Shopify Agency Portfolio.
 * Inspired by the strategic supremacy of Krishna and the Mahabharat.
 */

// --- DIVINE CONTENT CONFIGURATION ---

const NAV_LINKS = [
  { name: 'The Charioteer', href: '#story' },
  { name: 'Kurukshetra', href: '#vault' },
  { name: 'Maya Sabha', href: '#expertise' },
  { name: 'Divine Astras', href: '#tech' },
  { name: 'The Strategy', href: '#process' },
  { name: 'The Darbar', href: '#pricing' },
];

const SERVICES = [
  {
    title: 'Cosmic Architecture',
    description: 'Bespoke Shopify stores designed with the mathematical perfection of the Maya Sabha. Zero bloat, infinite elegance.',
    icon: <Crown className="w-6 h-6" />,
  },
  {
    title: 'Indestructible Logic',
    description: 'Backend systems fortified to withstand the heaviest traffic surges. We build fortresses, not tents.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'The Mohini Illusion',
    description: 'Irresistible, hypnotic UI/UX design that captures the soul of your customer and effortlessly guides them to purchase.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Sanjivani Growth',
    description: 'Data-driven conversion alchemy that revives abandoned carts and turns stagnant traffic into pure royal treasury.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const ASTRAS = [
  {
    name: 'Brahmastra',
    tech: 'Headless Next.js',
    desc: 'The ultimate weapon for infinite scale. Sub-second load times that overwhelm any competitor in the marketplace.',
    icon: <InfinityIcon className="w-8 h-8 text-[#E2B753]" />
  },
  {
    name: 'Pashupatastra',
    tech: 'Advanced Liquid Core',
    desc: 'A precision strike on Shopify. We manipulate the core framework for bespoke features templates cannot fathom.',
    icon: <Target className="w-8 h-8 text-[#E2B753]" />
  },
  {
    name: 'Vajra',
    tech: 'Tailwind Mastery',
    desc: 'Lightning-fast, indestructible adaptive styling that holds its majestic form perfectly across every mortal device.',
    icon: <Zap className="w-8 h-8 text-[#E2B753]" />
  },
  {
    name: 'Narayanastra',
    tech: 'Custom API Automation',
    desc: 'Self-multiplying logic. Complex asynchronous integrations that run your digital empire while you strategize the next war.',
    icon: <Flame className="w-8 h-8 text-[#E2B753]" />
  }
];

const PROCESS_STEPS = [
  { step: 'I', title: 'Sankalpa (The Vow)', desc: 'We enter your Darbar to understand the deepest vision, target audience, and financial destiny of your empire.' },
  { step: 'II', title: 'Upadesha (The Strategy)', desc: 'The Gitopadesha of commerce. We map the architectural flow, design the Vastu, and blueprint the user journey.' },
  { step: 'III', title: 'Nirman (The Forging)', desc: 'Summoning the Astras. Meticulous hand-coding of your digital storefront from raw logic into living, breathing art.' },
  { step: 'IV', title: 'Vijay (The Victory)', desc: 'The blowing of the Panchajanya conch. Rigorous testing followed by unleashing your dominant brand upon the world.' },
];

const PROJECTS = [
  { 
    title: 'Furlicks Pet Care', 
    category: 'The Custom Empire', 
    tint: 'from-amber-900/40 to-transparent', 
    accent: '#E2B753',
    description: 'A masterclass in bespoke Shopify architecture. We mapped complex backend logic to an elegant, high-converting frontend.'
  },
  { 
    title: 'Royaleclutch Mart', 
    category: 'High-Scale Fortress', 
    tint: 'from-emerald-900/40 to-transparent', 
    accent: '#10B981',
    description: 'Built for massive scale. This digital fortress handles thousands of concurrent users during flash sales without flinching.'
  },
  { 
    title: 'UltraClean Tech', 
    category: 'Single-Point Conquest', 
    tint: 'from-blue-900/40 to-transparent', 
    accent: '#3B82F6',
    description: 'Absolute focus. Minimum distraction. A storefront engineered like Arjuna’s arrow—designed for single-point conversion.'
  },
];

const FAQS = [
  { q: "Do you use Shopify themes?", a: "No. A true Maharaja does not rule from a rented tent. We custom-code every empire from scratch to ensure absolute uniqueness and uncompromised speed." },
  { q: "Why choose ShopSaras?", a: "We are the Sarathi to your Arjuna. We don't just 'build websites'—we provide the cosmic architecture, the strategy, and the divine weapons to conquer your market." },
  { q: "What is the timeline?", a: "A grand palace takes time to forge. Depending on the complexity of the astras required, an empire is typically built and launched within 4 to 8 weeks." },
  { q: "Do you provide guidance post-launch?", a: "Yes. The King needs his council even after the war is won. We provide dedicated technical stewardship to ensure your store remains optimized and victorious." }
];

// --- SACRED SVG & VISUAL COMPONENTS ---

const PremiumGoldText = "text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";

// The Flute of Krishna (Bansuri) & Moor Pankh
const DivineFlute = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glowing Aura */}
    <circle cx="100" cy="100" r="80" fill="url(#flute-glow)" opacity="0.4" className="animate-pulse" />
    <defs>
      <radialGradient id="flute-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.1" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient id="gold-flute" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BF953F" />
        <stop offset="50%" stopColor="#FCF6BA" />
        <stop offset="100%" stopColor="#B38728" />
      </linearGradient>
    </defs>

    {/* The Moor Pankh (Peacock Feather) Background */}
    <g transform="translate(60, 40) rotate(15)">
      <path d="M40 100 Q 45 60 40 10" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 10 C 60 25 60 55 40 70 C 20 55 20 25 40 10 Z" fill="#10B981" fillOpacity="0.3" stroke="#E2B753" strokeWidth="1" />
      <path d="M40 25 C 50 35 50 50 40 60 C 30 50 30 35 40 25 Z" fill="#3B82F6" fillOpacity="0.5" />
      <circle cx="40" cy="40" r="5" fill="#03050A" />
      <circle cx="40" cy="40" r="3" fill="#E2B753" className="animate-ping opacity-50" />
      {/* Feather strands */}
      {Array.from({ length: 12 }).map((_, i) => (
         <path key={`r-${i}`} d={`M40 ${20 + i*4} Q ${55 + i} ${15 + i*4} ${60 - i} ${35 + i*4}`} stroke="#10B981" strokeWidth="0.5" opacity="0.6" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
         <path key={`l-${i}`} d={`M40 ${20 + i*4} Q ${25 - i} ${15 + i*4} ${20 + i} ${35 + i*4}`} stroke="#10B981" strokeWidth="0.5" opacity="0.6" />
      ))}
    </g>

    {/* The Bansuri (Flute) */}
    <g transform="rotate(-30 100 100)">
      <rect x="30" y="90" width="140" height="12" rx="6" fill="url(#gold-flute)" className="drop-shadow-[0_0_15px_rgba(226,183,83,0.6)]" />
      <line x1="45" y1="90" x2="45" y2="102" stroke="#03050A" strokeWidth="2" opacity="0.5" />
      <line x1="155" y1="90" x2="155" y2="102" stroke="#03050A" strokeWidth="2" opacity="0.5" />
      {/* Flute Holes */}
      <circle cx="65" cy="96" r="2.5" fill="#03050A" />
      <circle cx="85" cy="96" r="2.5" fill="#03050A" />
      <circle cx="105" cy="96" r="2.5" fill="#03050A" />
      <circle cx="125" cy="96" r="2.5" fill="#03050A" />
      <circle cx="145" cy="96" r="2.5" fill="#03050A" />
      {/* Ribbon */}
      <path d="M40 102 Q 35 120 50 140 Q 60 120 45 102" fill="#E2B753" opacity="0.8" />
    </g>
  </svg>
);

// The Sudarshan Chakra (The Cosmic Weapon of Time)
const CosmicChakra = ({ className }) => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="chakra-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E2B753" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#E2B753" stopOpacity="0.05" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <circle cx="250" cy="250" r="240" fill="url(#chakra-glow)" />
    
    <circle cx="250" cy="250" r="200" stroke="#E2B753" strokeWidth="1" strokeDasharray="4 12" opacity="0.5"/>
    <circle cx="250" cy="250" r="180" stroke="#E2B753" strokeWidth="3" opacity="0.7"/>
    <circle cx="250" cy="250" r="50" stroke="#E2B753" strokeWidth="2" opacity="0.9"/>
    
    {/* 108 Inner Spokes of Time */}
    {Array.from({ length: 108 }).map((_, i) => (
      <line key={`spoke-${i}`} x1="250" y1="200" x2="250" y2="50" stroke="#E2B753" strokeWidth="0.5" opacity="0.4" transform={`rotate(${i * (360/108)} 250 250)`} />
    ))}
    
    {/* The 12 Serrated Blades */}
    {Array.from({ length: 12 }).map((_, i) => (
      <path key={`blade-${i}`} d="M250 70 L 270 10 L 250 0 L 230 10 Z" fill="#E2B753" opacity="0.6" transform={`rotate(${i * 30} 250 250)`} />
    ))}
    <circle cx="250" cy="250" r="15" fill="#FCF6BA" className="drop-shadow-[0_0_20px_#FCF6BA] animate-pulse"/>
  </svg>
);

// The Divine Swing (Krishna's Jhula)
const DivineSwing = () => (
  <motion.div
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    style={{ transformOrigin: 'top center' }}
    className="absolute top-0 left-1/2 lg:left-[60%] transform -translate-x-1/2 w-[300px] lg:w-[450px] h-[400px] lg:h-[600px] pointer-events-none mix-blend-screen opacity-50 z-0"
  >
    <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(226,183,83,0.4)]">
      <defs>
        <linearGradient id="swing-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BF953F" />
          <stop offset="50%" stopColor="#FCF6BA" />
          <stop offset="100%" stopColor="#B38728" />
        </linearGradient>
      </defs>
      {/* Golden Chains */}
      <line x1="100" y1="0" x2="100" y2="450" stroke="url(#swing-gold)" strokeWidth="3" strokeDasharray="8 6" />
      <line x1="300" y1="0" x2="300" y2="450" stroke="url(#swing-gold)" strokeWidth="3" strokeDasharray="8 6" />
      
      {/* Wooden/Gold Swing Plank */}
      <rect x="70" y="450" width="260" height="16" rx="6" fill="url(#swing-gold)" />
      <rect x="60" y="456" width="280" height="4" rx="2" fill="#B38728" />

      {/* Abstract Krishna Elements resting on the swing */}
      {/* Flute */}
      <g transform="translate(200, 430) rotate(-15)">
        <rect x="-80" y="-8" width="160" height="16" rx="8" fill="url(#swing-gold)" />
        <circle cx="-50" cy="0" r="3.5" fill="#020306" />
        <circle cx="-25" cy="0" r="3.5" fill="#020306" />
        <circle cx="0" cy="0" r="3.5" fill="#020306" />
        <circle cx="25" cy="0" r="3.5" fill="#020306" />
        <circle cx="50" cy="0" r="3.5" fill="#020306" />
      </g>

      {/* Moor Pankh (Peacock Feather) */}
      <g transform="translate(150, 410) rotate(25)">
        <path d="M0 40 Q -10 -20 0 -90" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 -90 C 30 -65 30 -15 0 10 C -30 -15 -30 -65 0 -90 Z" fill="#10B981" fillOpacity="0.8" />
        <path d="M0 -65 C 15 -50 15 -25 0 -15 C -15 -25 -15 -50 0 -65 Z" fill="#3B82F6" />
        <circle cx="0" cy="-45" r="6" fill="#020306" />
        <circle cx="0" cy="-45" r="3" fill="#E2B753" className="animate-pulse" />
      </g>
    </svg>
  </motion.div>
);

// The Sacred Om (ॐ)
const DivineOm = () => (
  <motion.div 
    animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="w-full h-full flex items-center justify-center pointer-events-none"
  >
    <svg viewBox="0 0 500 500" className="w-full h-full text-[#E2B753] drop-shadow-[0_0_80px_rgba(226,183,83,0.7)]">
      <defs>
        <linearGradient id="om-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBF0" />
          <stop offset="100%" stopColor="#E2B753" />
        </linearGradient>
      </defs>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="300" fontWeight="900" fill="url(#om-grad)" className="font-['Arial',_sans-serif] select-none">ॐ</text>
      <motion.circle 
        cx="250" cy="250" r="220" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 30"
        animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </motion.div>
);

const GlobalCosmicPortal = () => {
  const { scrollYProgress } = useScroll();
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020306]">
      {/* The Shyam (Krishna) Cosmic Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0A1128]/40 via-[#020306] to-[#020306]"></div>
      
      {/* Subtle Film Grain for Premium Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Massive Drifting Sudarshan Chakra Backdrop */}
      <motion.div style={{ rotate: rotate1 }} className="absolute -top-[30%] -right-[10%] w-[120vw] h-[120vw] min-w-[1200px] min-h-[1200px] opacity-[0.04] mix-blend-screen">
        <CosmicChakra className="w-full h-full" />
      </motion.div>

      {/* Deep Space Sacred Geometry */}
      <motion.div style={{ rotate: rotate2 }} className="absolute -bottom-[40%] -left-[20%] w-[150vw] h-[150vw] min-w-[1500px] min-h-[1500px] opacity-[0.03] text-[#E2B753] mix-blend-screen">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 30" />
          {Array.from({length: 16}).map((_, i) => (
            <ellipse key={i} cx="500" cy="500" rx="400" ry="100" fill="none" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 22.5} 500 500)`} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    // Injecting Cinzel for Display, Inter for readability
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="font-['Inter',_sans-serif] bg-transparent text-[#FFFBF0] min-h-screen selection:bg-[#E2B753] selection:text-[#020306] overflow-x-hidden relative">
      
      <GlobalCosmicPortal />

      {/* --- NAVIGATION (FLAWLESS RESPONSIVE) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#020306]/80 backdrop-blur-2xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-b border-[#E2B753]/10' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 xl:px-12 flex justify-between items-center w-full">
          
          <a href="#" className="flex items-center gap-3 md:gap-4 group relative z-50">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E2B753]/50 flex items-center justify-center relative overflow-hidden bg-[#020306] group-hover:border-[#E2B753] transition-colors shadow-[0_0_15px_rgba(226,183,83,0.1)]">
              <span className={`font-['Cinzel',_serif] font-bold text-xl md:text-2xl ${PremiumGoldText}`}>S</span>
            </div>
            <span className="font-['Cinzel',_serif] text-xl md:text-2xl font-bold tracking-[0.2em] text-white">SHOP<span className="text-[#E2B753]">SARAS</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-[#E2B753] transition-colors relative group py-2">
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#E2B753] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
            <a href="#contact" className="ml-4 px-8 py-3 bg-transparent border border-[#E2B753]/50 text-[#E2B753] font-bold text-[10px] uppercase tracking-[0.25em] hover:bg-[#E2B753] hover:text-[#020306] transition-all duration-500 shadow-[0_0_20px_rgba(226,183,83,0.15)] hover:shadow-[0_0_30px_rgba(226,183,83,0.4)]">
              Summon Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-[#E2B753] relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020306]/95 backdrop-blur-3xl pt-28 px-8 lg:hidden flex flex-col gap-8 border-b border-[#E2B753]/20 h-max pb-12 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-['Cinzel',_serif] text-white hover:text-[#E2B753] uppercase tracking-widest border-b border-white/5 pb-4">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-8 py-4 bg-[#E2B753] text-[#020306] font-bold text-center uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(226,183,83,0.3)]">
              Summon Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CHAPTER 1: HERO (THE PARTHA SARATHI) --- */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden z-10">
        
        {/* Divine Swing Animation */}
        <DivineSwing />

        {/* Floating Om Presence */}
        <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[8%] transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] opacity-20 lg:opacity-40 mix-blend-screen pointer-events-none z-0">
          <DivineOm />
        </div>

        <div className="max-w-7xl mx-auto px-6 xl:px-12 relative z-20 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="lg:col-span-7 pt-10 lg:pt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 md:mb-10 border border-[#E2B753]/40 bg-[#0A1128]/60 backdrop-blur-md text-[#E2B753] text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase rounded-full shadow-[0_0_20px_rgba(226,183,83,0.15)]">
              <Sparkles size={14} className="text-[#E2B753] animate-pulse" /> THE SARATHI OF COMMERCE
            </div>
            
            <h1 className="text-[3.2rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-['Cinzel',_serif] text-white mb-6 lg:mb-8 tracking-tight uppercase">
              COMMAND THE <br />
              <span className={`${PremiumGoldText} italic drop-shadow-2xl`}>BATTLEFIELD.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light lg:border-l-2 border-[#E2B753] lg:pl-6 bg-transparent lg:bg-gradient-to-r from-[#0A1128]/50 to-transparent py-2">
              You are Arjuna. We are your charioteer. We engineer bespoke, high-performance Shopify architectures that guarantee absolute victory in the digital marketplace.
            </p>
            
            <a href="#vault" className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#E2B753] text-[#020306] font-bold uppercase tracking-[0.25em] text-[12px] md:text-[13px] shadow-[0_0_30px_rgba(226,183,83,0.4)] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-500 rounded-sm">
              BLOW THE CONCH <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Floating Astral Code Window */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.3 }} className="hidden lg:flex lg:col-span-5 justify-end relative">
            {/* Glowing orb behind code */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
            
            <div className="w-full max-w-[440px] bg-[#020306]/80 backdrop-blur-2xl border border-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-xl relative transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[#E2B753] text-[9px] font-bold tracking-[0.3em] uppercase opacity-80">gitopadesha.liquid</span>
              </div>
              <div className="font-mono text-xs xl:text-sm text-gray-300 leading-loose">
                <p className="text-[#E2B753]/60 italic mb-2">{'// Summoning the Astras'}</p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">victory</span> = <span className="text-purple-400">await</span> <span className="text-emerald-400">ShopSaras</span>.<span className="text-yellow-200">guide</span>({'{'}</p>
                <p className="pl-6">warrior: <span className="text-amber-300">"Your Brand"</span>,</p>
                <p className="pl-6">chariot: <span className="text-amber-300">"Headless Architecture"</span>,</p>
                <p className="pl-6">logic: <span className="text-amber-300">"Indestructible"</span>,</p>
                <p className="pl-6">conversion: <span className="text-purple-400">Infinity</span></p>
                <p>{'})'};</p>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#E2B753] text-[#020306] px-6 py-3 font-bold uppercase tracking-widest text-[9px] shadow-2xl rounded-sm flex items-center gap-2">
                <Code2 size={14} /> Cosmic Logic
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CHAPTER 2: GENESIS (THE DIVINE CHARIOTEER) --- */}
      <section id="story" className="py-24 md:py-32 relative z-10 bg-[#020306]/50 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}>
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Chapter I : Genesis</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Cinzel',_serif] font-bold text-white mb-8">
              The <span className="text-[#E2B753] italic">Sarathi's</span> Vision.
            </h2>
            
            <div className="flex justify-center mb-10">
              <DivineFlute className="w-48 md:w-64 h-auto" />
            </div>

            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light italic mb-8 max-w-3xl mx-auto">
              "In the epic of Mahabharata, absolute victory required two elements: the unmatched skill of Arjuna, and the infallible strategy of Krishna."
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
              You have the product. You are the warrior. At <strong className="text-white font-medium">ShopSaras</strong>, we provide the cosmic architecture, the strategy, and the divine coding logic to ensure you conquer your market. We reject fragile templates and build digital fortresses that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CHAPTER 3: SHILPA (EXPERTISE) --- FIXED PADDING & LAYOUT --- */}
      <section id="expertise" className="py-24 md:py-32 relative z-10 bg-[#0A1128]/20 border-t border-[#E2B753]/10">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-16 md:mb-20 text-center">
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter III : Shilpa</span>
            <h2 className="text-4xl md:text-6xl font-['Cinzel',_serif] font-bold text-white leading-tight">
              Bespoke <span className="text-gray-500 italic">Engineering.</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light text-sm md:text-base">
              Moving away from chaotic templates, we craft lightweight, mathematically perfect architectures that load instantly and convert naturally.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-8 md:p-10 border border-white/5 hover:border-[#E2B753]/40 transition-all duration-500 bg-[#020306]/80 backdrop-blur-md group relative overflow-hidden rounded-sm">
                {/* Subtle top border highlight */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E2B753] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 bg-[#0A1128] border border-[#E2B753]/30 flex items-center justify-center text-[#E2B753] mb-8 group-hover:bg-[#E2B753] group-hover:text-[#020306] transition-all duration-500 shadow-[0_0_15px_rgba(226,183,83,0.1)] rounded-md">
                  {s.icon}
                </div>
                <h3 className="text-xl font-['Cinzel',_serif] font-bold mb-4 text-white group-hover:text-[#E2B753] transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAPTER 4: KHAZANA (VAULT) --- */}
      <section id="vault" className="py-24 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter II : Treasury</span>
            <h2 className="text-5xl md:text-7xl font-['Cinzel',_serif] font-bold text-white">Kurukshetra</h2>
          </div>

          <div className="space-y-32 md:space-y-40">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={reveal} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-16 items-center`}>
                
                <div className="w-full lg:w-3/5 relative group cursor-pointer">
                  <div className="absolute -inset-2 md:-inset-4 border border-[#E2B753]/20 transform group-hover:scale-[1.02] transition-all duration-700 bg-[#0A1128]/20 backdrop-blur-sm rounded-xl"></div>
                  
                  <div className={`relative aspect-[16/10] flex items-center justify-center bg-gradient-to-br ${p.tint} border border-white/10 overflow-hidden shadow-2xl rounded-lg z-10`}>
                    <div className="w-[85%] h-[85%] bg-[#020306] shadow-2xl flex flex-col rounded-md border border-white/5 group-hover:scale-105 transition-transform duration-700">
                      <div className="h-8 md:h-10 border-b border-white/5 flex items-center px-4 bg-[#0A1128]/50">
                        <div className="w-16 md:w-20 h-2 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="flex-grow p-6 flex flex-col items-center justify-center bg-transparent">
                        <div className="w-2/3 h-6 md:h-8 mb-4 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{backgroundColor: p.accent, opacity: 0.8}}></div>
                        <div className="w-full h-24 grid grid-cols-3 gap-3 md:gap-4">
                          <div className="bg-white/5 border border-white/5 rounded-sm"></div>
                          <div className="bg-white/5 border border-white/5 rounded-sm"></div>
                          <div className="bg-white/5 border border-white/5 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-2/5 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-[#E2B753]"></div>
                    <span className="text-[#E2B753] font-bold text-[9px] md:text-[10px] tracking-widest uppercase">{p.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-['Cinzel',_serif] font-bold text-white mb-6 leading-tight">{p.title}</h3>
                  <p className="text-gray-400 mb-8 font-light text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">{p.description}</p>
                  <a className="inline-flex items-center gap-2 font-bold text-[#E2B753] uppercase tracking-[0.2em] text-[10px] cursor-pointer group">
                    <span className="border-b border-[#E2B753]/30 pb-1 group-hover:border-[#E2B753] transition-all">Examine Artifact</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAPTER 5: DIVINE ASTRAS (TECH WEAPONRY) --- FIXED PADDING & FLEX --- */}
      <section id="tech" className="py-24 md:py-32 relative z-10 bg-[#0A1128]/30 border-t border-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-10 border-b border-white/10 pb-10 md:pb-16">
            <div className="max-w-2xl">
              <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter IV : The Arsenal</span>
              <h2 className="text-4xl md:text-6xl font-['Cinzel',_serif] font-bold text-white leading-none">
                Divine <span className="text-[#E2B753]">Astras.</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm md:border-l border-[#E2B753]/30 md:pl-6 font-light text-sm">
              A warrior is only as lethal as the weapons they wield. We employ the most advanced technologies to guarantee absolute victory.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {ASTRAS.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 p-8 md:p-10 bg-[#020306]/80 border border-white/5 hover:border-[#E2B753]/40 transition-all duration-300 group shadow-lg rounded-sm"
              >
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#0A1128] rounded-xl border border-[#E2B753]/20 flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_rgba(226,183,83,0.2)] group-hover:border-[#E2B753]">
                  {a.icon}
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-[#E2B753] tracking-[0.3em] uppercase mb-2">{a.name}</h4>
                  <h3 className="text-xl md:text-2xl font-['Cinzel',_serif] font-bold text-white mb-3">{a.tech}</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAPTER 6: THE STRATEGY (PROCESS) --- */}
      <section id="process" className="py-24 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter V : Strategy</span>
            <h2 className="text-4xl md:text-6xl font-['Cinzel',_serif] font-bold text-white">The Partha <br className="md:hidden"/> Sarathi</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 relative">
            <div className="hidden lg:block absolute top-10 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#E2B753]/30 to-transparent -z-0"></div>

            {PROCESS_STEPS.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#020306] border border-[#E2B753]/50 text-[#E2B753] flex items-center justify-center text-xl font-['Cinzel',_serif] font-bold mb-6 md:mb-8 transform rotate-45 group-hover:rotate-0 group-hover:bg-[#E2B753] group-hover:text-[#020306] transition-all duration-500 shadow-[0_0_15px_rgba(226,183,83,0.15)] rounded-sm">
                  <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">{step.step}</div>
                </div>
                <h3 className="text-lg md:text-xl font-['Cinzel',_serif] font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAPTER 7: THE DARBAR (PRICING) --- */}
      <section id="pricing" className="py-24 md:py-32 relative z-10 bg-[#0A1128]/20 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="text-center mb-20 md:mb-24">
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter VI : Darbar</span>
            <h2 className="text-4xl md:text-6xl font-['Cinzel',_serif] font-bold text-white">Royal Decrees</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-[#020306] border border-white/10 p-10 md:p-12 flex flex-col hover:border-[#E2B753]/50 transition-all group shadow-xl rounded-sm">
              <h3 className="text-2xl md:text-3xl font-['Cinzel',_serif] font-bold mb-3 text-white">The Warrior</h3>
              <p className="text-[#E2B753]/70 italic mb-8 text-xs md:text-sm">Essential digital infrastructure.</p>
              <div className="text-4xl md:text-5xl font-bold mb-10 text-white">₹4,999 <span className="text-xs font-normal text-gray-500 uppercase tracking-widest">/ Build</span></div>
              <ul className="space-y-5 mb-10 flex-grow">
                {['Custom Shopify Architecture', '1 Month Tech Stewardship', 'Social Media Setup', 'AI Media Generation'].map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 font-light text-sm"><CheckCircle2 size={18} className="text-[#E2B753] flex-shrink-0 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
              <button className="w-full py-4 border border-[#E2B753] text-[#E2B753] font-bold uppercase text-[10px] tracking-widest hover:bg-[#E2B753] hover:text-[#020306] transition-all rounded-sm">Select Decree</button>
            </div>

            <div className="bg-[#0A1128] border-2 border-[#E2B753] p-10 md:p-12 flex flex-col relative transform lg:-translate-y-6 shadow-[0_20px_50px_rgba(226,183,83,0.15)] group rounded-sm">
              <div className="absolute top-0 right-0 bg-[#E2B753] text-[#020306] text-[9px] font-black px-6 py-2 uppercase tracking-widest z-10">Maharaja</div>
              <h3 className="text-2xl md:text-3xl font-['Cinzel',_serif] font-bold mb-3 text-white">The Empire</h3>
              <p className="text-[#E2B753]/90 italic mb-8 text-xs md:text-sm">Absolute market dominance.</p>
              <div className="text-4xl md:text-5xl font-bold text-[#E2B753] mb-10">₹10,999 <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">/ Build</span></div>
              <ul className="space-y-5 mb-10 flex-grow">
                {['Full Bespoke Architecture', 'Vastu Speed Calibration', 'Advanced ROI Meta Ads', 'WhatsApp Conquest Funnels', 'Priority Royal Council'].map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-white font-light text-sm"><CheckCircle2 size={18} className="text-[#E2B753] flex-shrink-0 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#E2B753] text-[#020306] font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all rounded-sm">Ascend to Throne</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUTRAS (FAQ) --- */}
      <section className="py-24 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E2B753] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Chapter VII : Sutras</span>
            <h2 className="text-4xl font-['Cinzel',_serif] font-bold text-white">Wisdom & Logic</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-8 bg-[#020306]/80 border border-white/5 hover:border-[#E2B753]/30 transition-all shadow-lg rounded-sm">
                <h3 className="text-base md:text-lg font-['Cinzel',_serif] font-bold text-[#E2B753] mb-4">{faq.q}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (THE LEGACY) --- */}
      <footer id="contact" className="bg-[#010204] pt-24 md:pt-32 pb-12 text-[#FFFBF0] border-t-2 border-[#E2B753] relative z-10 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="w-16 h-16 border border-[#E2B753] flex items-center justify-center mb-8 mx-auto lg:mx-0 bg-[#020306]">
              <span className="font-['Cinzel',_serif] font-bold text-2xl text-[#E2B753]">S</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-['Cinzel',_serif] font-bold mb-6 text-white leading-tight">Construct <br className="hidden md:block"/> <span className={`${PremiumGoldText} italic`}>Legacy.</span></h2>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 font-light text-sm md:text-base mb-8">Blow the Panchajanya conch. Connect with ShopSaras to commission the grand design of your digital empire.</p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[Globe, Mail, Phone, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-[#E2B753] hover:border-[#E2B753] transition-all"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
            <a href="mailto:contact@shopsaras.com" className="flex flex-col gap-2 group">
              <span className="text-[9px] text-[#E2B753] uppercase tracking-[0.4em] font-bold">The Royal Courier</span>
              <span className="text-xl md:text-3xl font-['Cinzel',_serif] font-bold group-hover:text-[#E2B753] transition-colors break-all">contact@shopsaras.com</span>
            </a>
            <a href="tel:+919587024000" className="flex flex-col gap-2 group">
              <span className="text-[9px] text-[#E2B753] uppercase tracking-[0.4em] font-bold">Direct Royal Line</span>
              <span className="text-xl md:text-3xl font-['Cinzel',_serif] font-bold group-hover:text-[#E2B753] transition-colors">+91 95870 24000</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 mt-16 text-center relative z-10 px-6">
          <p className="text-gray-500 text-[9px] font-bold tracking-[0.4em] uppercase">© {new Date().getFullYear()} ShopSaras Empire. Engineered with Devotion in Rajasthan.</p>
        </div>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}