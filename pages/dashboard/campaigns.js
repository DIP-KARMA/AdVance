import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

// Mock data for campaigns
const campaignData = [
  { 
    id: 1, 
    name: 'Summer Collection Launch', 
    status: 'active', 
    platform: 'Instagram, Facebook', 
    budget: '$2,500', 
    spent: '$1,245', 
    impressions: 12450, 
    clicks: 1823, 
    conversions: 342, 
    ctr: 14.6, 
    roi: 320,
    startDate: '2025-03-15',
    endDate: '2025-04-15',
    thumbnail: '/campaign-1.jpg'
  },
  { 
    id: 2, 
    name: 'Holiday Season Promotion', 
    status: 'scheduled', 
    platform: 'Facebook, Google', 
    budget: '$3,000', 
    spent: '$0', 
    impressions: 0, 
    clicks: 0, 
    conversions: 0, 
    ctr: 0, 
    roi: 0,
    startDate: '2025-04-15',
    endDate: '2025-05-15',
    thumbnail: '/campaign-2.jpg'
  },
  { 
    id: 3, 
    name: 'Product Awareness', 
    status: 'completed', 
    platform: 'YouTube, TikTok', 
    budget: '$5,000', 
    spent: '$5,000', 
    impressions: 28750, 
    clicks: 3210, 
    conversions: 578, 
    ctr: 11.2, 
    roi: 280,
    startDate: '2025-02-01',
    endDate: '2025-03-01',
    thumbnail: '/campaign-3.jpg'
  },
  { 
    id: 4, 
    name: 'Brand Engagement', 
    status: 'active', 
    platform: 'Instagram, TikTok', 
    budget: '$1,800', 
    spent: '$950', 
    impressions: 8320, 
    clicks: 945, 
    conversions: 187, 
    ctr: 11.4, 
    roi: 210,
    startDate: '2025-03-10',
    endDate: '2025-04-10',
    thumbnail: '/campaign-4.jpg'
  },
  { 
    id: 5, 
    name: 'New Product Launch', 
    status: 'draft', 
    platform: 'All Platforms', 
    budget: '$4,200', 
    spent: '$0', 
    impressions: 0, 
    clicks: 0, 
    conversions: 0, 
    ctr: 0, 
    roi: 0,
    startDate: '',
    endDate: '',
    thumbnail: '/campaign-5.jpg'
  }
];

export default function Campaigns() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Filter campaigns based on status and search query
  const filteredCampaigns = campaignData.filter(campaign => {
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <DashboardLayout>
      <Head>
        <title>My Campaigns | AdVance</title>
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#BB86FC]/20 to-[#03DAC5]/10 rounded-full filter blur-3xl -mr-32 -mt-32 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">My Campaigns</h1>
                <p className="text-gray-300 mt-2">Manage and monitor all your advertising campaigns</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-3d px-4 py-2 rounded-lg text-white font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Create New Campaign
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and search */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            {['all', 'active', 'scheduled', 'completed', 'draft'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 text-sm rounded-full ${
                  filterStatus === status
                    ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                    : 'bg-black/20 text-gray-400 border border-gray-800 hover:border-gray-700'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
            />
          </div>
        </div>

        {/* Campaign grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCampaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: campaign.id * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
              className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedCampaign(campaign)}
            >
              <div className="h-40 bg-gradient-to-r from-purple-900/40 to-blue-900/40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full 
                    ${campaign.status === 'active' ? 'bg-green-900/70 text-green-400' : 
                      campaign.status === 'scheduled' ? 'bg-yellow-900/70 text-yellow-400' : 
                      campaign.status === 'draft' ? 'bg-gray-900/70 text-gray-400' :
                      'bg-blue-900/70 text-blue-400'}`}
                  >
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2">{campaign.name}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {campaign.startDate ? (
                    <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
                  ) : (
                    <span>Not scheduled</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm">
                    <span className="text-gray-400">Platform:</span>
                    <span className="ml-1 text-white">{campaign.platform}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm">
                    <span className="text-gray-400">Budget:</span>
                    <span className="ml-1 text-white">{campaign.budget}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Spent:</span>
                    <span className="ml-1 text-white">{campaign.spent}</span>
                  </div>
                </div>
                
                {campaign.status !== 'draft' && campaign.status !== 'scheduled' && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{Math.floor((parseFloat(campaign.spent.replace('$', '')) / parseFloat(campaign.budget.replace('$', ''))) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                        style={{ width: `${Math.floor((parseFloat(campaign.spent.replace('$', '')) / parseFloat(campaign.budget.replace('$', ''))) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex justify-between">
                  <button className="text-[#03DAC5] text-sm hover:text-[#03DAC5]/80">
                    View Details
                  </button>
                  <button className="text-gray-400 text-sm hover:text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Add new campaign card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
            className="border-2 border-dashed border-gray-700 rounded-xl h-full min-h-[320px] flex flex-col items-center justify-center cursor-pointer hover:border-[#BB86FC]/50 transition-colors"
          >
            <div className="bg-[#BB86FC]/20 rounded-full p-4 mb-4">
              <svg className="h-8 w-8 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-lg font-medium text-white">Create New Campaign</p>
            <p className="text-sm text-gray-400 mt-2 text-center max-w-[200px]">Start a new advertising campaign from scratch</p>
          </motion.div>
        </div>
        
        {/* Campaign performance summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 mb-8"
        >
          <h2 className="text-lg font-medium text-white mb-4">Campaign Performance Summary</h2>
          
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
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {campaignData.filter(c => c.status !== 'draft').map((campaign) => (
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
                          'bg-blue-900/40 text-blue-400'}`}
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
                      <button className="text-[#03DAC5] hover:text-[#03DAC5]/80 mr-4">Edit</button>
                      <button className="text-gray-400 hover:text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
