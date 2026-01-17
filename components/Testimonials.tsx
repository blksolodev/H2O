import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "I never realized how dehydrated I was until I started using H2O. The widgets make it so easy to track without opening the app!",
    author: "Sarah Jenkins",
    role: "Yoga Instructor",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=007AFF&color=fff"
  },
  {
    quote: "Finally, a water tracker that doesn't feel like a chore. The design is beautiful and the reminders are actually helpful, not annoying.",
    author: "Marcus Chen",
    role: "Product Designer",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Chen&background=00C7BE&color=fff"
  },
  {
    quote: "Love that it doesn't require an account. Privacy is huge for me, and H2O respects that while working perfectly.",
    author: "Elena Rodriguez",
    role: "Software Engineer",
    avatar: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=111827&color=fff"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-brand-dark dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Loved by Thousands</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Join the community of healthy hydration.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-brand-darkCard p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-gray-800">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-700" />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{t.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;