import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, BarChart2, PieChart, LineChart, Users, 
  Calendar, Download, Filter, ArrowDown, ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

export const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [dateRange, setDateRange] = useState('month');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          to="/teacher"
          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <ChevronLeft className="mr-1 h-5 w-5" />
          Back to Teacher Home
        </Link>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Analytics Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Monitor student progress, engagement, and health outcomes
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Download className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Export Report
          </button>
        </div>
      </div>

      <div className="mt-4 bg-white p-4 shadow-sm rounded-lg">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="class-select" className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <select
                id="class-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                <option value="all">All Classes</option>
                <option value="science-7a">Science 7A</option>
                <option value="health-8b">Health 8B</option>
                <option value="biology-9c">Biology 9C</option>
                <option value="wellness-6a">Wellness 6A</option>
              </select>
            </div>
            <div>
              <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                Time Period
              </label>
              <select
                id="date-range"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div 
          className="bg-white overflow-hidden shadow rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Active Students
                  </dt>
                  <dd>
                    <div className="text-lg font-semibold text-gray-900">98</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 flex items-center">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>8% from last period</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white overflow-hidden shadow rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-secondary-100 rounded-md p-3">
                <BarChart2 className="h-6 w-6 text-secondary-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Avg. Engagement Rate
                  </dt>
                  <dd>
                    <div className="text-lg font-semibold text-gray-900">76%</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 flex items-center">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>12% from last period</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white overflow-hidden shadow rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-accent-100 rounded-md p-3">
                <LineChart className="h-6 w-6 text-accent-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Completed Modules
                  </dt>
                  <dd>
                    <div className="text-lg font-semibold text-gray-900">215</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-red-600 flex items-center">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>3% from last period</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white overflow-hidden shadow rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-success-100 rounded-md p-3">
                <Calendar className="h-6 w-6 text-success-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Avg. Time Spent
                  </dt>
                  <dd>
                    <div className="text-lg font-semibold text-gray-900">42 min</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 flex items-center">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>5% from last period</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Charts */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Module Completion by Category</h3>
            <div className="flex items-center space-x-2">
              <span className="inline-block h-3 w-3 rounded-full bg-primary-500"></span>
              <span className="text-xs text-gray-500">Physical Health</span>
              <span className="inline-block h-3 w-3 rounded-full bg-secondary-500"></span>
              <span className="text-xs text-gray-500">Mental Wellbeing</span>
              <span className="inline-block h-3 w-3 rounded-full bg-accent-500"></span>
              <span className="text-xs text-gray-500">Nutrition</span>
              <span className="inline-block h-3 w-3 rounded-full bg-success-500"></span>
              <span className="text-xs text-gray-500">Life Skills</span>
            </div>
          </div>
          <div className="mt-6 h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-sm">Bar chart visualization would appear here</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Student Engagement Over Time</h3>
            <div className="flex items-center space-x-2">
              <span className="inline-block h-3 w-3 rounded-full bg-primary-500"></span>
              <span className="text-xs text-gray-500">Active Users</span>
              <span className="inline-block h-3 w-3 rounded-full bg-secondary-500"></span>
              <span className="text-xs text-gray-500">Completion Rate</span>
            </div>
          </div>
          <div className="mt-6 h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-sm">Line chart visualization would appear here</p>
          </div>
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Health Topic Distribution</h3>
          <div className="mt-6 h-60 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-sm">Pie chart visualization would appear here</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Top Performing Students</h3>
          <div className="mt-6">
            <div className="overflow-hidden shadow-sm border border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Student
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Class
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Modules Completed
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Avg. Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emily Johnson</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Science 7A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Michael Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Health 8B</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">91%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jessica Wilson</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Biology 9C</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">89%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">David Lee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wellness 6A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">87%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};