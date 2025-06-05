import { Heart, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-primary-600" />
              <span className="ml-2 text-lg font-display font-bold text-primary-700">WellnessWise</span>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Privacy Policy</Link>
            <Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Terms of Service</Link>
            <Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Contact Us</Link>
          </div>
          <p className="mt-8 text-sm text-slate-500 md:mt-0">
            &copy; 2025 WellnessWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};