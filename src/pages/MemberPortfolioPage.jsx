import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MemberPortfolio from '../components/MemberPortfolio';
import { TEAM_MEMBERS } from '../data/teamData';

export default function MemberPortfolioPage() {
  const { memberId } = useParams();
  const navigate = useNavigate();

  let code = (memberId || '').toUpperCase();
  if (/^\d{3}$/.test(code)) {
    code = `ADB-446-${code}`;
  }

  const member = TEAM_MEMBERS.find((m) => m.id.toUpperCase() === code.toUpperCase()) || TEAM_MEMBERS[0];

  return (
    <MemberPortfolio
      employeeCode={code}
      member={member}
      onBack={() => navigate('/about')}
      onSelectMember={(newCode) => navigate(`/about/${newCode}`)}
    />
  );
}
