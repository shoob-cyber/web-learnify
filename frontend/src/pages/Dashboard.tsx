import { Link } from 'react-router-dom';
import { BookOpen, Users, LineChart, Brain, HeartPulse, Apple, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary-600 rounded-2xl shadow-xl mb-8">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Students in classroom" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 lg:px-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Integrating Health into <br className="hidden sm:block" />
            <span className="text-accent-400">Everyday Learning</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-white">
            Empowering students to develop lifelong health and wellness habits through engaging, curriculum-integrated learning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/student"
              className="inline-block rounded-lg bg-white px-4 py-3 text-base font-semibold text-primary-700 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Student Portal
            </Link>
            <Link
              to="/teacher"
              className="inline-block rounded-lg bg-primary-700 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Teacher Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Key Areas Section */}
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Health & Wellness Areas</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Our curriculum integrates essential wellness topics across all subjects
          </p>
        </div>

        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg">
              <HeartPulse className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Physical Health</h3>
            <p className="mt-2 text-sm text-slate-600">
              Exercise, hygiene, sleep, and body systems integrated into science, PE, and more.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-secondary-100 rounded-lg">
              <Brain className="h-6 w-6 text-secondary-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Mental Wellbeing</h3>
            <p className="mt-2 text-sm text-slate-600">
              Stress management, mindfulness, and emotional intelligence across all subjects.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-accent-100 rounded-lg">
              <Apple className="h-6 w-6 text-accent-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Nutrition</h3>
            <p className="mt-2 text-sm text-slate-600">
              Balanced diets, food systems, and healthy eating habits in science and social studies.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-success-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-success-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Life Skills</h3>
            <p className="mt-2 text-sm text-slate-600">
              Decision-making, self-care, and digital wellness across the curriculum.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits for Schools</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            See how our platform enhances the educational experience
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Curriculum Integration</h3>
            <p className="mt-2 text-sm text-slate-600">
              Seamlessly blend health education into existing subjects without adding new courses.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-lg">
              <Users className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Student Engagement</h3>
            <p className="mt-2 text-sm text-slate-600">
              Interactive modules and gamification increase participation and knowledge retention.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-lg">
              <LineChart className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Progress Tracking</h3>
            <p className="mt-2 text-sm text-slate-600">
              Detailed analytics help teachers monitor student learning and identify areas for support.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-2xl py-16 px-6 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-16">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900">
            Ready to transform health education?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-primary-700">
            Join schools nationwide using WellnessWise to integrate health and wellness education across the curriculum.
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-slate-300 px-5 py-3 placeholder-slate-400 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Request Demo
            </button>
          </form>
          <p className="mt-3 text-sm text-primary-700">
            We care about your data. Read our{' '}
            <a href="#" className="font-medium text-primary-900 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};