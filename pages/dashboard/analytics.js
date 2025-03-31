import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

// Mock data for analytics
const analyticsData = {
  overview: {
    impressions: 124750,
    clicks: 15320,
    conversions: 2845,
    ctr: 12.28,
    conversionRate: 18.57,
    roi: 285
  },
  campaigns: [
    { id: 1, name: 'Summer Collection Launch', impressions: 42450, clicks: 6823, conversions: 1242, ctr: 16.1, roi: 320 },
    { id: 2, name: 'Product Awareness', impressions: 28750, clicks: 3210, conversions: 578, ctr: 11.2, roi: 280 },
    { id: 3, name: 'Brand Engagement', impressions: 18320, clicks: 2145, conversions: 387, ctr: 11.7, roi: 210 },
    { id: 4, name: 'Holiday Season Promotion', impressions: 35230, clicks: 3142, conversions: 638, ctr: 8.9, roi: 245 }
  ],
  timeData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    impressions: [12450, 15780, 18940, 22000, 25600, 28200, 32400, 35800, 38400, 42000, 45600, 48200],
    clicks: [1520, 1780, 1940, 2200, 2560, 2820, 3240, 3580, 3840, 4200, 4560, 4820],
    conversions: [304, 356, 388, 440, 512, 564, 648, 716, 768, 840, 912, 964]
  },
  demographics: {
    age: [
      { group: '18-24', percentage: 15 },
      { group: '25-34', percentage: 32 },
      { group: '35-44', percentage: 28 },
      { group: '45-54', percentage: 18 },
      { group: '55+', percentage: 7 }
    ],
    gender: [
      { group: 'Male', percentage: 48 },
      { group: 'Female', percentage: 51 },
      { group: 'Other', percentage: 1 }
    ],
    devices: [
      { name: 'Mobile', percentage: 64 },
      { name: 'Desktop', percentage: 28 },
      { name: 'Tablet', percentage: 8 }
    ]
  }
};

export default function Analytics() {
  const [dateRange, setDateRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('impressions');

  return (
    <DashboardLayout>
      <Head>
        <title>Analytics | AdVance</title>
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
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
                <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
                <p className="text-gray-300 mt-2">Comprehensive insights into your campaign performance</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                {['7d', '30d', '90d', 'YTD', 'All'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      dateRange === range
                        ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                        : 'bg-black/20 text-gray-400 border border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
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
                    <div className="text-lg font-medium text-white">{analyticsData.overview.impressions.toLocaleString()}</div>
                    <div className="text-xs text-green-400">+12.5% from last period</div>
                  </dd>
                </dl>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
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
                    <div className="text-lg font-medium text-white">{analyticsData.overview.ctr}%</div>
                    <div className="text-xs text-green-400">+3.2% from last period</div>
                  </dd>
                </dl>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-[#BB86FC]/20 rounded-md p-3">
                <svg className="h-6 w-6 text-[#BB86FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate">Return on Investment</dt>
                  <dd>
                    <div className="text-lg font-medium text-white">{analyticsData.overview.roi}%</div>
                    <div className="text-xs text-green-400">+15.3% from last period</div>
                  </dd>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-lg font-medium text-white">Performance Trends</h2>
            
            <div className="mt-3 md:mt-0 flex items-center space-x-2">
              {['impressions', 'clicks', 'conversions'].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedMetric === metric
                      ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                      : 'bg-black/20 text-gray-400 border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-80 relative">
            {/* Chart visualization */}
            <div className="absolute inset-0 flex items-end">
              {analyticsData.timeData.labels.map((label, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center group">
                  <div className="relative h-full w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ 
                        height: `${(analyticsData.timeData[selectedMetric][idx] / Math.max(...analyticsData.timeData[selectedMetric])) * 100}%` 
                      }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                      className={`w-4 ${
                        selectedMetric === 'impressions' 
                          ? 'bg-gradient-to-t from-[#BB86FC]/80 to-[#BB86FC]/40' 
                          : selectedMetric === 'clicks'
                            ? 'bg-gradient-to-t from-[#03DAC5]/80 to-[#03DAC5]/40'
                            : 'bg-gradient-to-t from-purple-500/80 to-purple-500/40'
                      } rounded-t-sm mx-px relative`}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {analyticsData.timeData[selectedMetric][idx].toLocaleString()} {selectedMetric}
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs text-gray-400 mt-2">{label}</span>
                </div>
              ))}
            </div>
            
            {/* Chart grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="w-full border-b border-gray-700/50 border-dashed flex justify-between">
                  <span className="text-xs text-gray-500 transform -translate-y-1/2 -translate-x-6">
                    {Math.round((Math.max(...analyticsData.timeData[selectedMetric]) / 4) * (4 - idx)).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Campaign Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 mb-8"
        >
          <h2 className="text-lg font-medium text-white mb-6">Campaign Performance</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Campaign
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
                    Conversions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    ROI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {analyticsData.campaigns.map((campaign) => (
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
                      {campaign.conversions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {campaign.roi}%
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-lg font-medium text-white mb-6">Audience Demographics</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Age Distribution</h3>
                <div className="space-y-2">
                  {analyticsData.demographics.age.map((item) => (
                    <div key={item.group} className="flex items-center">
                      <span className="text-sm text-gray-300 w-12">{item.group}</span>
                      <div className="flex-1 mx-2">
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                          />
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 w-8">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Gender Distribution</h3>
                <div className="space-y-2">
                  {analyticsData.demographics.gender.map((item) => (
                    <div key={item.group} className="flex items-center">
                      <span className="text-sm text-gray-300 w-16">{item.group}</span>
                      <div className="flex-1 mx-2">
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                          />
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 w-8">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-lg font-medium text-white mb-6">Device Distribution</h2>
            
            <div className="flex items-center justify-center h-64">
              <div className="w-full max-w-md">
                {analyticsData.demographics.devices.map((device, idx) => (
                  <div key={device.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{device.name}</span>
                      <span className="text-sm text-gray-300">{device.percentage}%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${device.percentage}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className={`h-full ${
                          idx === 0 
                            ? 'bg-[#BB86FC]' 
                            : idx === 1 
                              ? 'bg-[#03DAC5]' 
                              : 'bg-purple-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-4 space-x-6">
              {analyticsData.demographics.devices.map((device, idx) => (
                <div key={device.name} className="flex items-center">
                  <div 
                    className={`w-3 h-3 rounded-sm mr-2 ${
                      idx === 0 
                        ? 'bg-[#BB86FC]' 
                        : idx === 1 
                          ? 'bg-[#03DAC5]' 
                          : 'bg-purple-500'
                    }`}
                  ></div>
                  <span className="text-sm text-gray-300">{device.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}