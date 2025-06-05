import { Link } from 'react-router-dom';
import { Users, BookOpen, LineChart, Settings, PlusCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data
const classes = [
  { id: 1, name: 'Science 7A', students: 28, modules: 12, progress: 68 },
  { id: 2, name: 'Health 8B', students: 24, modules: 8, progress: 75 },
  { id: 3, name: 'Biology 9C', students: 26, modules: 15, progress: 42 },
  { id: 4, name: 'Wellness 6A', students: 30, modules: 10, progress: 89 },
];

const recentActivities = [
  { id: 1, type: 'Module Assignment', description: 'Assigned "Nutrition Basics" to Health 8B', time: '2 hours ago' },
  { id: 2, type: 'Student Progress', description: 'Emma Johnson completed "Mindfulness" module', time: '3 hours ago' },
  { id: 3, type: 'Class Update', description: 'Added 2 new students to Biology 9C', time: '1 day ago' },
  { id: 4, type: 'Curriculum Mapping', description: 'Connected "Body Systems" to Science standards', time: '2 days ago' },
];

export const TeacherHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Teacher Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back, Mr. Anderson! Here's an overview of your classes and their progress.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link
            to="/teacher/curriculum"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <BookOpen className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Curriculum Mapping
          </Link>
          <Link
            to="/teacher/dashboard"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <LineChart className="-ml-1 mr-2 h-5 w-5" />
            Analytics
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div 
          className="bg-white overflow-hidden shadow rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">108</div>
                  </dd>
                </dl>
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
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Modules</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">45</div>
                  </dd>
                </dl>
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
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <LineChart className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Average Completion</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">68%</div>
                  </dd>
                </dl>
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
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Settings className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Classes</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">4</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Classes */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Your Classes</h3>
                <p className="mt-1 text-sm text-gray-500">Manage your classes and monitor progress</p>
              </div>
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <PlusCircle className="h-4 w-4 mr-1" />
                  Add Class
                </button>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 pr-2 py-1.5 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search classes"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {classes.map((classItem) => (
                <div key={classItem.id} className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-900">{classItem.name}</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {classItem.progress}% Complete
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Students:</span>{' '}
                      <span className="font-medium text-gray-900">{classItem.students}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Modules:</span>{' '}
                      <span className="font-medium text-gray-900">{classItem.modules}</span>
                    </div>
                    <div className="text-right">
                      <Link to="#" className="text-primary-600 hover:text-primary-900">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${classItem.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
              <p className="mt-1 text-sm text-gray-500">Your latest actions and updates</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="bg-white px-4 py-3 shadow-sm rounded-md border border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500">{activity.type}</span>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-900">{activity.description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Link
                  to="#"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  View All Activity
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-primary-50 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-primary-900">Quick Tips</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-800">1</span>
                  </div>
                </div>
                <p className="ml-3 text-sm text-primary-700">
                  Use the curriculum mapping tool to align health modules with your subject standards.
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-800">2</span>
                  </div>
                </div>
                <p className="ml-3 text-sm text-primary-700">
                  Monitor student progress and engagement through the analytics dashboard.
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-800">3</span>
                  </div>
                </div>
                <p className="ml-3 text-sm text-primary-700">
                  Create class discussions to enhance collaborative learning around health topics.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};