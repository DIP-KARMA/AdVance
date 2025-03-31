import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <DashboardLayout>
      <Head>
        <title>Settings | AdVance</title>
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
            
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-white">Account Settings</h1>
              <p className="text-gray-300 mt-2">Manage your account preferences and settings</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl overflow-hidden">
              <nav className="flex flex-col p-2">
                {[
                  { id: 'profile', name: 'Profile', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )},
                  { id: 'security', name: 'Security', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )},
                  { id: 'billing', name: 'Billing', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )},
                  { id: 'team', name: 'Team', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )},
                  { id: 'notifications', name: 'Notifications', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  )},
                  { id: 'integrations', name: 'Integrations', icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  )}
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      activeTab === item.id
                        ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    <span className={activeTab === item.id ? 'text-[#BB86FC]' : 'text-gray-400'}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-medium text-white mb-6">Profile Settings</h2>
                  
                  <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] p-[2px]">
                        <img
                          className="h-full w-full rounded-full object-cover bg-black"
                          src="/avatar.png"
                          alt="Profile"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-[#BB86FC] rounded-full p-1.5 border-2 border-black">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <h3 className="text-lg font-medium text-white">Test User</h3>
                      <p className="text-gray-400">Premium User</p>
                      <p className="text-gray-400 text-sm mt-1">Member since January 2025</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          defaultValue="Test"
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          defaultValue="User"
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          defaultValue="test@advance.ai"
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows="4"
                        defaultValue="Marketing professional with 5+ years of experience in digital advertising."
                        className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg font-medium button-3d text-white"
                      >
                        Save Changes
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-medium text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                          />
                        </div>
                        
                        <div className="flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg font-medium button-3d text-white"
                          >
                            Update Password
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                        <div>
                          <p className="text-white font-medium">Protect your account with 2FA</p>
                          <p className="text-gray-400 text-sm mt-1">Add an extra layer of security to your account</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3 text-sm text-gray-400">Off</span>
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-gray-700 focus:outline-none">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-gray-400 transition-transform"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Sessions</h3>
                      <div className="border border-gray-800 rounded-lg overflow-hidden">
                        <div className="p-4 bg-black/30 flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Current Session</p>
                            <p className="text-gray-400 text-sm mt-1">Windows • Chrome • New York, USA</p>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900/40 text-green-400">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                              Active Now
                            </span>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-800 p-4 bg-black/20 flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Previous Session</p>
                            <p className="text-gray-400 text-sm mt-1">Mac • Safari • New York, USA</p>
                          </div>
                          <div>
                            <button className="text-[#BB86FC] text-sm hover:text-[#03DAC5]">
                              Revoke
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Billing Settings */}
              {activeTab === 'billing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-medium text-white mb-6">Billing & Subscription</h2>
                  
                  <div className="mb-8 p-4 border border-[#BB86FC]/30 rounded-lg bg-[#BB86FC]/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className="text-lg font-medium text-white">Premium Plan</span>
                          <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-[#BB86FC]/30 text-[#BB86FC]">
                            Active
                          </span>
                        </div>
                        <p className="text-gray-300 mt-1">$49.99/month • Renews on April 30, 2025</p>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 text-sm rounded-lg font-medium bg-black/30 text-white border border-gray-700"
                        >
                          Change Plan
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 text-sm rounded-lg font-medium bg-black/30 text-red-400 border border-red-900/30"
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-white mb-4">Payment Method</h3>
                    <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-white/10 p-2 rounded mr-4">
                          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">•••• •••• •••• 4242</p>
                          <p className="text-gray-400 text-sm">Expires 12/2026</p>
                        </div>
                      </div>
                      <button className="text-[#BB86FC] text-sm hover:text-[#03DAC5]">
                        Edit
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Billing History</h3>
                    <div className="border border-gray-800 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-800">
                        <thead className="bg-black/30">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-black/20 divide-y divide-gray-800">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              March 31, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              $49.99
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-400">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-[#03DAC5] hover:text-[#03DAC5]/80">
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              February 28, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              $49.99
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-400">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-[#03DAC5] hover:text-[#03DAC5]/80">
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              January 31, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              $49.99
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-400">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-[#03DAC5] hover:text-[#03DAC5]/80">
                                Download
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Team Settings */}
              {activeTab === 'team' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-white">Team Management</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 text-sm rounded-lg font-medium button-3d text-white"
                    >
                      Invite Member
                    </motion.button>
                  </div>
                  
                  <div className="mb-8">
                    <div className="border border-gray-800 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-800">
                        <thead className="bg-black/30">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              User
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-black/20 divide-y divide-gray-800">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] p-[2px]">
                                  <img className="h-full w-full rounded-full object-cover bg-black" src="/avatar.png" alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-white">Test User</div>
                                  <div className="text-sm text-gray-400">test@advance.ai</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">Admin</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-400">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-[#03DAC5] hover:text-[#03DAC5]/80 mr-3">
                                Edit
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] p-[2px]">
                                  <img className="h-full w-full rounded-full object-cover bg-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-white">Jane Smith</div>
                                  <div className="text-sm text-gray-400">jane@advance.ai</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">Editor</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/40 text-green-400">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-[#03DAC5] hover:text-[#03DAC5]/80 mr-3">
                                Edit
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] p-[2px]">
                                  <img className="h-full w-full rounded-full object-cover bg-black" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-white">Michael Johnson</div>
                                  <div className="text-sm text-gray-400">michael@advance.ai</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-300">Viewer</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/40 text-yellow-400">
                                Pending
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-[#03DAC5] hover:text-[#03DAC5]/80 mr-3">
                                Edit
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Permissions</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Admin</p>
                          <p className="text-gray-400 text-sm mt-1">Full access to all features and settings</p>
                        </div>
                        <div>
                          <span className="px-2 py-1 text-xs rounded-full bg-[#BB86FC]/20 text-[#BB86FC]">
                            1 User
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Editor</p>
                          <p className="text-gray-400 text-sm mt-1">Can create and edit campaigns, but cannot modify account settings</p>
                        </div>
                        <div>
                          <span className="px-2 py-1 text-xs rounded-full bg-[#BB86FC]/20 text-[#BB86FC]">
                            1 User
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Viewer</p>
                          <p className="text-gray-400 text-sm mt-1">Can view campaigns and analytics, but cannot make changes</p>
                        </div>
                        <div>
                          <span className="px-2 py-1 text-xs rounded-full bg-[#BB86FC]/20 text-[#BB86FC]">
                            1 User
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-medium text-white mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                          <div>
                            <p className="text-white font-medium">Campaign Updates</p>
                            <p className="text-gray-400 text-sm mt-1">Receive updates about your campaign performance</p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-400">On</span>
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-[#BB86FC]/30 focus:outline-none">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-[#BB86FC] transition-transform translate-x-5"></span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                          <div>
                            <p className="text-white font-medium">Billing Notifications</p>
                            <p className="text-gray-400 text-sm mt-1">Receive notifications about billing and payments</p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-400">On</span>
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-[#BB86FC]/30 focus:outline-none">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-[#BB86FC] transition-transform translate-x-5"></span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                          <div>
                            <p className="text-white font-medium">Team Activity</p>
                            <p className="text-gray-400 text-sm mt-1">Receive notifications about team member actions</p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-400">Off</span>
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-gray-700 focus:outline-none">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-gray-400 transition-transform"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">In-App Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                          <div>
                            <p className="text-white font-medium">Performance Alerts</p>
                            <p className="text-gray-400 text-sm mt-1">Receive alerts when campaign performance changes significantly</p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-400">On</span>
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-[#BB86FC]/30 focus:outline-none">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-[#BB86FC] transition-transform translate-x-5"></span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-black/30">
                          <div>
                            <p className="text-white font-medium">System Updates</p>
                            <p className="text-gray-400 text-sm mt-1">Receive notifications about platform updates and new features</p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-sm text-gray-400">On</span>
                            <button className="relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent bg-[#BB86FC]/30 focus:outline-none">
                              <span className="inline-block h-4 w-4 transform rounded-full bg-[#BB86FC] transition-transform translate-x-5"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg font-medium button-3d text-white"
                      >
                        Save Preferences
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Integrations Settings */}
              {activeTab === 'integrations' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-white">Integrations & API</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 text-sm rounded-lg font-medium button-3d text-white"
                    >
                      Add Integration
                    </motion.button>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-white mb-4">Connected Platforms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/10 p-2 rounded mr-4">
                            <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Facebook</p>
                            <p className="text-gray-400 text-sm">Connected</p>
                          </div>
                        </div>
                        <button className="text-red-400 text-sm hover:text-red-300">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/10 p-2 rounded mr-4">
                            <svg className="h-6 w-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-1.38-.898.165-.42.359-1.065.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Instagram</p>
                            <p className="text-gray-400 text-sm">Connected</p>
                          </div>
                        </div>
                        <button className="text-red-400 text-sm hover:text-red-300">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/10 p-2 rounded mr-4">
                            <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">YouTube</p>
                            <p className="text-gray-400 text-sm">Connected</p>
                          </div>
                        </div>
                        <button className="text-red-400 text-sm hover:text-red-300">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="p-4 border border-gray-800 rounded-lg bg-black/30 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-white/10 p-2 rounded mr-4">
                            <svg className="h-6 w-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Twitter</p>
                            <p className="text-gray-400 text-sm">Not Connected</p>
                          </div>
                        </div>
                        <button className="text-[#03DAC5] text-sm hover:text-[#03DAC5]/80">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-white mb-4">API Keys</h3>
                    <div className="p-4 border border-gray-800 rounded-lg bg-black/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-medium">Production API Key</p>
                          <p className="text-gray-400 text-sm mt-1">Use this key for your production environment</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 text-sm rounded-lg font-medium bg-black/30 text-white border border-gray-700"
                        >
                          Generate New Key
                        </motion.button>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="text"
                          value="••••••••••••••••••••••••••••••"
                          readOnly
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none"
                        />
                        <button className="ml-2 p-2 bg-black/30 border border-gray-800 rounded-md text-gray-400 hover:text-white">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Webhooks</h3>
                    <div className="p-4 border border-gray-800 rounded-lg bg-black/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-medium">Webhook URL</p>
                          <p className="text-gray-400 text-sm mt-1">Receive real-time updates about campaign events</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <input
                          type="text"
                          placeholder="https://your-app.com/webhooks/advance"
                          className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="campaign_created"
                            type="checkbox"
                            className="h-4 w-4 text-[#BB86FC] focus:ring-[#03DAC5] border-gray-600 rounded bg-black/40"
                          />
                          <label htmlFor="campaign_created" className="ml-2 block text-sm text-gray-300">
                            Campaign Created
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="campaign_updated"
                            type="checkbox"
                            className="h-4 w-4 text-[#BB86FC] focus:ring-[#03DAC5] border-gray-600 rounded bg-black/40"
                          />
                          <label htmlFor="campaign_updated" className="ml-2 block text-sm text-gray-300">
                            Campaign Updated
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="campaign_completed"
                            type="checkbox"
                            className="h-4 w-4 text-[#BB86FC] focus:ring-[#03DAC5] border-gray-600 rounded bg-black/40"
                          />
                          <label htmlFor="campaign_completed" className="ml-2 block text-sm text-gray-300">
                            Campaign Completed
                          </label>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-lg font-medium button-3d text-white"
                        >
                          Save Webhook
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}