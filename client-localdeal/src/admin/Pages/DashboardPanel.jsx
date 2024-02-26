import React from 'react';
import RegistrationAnalysis from '../../components/RegistrationAnalysis/RegistrationAnalysis';
import EarningAnalysis from '../../components/EarningAnalysis/EarningAnalysis';
import AnalysisGraph from '../../components/AnalysisGraph/AnalysisGraph';

function DashboardPanel() {
  return (
    <div className="dashboard">
      <RegistrationAnalysis />
      <EarningAnalysis />
      <AnalysisGraph />
    </div>
  )
}

export default DashboardPanel