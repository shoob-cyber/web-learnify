import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Play, BookOpen, CheckCircle, Clock, Award, 
  HeartPulse, Brain, Apple, Lightbulb, CheckSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data - in a real app this would come from an API
const moduleData = {
  1: {
    id: 1,
    title: 'The Human Body Systems',
    description: 'Learn about the digestive, respiratory, and circulatory systems and how they work together to keep you healthy.',
    category: 'Physical Health',
    subject: 'Science',
    grade: '6-8',
    icon: <HeartPulse className="h-8 w-8 text-primary-600" />,
    progress: 75,
    bgColor: 'bg-primary-50',
    duration: '45 minutes',
    topics: [
      { id: 1, title: 'Introduction to Body Systems', completed: true, time: '5 min' },
      { id: 2, title: 'The Digestive System', completed: true, time: '10 min' },
      { id: 3, title: 'The Respiratory System', completed: true, time: '10 min' },
      { id: 4, title: 'The Circulatory System', completed: false, time: '10 min' },
      { id: 5, title: 'Systems Working Together', completed: false, time: '8 min' },
      { id: 6, title: 'Final Quiz', completed: false, time: '2 min' },
    ],
    relatedSubjects: ['Biology', 'Health', 'Physical Education'],
    connections: [
      { subject: 'Mathematics', description: 'Calculate heart rates and breathing rates.' },
      { subject: 'Physical Education', description: 'Understand how exercise affects body systems.' },
      { subject: 'Language Arts', description: 'Write explanatory texts about body systems.' },
    ]
  },
  2: {
    id: 2,
    title: 'Mindfulness & Focus',
    description: 'Techniques to improve concentration and reduce stress that you can use in school and everyday life.',
    category: 'Mental Wellbeing',
    subject: 'Health',
    grade: '4-12',
    icon: <Brain className="h-8 w-8 text-secondary-600" />,
    progress: 30,
    bgColor: 'bg-secondary-50',
    duration: '30 minutes',
    topics: [
      { id: 1, title: 'What is Mindfulness?', completed: true, time: '5 min' },
      { id: 2, title: 'Breathing Techniques', completed: true, time: '5 min' },
      { id: 3, title: 'Focus Exercises', completed: false, time: '8 min' },
      { id: 4, title: 'Mindfulness in Daily Life', completed: false, time: '7 min' },
      { id: 5, title: 'Final Practice', completed: false, time: '5 min' },
    ],
    relatedSubjects: ['Psychology', 'Health', 'Social Studies'],
    connections: [
      { subject: 'History', description: 'Origins of mindfulness practices across cultures.' },
      { subject: 'Science', description: 'How the brain responds to mindfulness practices.' },
      { subject: 'Physical Education', description: 'Mindfulness during physical activity.' },
    ]
  },
  3: {
    id: 3,
    title: 'Food Groups & Nutrition',
    description: 'Understanding balanced diets and food components to make healthy eating choices.',
    category: 'Nutrition',
    subject: 'Health & Science',
    grade: '3-5',
    icon: <Apple className="h-8 w-8 text-accent-600" />,
    progress: 100,
    bgColor: 'bg-accent-50',
    duration: '40 minutes',
    topics: [
      { id: 1, title: 'The Five Food Groups', completed: true, time: '8 min' },
      { id: 2, title: 'Nutrients in Foods', completed: true, time: '10 min' },
      { id: 3, title: 'Building a Balanced Plate', completed: true, time: '10 min' },
      { id: 4, title: 'Reading Food Labels', completed: true, time: '7 min' },
      { id: 5, title: 'Final Quiz', completed: true, time: '5 min' },
    ],
    relatedSubjects: ['Science', 'Mathematics', 'Social Studies'],
    connections: [
      { subject: 'Mathematics', description: 'Calculate nutritional values and portions.' },
      { subject: 'Social Studies', description: 'Explore food traditions across cultures.' },
      { subject: 'Science', description: 'How nutrients affect body systems.' },
    ]
  },
  4: {
    id: 4,
    title: 'Digital Wellness',
    description: 'How to maintain a healthy relationship with technology in the modern world.',
    category: 'Life Skills',
    subject: 'Technology',
    grade: '6-12',
    icon: <Lightbulb className="h-8 w-8 text-success-600" />,
    progress: 0,
    bgColor: 'bg-success-50',
    duration: '35 minutes',
    topics: [
      { id: 1, title: 'Technology in Our Lives', completed: false, time: '5 min' },
      { id: 2, title: 'Screen Time Balance', completed: false, time: '8 min' },
      { id: 3, title: 'Digital Citizenship', completed: false, time: '10 min' },
      { id: 4, title: 'Online Safety', completed: false, time: '7 min' },
      { id: 5, title: 'Healthy Tech Habits', completed: false, time: '5 min' },
    ],
    relatedSubjects: ['Health', 'Social Studies', 'Language Arts'],
    connections: [
      { subject: 'Health', description: 'Impact of technology on physical and mental health.' },
      { subject: 'Social Studies', description: 'Digital citizenship and responsibility.' },
      { subject: 'Language Arts', description: 'Critical evaluation of online information.' },
    ]
  }
};

