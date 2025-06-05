import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Brain, HeartPulse, Apple, Award, Calendar, Check, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data
const modules = [
  {
    id: 1,
    title: 'The Human Body Systems',
    description: 'Learn about the digestive, respiratory, and circulatory systems.',
    category: 'Physical Health',
    subject: 'Science',
    grade: '6-8',
    icon: <HeartPulse className="h-8 w-8 text-primary-600" />,
    progress: 75,
    bgColor: 'bg-primary-50',
  },
  {
    id: 2,
    title: 'Mindfulness & Focus',
    description: 'Techniques to improve concentration and reduce stress.',
    category: 'Mental Wellbeing',
    subject: 'Health',
    grade: '4-12',
    icon: <Brain className="h-8 w-8 text-secondary-600" />,
    progress: 30,
    bgColor: 'bg-secondary-50',
  },
  {
    id: 3,
    title: 'Food Groups & Nutrition',
    description: 'Understanding balanced diets and food components.',
    category: 'Nutrition',
    subject: 'Health & Science',
    grade: '3-5',
    icon: <Apple className="h-8 w-8 text-accent-600" />,
    progress: 100,
    bgColor: 'bg-accent-50',
  },
  {
    id: 4,
    title: 'Digital Wellness',
    description: 'How to maintain a healthy relationship with technology.',
    category: 'Life Skills',
    subject: 'Technology',
    grade: '6-12',
    icon: <BookOpen className="h-8 w-8 text-success-600" />,
    progress: 0,
    bgColor: 'bg-success-50',
  },
];

export const StudentHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredModules = modules.filter(module => 
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Student Dashboard
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <User className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Emily Johnson
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              Grade 7
            </div>
            <div className="mt-2 flex items-center text-sm text-primary-600">
              <Award className="flex-shrink-0 mr-1.5 h-5 w-5 text-primary-500" />
              Earned 12 Badges
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              placeholder="Search modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Your Modules</h3>
        <p className="mt-2 text-sm text-gray-700">
          Continue learning or explore new health and wellness topics.
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredModules.map((module) => (
            <motion.div
              key={module.id}
              className={`${module.bgColor} overflow-hidden rounded-lg shadow`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  {module.icon}
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-primary-800">
                    {module.category}
                  </span>
                </div>
                <Link to={`/student/module/${module.id}`} className="mt-3 block">
                  <p className="text-xl font-semibold text-gray-900">{module.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{module.description}</p>
                </Link>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Progress:</span>
                      <span className="ml-1 font-semibold text-primary-700">{module.progress}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{module.subject}</span>
                      <span className="mx-1">•</span>
                      <span className="text-gray-500">Grades {module.grade}</span>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to={`/student/module/${module.id}`}
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {module.progress === 0 ? 'Start' : module.progress === 100 ? 'Review' : 'Continue'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Achievements</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Your latest accomplishments and badges.</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">Achievement</div>
            <div className="text-sm font-medium text-gray-500">Date Earned</div>
            <div className="text-sm font-medium text-gray-500">Points</div>
          </div>
          <ul className="divide-y divide-gray-200">
            <li>
              <div className="px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <div className="flex items-center text-sm text-gray-900">
                  <Check className="h-5 w-5 text-success-500 mr-2" />
                  <span className="font-medium">Nutrition Expert</span>
                </div>
                <div className="mt-1 text-sm text-gray-700 sm:mt-0">May 10, 2025</div>
                <div className="mt-1 text-sm text-primary-600 font-semibold sm:mt-0">50</div>
              </div>
            </li>
            <li>
              <div className="px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <div className="flex items-center text-sm text-gray-900">
                  <Check className="h-5 w-5 text-success-500 mr-2" />
                  <span className="font-medium">Mindfulness Master</span>
                </div>
                <div className="mt-1 text-sm text-gray-700 sm:mt-0">May 5, 2025</div>
                <div className="mt-1 text-sm text-primary-600 font-semibold sm:mt-0">75</div>
              </div>
            </li>
            <li>
              <div className="px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-4">
                <div className="flex items-center text-sm text-gray-900">
                  <Check className="h-5 w-5 text-success-500 mr-2" />
                  <span className="font-medium">Health Quiz Champion</span>
                </div>
                <div className="mt-1 text-sm text-gray-700 sm:mt-0">April 28, 2025</div>
                <div className="mt-1 text-sm text-primary-600 font-semibold sm:mt-0">100</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};