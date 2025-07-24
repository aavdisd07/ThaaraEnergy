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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://sunveera.com/wp-content/uploads/2024/04/GettyImages-1278948452-e1fdce3baef44af28f449ab36d6717f3-1024x683.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Insights & Perspectives

          </h1>
          <p className="text-white/80 text-lg">
          Stay informed about the latest developments in clean energy, sustainability, 
          and the future of renewable technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-gray-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">
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
                    className="text-white font-medium hover:text-gray-300 transition-colors flex items-center group"
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
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on clean energy, 
            sustainability trends, and industry developments.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;