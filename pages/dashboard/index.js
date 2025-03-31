import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

// Mock data for dashboard
const campaignData = [
  { id: 1, name: 'Summer Collection Launch', status: 'active', impressions: 12450, clicks: 1823, conversions: 342, ctr: 14.6, roi: 320 },
  { id: 2, name: 'Holiday Season Promotion', status: 'scheduled', impressions: 0, clicks: 0, conversions: 0, ctr: 0, roi: 0 },
  { id: 3, name: 'Product Awareness', status: 'completed', impressions: 28750, clicks: 3210, conversions: 578, ctr: 11.2, roi: 280 },
  { id: 4, name: 'Brand Engagement', status: 'active', impressions: 8320, clicks: 945, conversions: 187, ctr: 11.4, roi: 210 }
];

// Chart data
const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    { name: 'Impressions', data: [5200, 7800, 9400, 12000, 15600, 18200, 22400, 25800, 28400, 32000, 35600, 38200] },
    { name: 'Clicks', data: [520, 780, 940, 1200, 1560, 1820, 2240, 2580, 2840, 3200, 3560, 3820] },
    { name: 'Conversions', data: [104, 156, 188, 240, 312, 364, 448, 516, 568, 640, 712, 764] }
  ]
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }
  }, []);

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | AdVance</title>
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#BB86FC]/20 to-[#03DAC5]/10 rounded-full filter blur-3xl -mr-32 -mt-32 opacity-60"></div>
            
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-white">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]">{user?.name || 'User'}</span>
              </h1>
              <p className="text-gray-300 mt-2">Here's what's happening with your campaigns today.</p>
              
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                  className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#BB86FC]/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">Total Impressions</dt>
                        <dd>
                          <div className="text-lg font-medium text-white">49,520</div>
                          <div className="text-xs text-green-400">+12.5% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                  className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#03DAC5]/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-[#03DAC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">Click-Through Rate</dt>
                        <dd>
                          <div className="text-lg font-medium text-white">12.4%</div>
                          <div className="text-xs text-green-400">+3.2% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                  className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#BB86FC]/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">Conversion Rate</dt>
                        <dd>
                          <div className="text-lg font-medium text-white">2.8%</div>
                          <div className="text-xs text-green-400">+0.5% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                  className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#03DAC5]/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-[#03DAC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">ROI</dt>
                        <dd>
                          <div className="text-lg font-medium text-white">285%</div>
                          <div className="text-xs text-green-400">+15% from last month</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {['overview', 'campaigns', 'performance', 'audience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab
                    ? 'border-[#BB86FC] text-[#BB86FC]'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* Performance Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-lg font-medium text-white mb-4">Performance Overview</h2>
            
            <div className="h-80 relative">
              {/* Chart visualization */}
              <div className="absolute inset-0 flex items-end">
                {performanceData.datasets[0].data.map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center group">
                    <div className="relative h-full w-full flex items-end justify-center">
                      {/* Impressions bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${(value / 40000) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.05 }}
                        className="w-3 bg-gradient-to-t from-[#BB86FC]/80 to-[#BB86FC]/40 rounded-t-sm mx-px relative"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {value.toLocaleString()} impressions
                        </div>
                      </motion.div>
                      
                      {/* Clicks bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${(performanceData.datasets[1].data[idx] / 4000) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.05 + 0.2 }}
                        className="w-3 bg-gradient-to-t from-[#03DAC5]/80 to-[#03DAC5]/40 rounded-t-sm mx-px relative"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {performanceData.datasets[1].data[idx].toLocaleString()} clicks
                        </div>
                      </motion.div>
                      
                      {/* Conversions bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${(performanceData.datasets[2].data[idx] / 800) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.05 + 0.4 }}
                        className="w-3 bg-gradient-to-t from-purple-500/80 to-purple-500/40 rounded-t-sm mx-px relative"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {performanceData.datasets[2].data[idx].toLocaleString()} conversions
                        </div>
                      </motion.div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2">{performanceData.labels[idx]}</span>
                  </div>
                ))}
              </div>
              
              {/* Chart grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3, 4].map((_, idx) => (
                  <div key={idx} className="w-full border-b border-gray-700/50 border-dashed flex justify-between">
                    <span className="text-xs text-gray-500 transform -translate-y-1/2 -translate-x-6">
                      {idx === 0 ? '40K' : idx === 1 ? '30K' : idx === 2 ? '20K' : idx === 3 ? '10K' : '0'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center mt-6 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#BB86FC] rounded-sm mr-2"></div>
                <span className="text-sm text-gray-300">Impressions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#03DAC5] rounded-sm mr-2"></div>
                <span className="text-sm text-gray-300">Clicks</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-300">Conversions</span>
              </div>
            </div>
          </motion.div>

          {/* Active Campaigns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-white">Active Campaigns</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm bg-[#BB86FC]/20 text-[#BB86FC] rounded-md border border-[#BB86FC]/30 hover:bg-[#BB86FC]/30 transition-colors"
              >
                Create New Campaign
              </motion.button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Campaign
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Impressions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      CTR
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      ROI
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {campaignData.map((campaign) => (
                    <motion.tr 
                      key={campaign.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: campaign.id * 0.1 }}
                      whileHover={{ backgroundColor: 'rgba(187, 134, 252, 0.05)' }}
                      className="cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{campaign.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${campaign.status === 'active' ? 'bg-green-900/40 text-green-400' : 
                            campaign.status === 'scheduled' ? 'bg-yellow-900/40 text-yellow-400' : 
                            'bg-gray-900/40 text-gray-400'}`}
                        >
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {campaign.impressions.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {campaign.clicks.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {campaign.ctr}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {campaign.roi}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-[#03DAC5] hover:text-[#03DAC5]/80">Edit</a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-lg font-medium text-white mb-4">Quick Actions</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5 flex flex-col items-center text-center"
              >
                <div className="bg-[#BB86FC]/20 rounded-full p-3 mb-4">
                  <svg className="h-6 w-6 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Create New Ad</h3>
                <p className="text-gray-400 text-sm mt-1">Design a new ad from scratch</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5 flex flex-col items-center text-center"
              >
                <div className="bg-[#03DAC5]/20 rounded-full p-3 mb-4">
                  <svg className="h-6 w-6 text-[#03DAC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Browse Templates</h3>
                <p className="text-gray-400 text-sm mt-1">Use pre-designed templates</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5 flex flex-col items-center text-center"
              >
                <div className="bg-[#BB86FC]/20 rounded-full p-3 mb-4">
                  <svg className="h-6 w-6 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">View Reports</h3>
                <p className="text-gray-400 text-sm mt-1">Analyze campaign performance</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                className="bg-black/30 border border-[#BB86FC]/20 rounded-lg p-5 flex flex-col items-center text-center"
              >
                <div className="bg-[#03DAC5]/20 rounded-full p-3 mb-4">
                  <svg className="h-6 w-6 text-[#03DAC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Account Settings</h3>
                <p className="text-gray-400 text-sm mt-1">Manage your preferences</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
