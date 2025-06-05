import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, Search, Plus, Filter, Trash2, Edit, Save, 
  X, CheckCircle, ArrowRight, List, Grid, Download, BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data
const healthModules = [
  { 
    id: 1, 
    title: 'The Human Body Systems', 
    category: 'Physical Health',
    description: 'Digestive, respiratory, and circulatory systems',
    grade: '6-8',
    subjects: ['Science', 'Biology'],
    standards: ['NGSS.MS-LS1-3', 'NHES.5.8.1'],
    color: 'bg-primary-100 text-primary-800'
  },
  { 
    id: 2, 
    title: 'Mindfulness & Focus', 
    category: 'Mental Wellbeing',
    description: 'Techniques to improve concentration and reduce stress',
    grade: '4-12',
    subjects: ['Health', 'Social Studies'],
    standards: ['NHES.7.8.2', 'CASEL.SA.3'],
    color: 'bg-secondary-100 text-secondary-800'
  },
  { 
    id: 3, 
    title: 'Food Groups & Nutrition', 
    category: 'Nutrition',
    description: 'Understanding balanced diets and food components',
    grade: '3-5',
    subjects: ['Health', 'Science'],
    standards: ['NHES.1.5.1', 'NGSS.5-PS1-3'],
    color: 'bg-accent-100 text-accent-800'
  },
  { 
    id: 4, 
    title: 'Digital Wellness', 
    category: 'Life Skills',
    description: 'Healthy relationship with technology',
    grade: '6-12',
    subjects: ['Technology', 'Health'],
    standards: ['NHES.8.8.1', 'ISTE.2.3'],
    color: 'bg-success-100 text-success-800'
  },
  { 
    id: 5, 
    title: 'Personal Hygiene', 
    category: 'Physical Health',
    description: 'Healthy habits for disease prevention',
    grade: '3-8',
    subjects: ['Health', 'Science'],
    standards: ['NHES.1.5.2', 'NHES.7.5.1'],
    color: 'bg-primary-100 text-primary-800'
  },
  { 
    id: 6, 
    title: 'Emotional Intelligence', 
    category: 'Mental Wellbeing',
    description: 'Recognizing and managing emotions',
    grade: '4-12',
    subjects: ['Health', 'Social Studies', 'Language Arts'],
    standards: ['CASEL.SA.1', 'NHES.4.8.1'],
    color: 'bg-secondary-100 text-secondary-800'
  },
];

const subjects = [
  { id: 'science', name: 'Science' },
  { id: 'math', name: 'Mathematics' },
  { id: 'ela', name: 'English Language Arts' },
  { id: 'ss', name: 'Social Studies' },
  { id: 'pe', name: 'Physical Education' },
  { id: 'art', name: 'Art' },
  { id: 'music', name: 'Music' },
  { id: 'tech', name: 'Technology' },
];

