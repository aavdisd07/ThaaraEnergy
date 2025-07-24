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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ae-solar.com/_next/image?url=%2Fimages%2FheroSectionBackground.jpeg&w=3840&q=75')",
        }}
      >
        <div className="absolute inset-0 bg-black/8" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg">
            Answers to the most common queries about our services and solutions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-12">
            Your Questions, Answered
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? 'bg-white/10 border-white'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg sm:text-xl font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6 text-white/80 text-sm sm:text-base leading-relaxed">
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
