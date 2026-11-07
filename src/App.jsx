import React, { useState, useEffect } from 'react';
import AdbLabsTitanPage from './AdbLabsTitanPage';
import MemberPortfolio from './components/MemberPortfolio';
import { TEAM_MEMBERS } from './data/teamData';

function parseLocation() {
  if (typeof window === 'undefined') return { view: 'home', code: null };
  const rawPath = window.location.pathname.replace(/\/+$/, '') || '/';
  
  // Match /about/:code or /about/ADB-446-001
  const memberMatch = rawPath.match(/^\/about\/(.+)$/i);
  if (memberMatch) {
    let code = decodeURIComponent(memberMatch[1]).toUpperCase();
    if (/^\d{3}$/.test(code)) {
      code = `ADB-446-${code}`;
    }
    return { view: 'portfolio', code };
  }

  return { view: 'home', code: null };
}

export default function App() {
  const [route, setRoute] = useState(() => parseLocation());

  useEffect(() => {
    const onPopState = () => setRoute(parseLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setRoute(parseLocation());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (route.view === 'portfolio' && route.code) {
    const member = TEAM_MEMBERS.find((m) => m.id.toUpperCase() === route.code.toUpperCase());
    return (
      <MemberPortfolio 
        member={member} 
        onBack={() => navigateTo('/')} 
        onSelectMember={(code) => navigateTo(`/about/${code}`)} 
      />
    );
  }

  return <AdbLabsTitanPage onNavigateToMember={(code) => navigateTo(`/about/${code}`)} />;
}