export const ModuleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('topics');
  
  // Get module data based on id
  const module = moduleData[Number(id) as keyof typeof moduleData];
  
  if (!module) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Module not found</h2>
        <p className="mt-2 text-gray-600">The module you're looking for doesn't exist.</p>
        <Link
          to="/student"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          to="/student"
          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          <ChevronLeft className="mr-1 h-5 w-5" />
          Back to Dashboard
        </Link>
      </div>

      <div className={`${module.bgColor} rounded-xl shadow-sm overflow-hidden`}>
        <div className="p-6 sm:p-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:items-center">
              <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-md bg-white text-primary-600">
                {module.icon}
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-primary-800">
                    {module.category}
                  </span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800">
                    {module.subject}
                  </span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800">
                    Grades {module.grade}
                  </span>
                </div>
                <h1 className="mt-2 text-2xl font-bold text-gray-900">{module.title}</h1>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex items-center text-sm text-gray-700">
                <Clock className="mr-1.5 h-5 w-5 text-gray-500" />
                {module.duration}
              </div>
              <div className="mt-2 sm:mt-0">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 mr-2">Progress:</span>
                  <span className="text-sm font-semibold text-primary-700">{module.progress}%</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{module.description}</p>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('topics')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'topics'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="inline-block h-5 w-5 mr-2" />
              Topics
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'curriculum'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Award className="inline-block h-5 w-5 mr-2" />
              Curriculum Connections
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="inline-block h-5 w-5 mr-2" />
              Resources
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'topics' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900">Module Contents</h3>
              <p className="mt-1 text-sm text-gray-600">
                Complete all topics to finish this module.
              </p>
              <ul className="mt-6 space-y-3">
                {module.topics.map((topic, index) => (
                  <motion.li 
                    key={topic.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      topic.completed ? 'bg-green-50' : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      {topic.completed ? (
                        <CheckCircle className="h-6 w-6 text-success-500" />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-xs font-medium text-primary-600">
                          {index + 1}
                        </div>
                      )}
                      <span className={`ml-3 text-sm font-medium ${topic.completed ? 'text-gray-700' : 'text-gray-900'}`}>
                        {topic.title}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">({topic.time})</span>
                    </div>
                    <button
                      className={`inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded ${
                        topic.completed
                          ? 'text-success-700 bg-success-100 hover:bg-success-200'
                          : 'text-white bg-primary-600 hover:bg-primary-700'
                      }`}
                    >
                      {topic.completed ? (
                        <>
                          <CheckSquare className="mr-1 h-4 w-4" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="mr-1 h-4 w-4" />
                          Start
                        </>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900">Curriculum Connections</h3>
              <p className="mt-1 text-sm text-gray-600">
                See how this module connects to different subjects in your curriculum.
              </p>
              
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {module.connections.map((connection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-4"
                  >
                    <h4 className="text-md font-semibold text-gray-900">{connection.subject}</h4>
                    <p className="mt-2 text-sm text-gray-600">{connection.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-md font-semibold text-gray-900">Related Subjects</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {module.relatedSubjects.map((subject, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900">Additional Resources</h3>
              <p className="mt-1 text-sm text-gray-600">
                Explore these additional materials to enhance your learning.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-gray-900">Videos</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <Play className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">Introduction to {module.title}</a>
                    </li>
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <Play className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">Expert Interview: {module.category} Basics</a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-gray-900">Downloadable Materials</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">{module.title} Study Guide (PDF)</a>
                    </li>
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">Activity Worksheet</a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-gray-900">External Links</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">National Health Education Standards</a>
                    </li>
                    <li className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <a href="#" className="hover:underline">Interactive {module.category} Resources</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};