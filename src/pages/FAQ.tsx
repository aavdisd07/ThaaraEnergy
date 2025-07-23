import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer in renewable energy?',
    answer:
      'We offer complete solar solutions including rooftop and ground-mount installations, energy storage systems, EV charging integration, and performance monitoring.',
  },
  {
    question: 'Do you help with government subsidies?',
    answer:
      'Yes. We assist in identifying, applying, and claiming applicable state and national subsidies for eligible renewable energy projects.',
  },
  {
    question: 'How long does a solar installation take?',
    answer:
      'Typical residential installations take 2-4 weeks from contract to commissioning. Commercial timelines vary based on scale and regulatory approvals.',
  },
  {
    question: 'Do you provide maintenance and support?',
    answer:
      'Absolutely. We offer AMC (Annual Maintenance Contracts), real-time monitoring, and dedicated technical support for all systems we install.',
  },
  {
    question: 'Can I integrate battery storage later?',
    answer:
      'Yes. Our hybrid-ready systems allow future integration of battery storage, giving you flexibility as your energy needs evolve.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/574092/pexels-photo-574092.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-secondary-800/80 to-primary-900/90"></div>
        <div className="z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 text-lg">Answers to the most common queries about our services and solutions.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 text-center mb-12">
            Your Questions, Answered
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-primary-200 rounded-2xl shadow-sm bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-primary-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-700 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 text-primary-700 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
