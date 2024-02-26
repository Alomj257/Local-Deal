import React from 'react';
import RegistrationAnalysis from '../../components/RegistrationAnalysis/RegistrationAnalysis';
import EarningAnalysis from '../../components/EarningAnalysis/EarningAnalysis';
import AnalysisGraph from '../../components/AnalysisGraph/AnalysisGraph';
import RecentBuasiness from '../../components/RecentBusiness/RecentBuasiness';

function DashboardPanel() {
  return (
    <div className="dashboard">
      <RegistrationAnalysis />
      <EarningAnalysis />
      <AnalysisGraph />
      <RecentBuasiness />
    </div>
  )
}

export default DashboardPanel