export const CurriculumMapping = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  
  const filteredModules = healthModules.filter(module => 
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.subjects.some(subj => subj.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            Curriculum Mapping
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Integrate health and wellness topics into your existing curriculum
          </p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-3 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Create New Module
          </button>
          <button
            type="button"
            className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Download className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Export Mapping
          </button>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded-lg p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center flex-1">
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search modules, subjects, standards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                Filters
              </button>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <div className="flex border border-gray-300 rounded-md p-1">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md ${
                  viewMode === 'list'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row">
        {/* Subjects sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Subjects</h3>
              <p className="mt-1 text-sm text-gray-500">
                Select a subject to map health modules
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {subjects.map((subject) => (
                <li key={subject.id}>
                  <button
                    onClick={() => setSelectedSubject(subject.id === selectedSubject ? null : subject.id)}
                    className={`w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 ${
                      subject.id === selectedSubject ? 'bg-primary-50' : ''
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                    {subject.id === selectedSubject && (
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Standards
              </button>
            </div>
          </div>
        </div>

        {/* Modules grid/list */}
        <div className="flex-1">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Health & Wellness Modules</h3>
              <p className="mt-1 text-sm text-gray-500">
                Drag and drop modules to map to your curriculum
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredModules.map((module) => (
                  <motion.div
                    key={module.id}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:border-primary-300 transition-all cursor-pointer"
                    onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
                  >
                    <div className={`px-4 py-2 ${module.color}`}>
                      <span className="text-xs font-semibold">{module.category}</span>
                    </div>
                    <div className={`p-4 ${module.id === selectedModule ? 'bg-primary-50' : 'bg-white'}`}>
                      <h4 className="text-md font-semibold text-gray-900">{module.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{module.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Grades {module.grade}</span>
                        <div className="flex space-x-1">
                          {module.subjects.map((subject, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      {module.id === selectedModule && (
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                          <button className="text-primary-600 hover:text-primary-800 text-sm flex items-center">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm flex items-center">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Module
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grade Level
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subjects
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Standards
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredModules.map((module) => (
                      <tr 
                        key={module.id} 
                        className={`${module.id === selectedModule ? 'bg-primary-50' : 'hover:bg-gray-50'} cursor-pointer`}
                        onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{module.title}</div>
                          <div className="text-sm text-gray-500">{module.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${module.color}`}>
                            {module.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {module.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {module.subjects.map((subject, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-800">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {module.standards.join(', ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2 justify-end">
                            <button className="text-primary-600 hover:text-primary-900">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mapping Section */}
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Your Curriculum Map</h3>
              <p className="mt-1 text-sm text-gray-500">
                Connect health modules to subject standards
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Save className="-ml-1 mr-2 h-5 w-5" />
              Save Map
            </button>
          </div>

          <div className="p-6">
            {selectedSubject ? (
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  {subjects.find(s => s.id === selectedSubject)?.name} Curriculum Map
                </h4>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="text-md font-semibold text-gray-900">Unit 1: Introduction to Earth Science</h5>
                        <p className="mt-1 text-sm text-gray-600">Standards: NGSS.MS-ESS1-1, NGSS.MS-ESS1-2</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600">
                        <Plus className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500">Add health module to this unit</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="text-md font-semibold text-gray-900">Unit 2: Weather and Climate</h5>
                        <p className="mt-1 text-sm text-gray-600">Standards: NGSS.MS-ESS2-5, NGSS.MS-ESS2-6</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className={`h-10 w-10 rounded-md flex items-center justify-center bg-primary-100 text-primary-800`}>
                            <BookOpen className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h6 className="text-sm font-medium text-gray-900">The Human Body Systems</h6>
                            <button className="text-gray-400 hover:text-gray-600">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-600">Connection: How climate affects human health and body systems</p>
                          <div className="mt-2 flex items-center">
                            <span className="text-xs font-medium text-primary-800 bg-primary-100 px-2 py-0.5 rounded-full">Physical Health</span>
                            <ArrowRight className="h-3 w-3 mx-2 text-gray-400" />
                            <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded-full">Science</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600">
                        <Plus className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500">Add another health module</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="text-md font-semibold text-gray-900">Unit 3: Ecosystems</h5>
                        <p className="mt-1 text-sm text-gray-600">Standards: NGSS.MS-LS2-1, NGSS.MS-LS2-3</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-accent-50 border border-accent-200 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className={`h-10 w-10 rounded-md flex items-center justify-center bg-accent-100 text-accent-800`}>
                            <BookOpen className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h6 className="text-sm font-medium text-gray-900">Food Groups & Nutrition</h6>
                            <button className="text-gray-400 hover:text-gray-600">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-1 text-xs text-gray-600">Connection: Food chains, energy transfer, and human nutrition</p>
                          <div className="mt-2 flex items-center">
                            <span className="text-xs font-medium text-accent-800 bg-accent-100 px-2 py-0.5 rounded-full">Nutrition</span>
                            <ArrowRight className="h-3 w-3 mx-2 text-gray-400" />
                            <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded-full">Science</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600">
                        <Plus className="h-5 w-5" />
                      </div>
                      <span className="text-sm text-gray-500">Add another health module</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <Plus className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Add New Unit
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No Subject Selected</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Select a subject from the sidebar to begin mapping health modules to your curriculum.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    View Example Map
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};