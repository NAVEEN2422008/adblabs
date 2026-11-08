import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MemberPortfolio from '../components/MemberPortfolio';
import { TEAM_MEMBERS } from '../data/teamData';

export default function MemberPortfolioPage() {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const raw = (memberId || '').trim();
  let code = raw.toUpperCase();

  // If 1 to 3 digits like "1", "01", "001"
  if (/^\d{1,3}$/.test(code)) {
    code = `ADB-446-${code.padStart(3, '0')}`;
  }

  // Find by ID or partial slug
  const member = TEAM_MEMBERS.find((m) => {
    const idMatch = m.id.toUpperCase() === code;
    const nameSlug = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const rawLower = raw.toLowerCase();
    const slugMatch = nameSlug.includes(rawLower) || rawLower.includes(nameSlug);
    return idMatch || slugMatch;
  }) || TEAM_MEMBERS[0];

  // Scroll to top on member change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [memberId]);

  return (
    <MemberPortfolio
      employeeCode={member.id}
      member={member}
      onBack={() => navigate('/about')}
      onSelectMember={(newCode) => navigate(`/about/${newCode}`)}
    />
  );
}
