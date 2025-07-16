import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Renewable Energy in Emerging Markets',
      excerpt: 'Exploring the opportunities and challenges of implementing renewable energy solutions in developing economies.',
      author: 'Rajeev Chandra',
      date: '2025-06-25',
      readTime: '5 min read',
      category: 'Renewable Energy',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'future-renewable-energy-emerging-markets'
    },
    {
      title: 'Electric Vehicle Infrastructure: Building for Tomorrow',
      excerpt: 'How strategic EV charging infrastructure development is accelerating the transition to electric mobility.',
      author: 'Rajeev Chandra',
      date: '2025-06-20',
      readTime: '7 min read',
      category: 'Electric Mobility',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'electric-vehicle-infrastructure-building-tomorrow'
    },
    {
      title: 'Industrial Sustainability: A Business Imperative',
      excerpt: 'Why sustainable industrial practices are becoming essential for long-term business success and competitiveness.',
      author: 'Rajeev Chandra',
      date: '2025-06-18',
      readTime: '6 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'industrial-sustainability-business-imperative'
    },
    {
      title: 'Solar Energy Trends: What to Expect in 2025',
      excerpt: 'Key developments and innovations shaping the solar energy landscape this year.',
      author: 'Rajeev Chandra',
      date: '2025-06-15',
      readTime: '4 min read',
      category: 'Solar Energy',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'solar-energy-trends-2025'
    },
    {
      title: 'Clean Technology Investment: Opportunities in India',
      excerpt: 'Analyzing the investment landscape for clean technology startups and projects in the Indian market.',
      author: 'Rajeev Chandra',
      date: '2025-06-12',
      readTime: '8 min read',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'clean-technology-investment-opportunities-india'
    },
    {
      title: 'Energy Storage Solutions: The Key to Grid Stability',
      excerpt: 'How advanced energy storage technologies are enabling better integration of renewable energy sources.',
      author: 'Rajeev Chandra',
      date: '2025-06-10',
      readTime: '5 min read',
      category: 'Energy Storage',
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'energy-storage-solutions-grid-stability'
    }
  ];

  const categories = ['All', 'Renewable Energy', 'Electric Mobility', 'Sustainability', 'Solar Energy', 'Investment', 'Energy Storage'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in clean energy, sustainability, 
            and the future of renewable technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on clean energy, 
            sustainability trends, and industry developments.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;