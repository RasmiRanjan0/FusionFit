import React from 'react';

const faqs = [
  {
    id: '01',
    question: "What are your gym's hours of operation?",
    answer:
      "Our gym is open from 5:00 AM to 11:00 PM on weekdays and from 7:00 AM to 9:00 PM on weekends. We offer flexible hours to accommodate all our members' schedules.",
  },
  {
    id: '02',
    question: 'What types of membership plans do you offer?',
    answer:
      'We offer a variety of membership plans to suit different needs and budgets, including Standard and Premium plans. Standard plans provide access to our facilities and basic classes, while Premium plans include additional benefits such as personal training sessions, specialized classes, and wellness programs.',
  },
  {
    id: '03',
    question: 'Do you offer personal training sessions?',
    answer:
      'Yes, we offer personal training sessions with certified trainers who will work with you to create a personalized fitness plan tailored to your goals. Personal training is available as part of our Premium membership or as an add-on to other membership plans.',
  },
  {
    id: '04',
    question: 'What amenities are available at your gym?',
    answer:
      'Our gym is equipped with state-of-the-art fitness equipment, spacious locker rooms with showers, a sauna, a steam room, and a relaxation lounge. We also provide complimentary towel service and free Wi-Fi.',
  },
  {
    id: '05',
    question: 'Are there any age restrictions for joining the gym?',
    answer:
      'Our gym is open to individuals aged 16 and older. Members under 18 require parental consent. We also offer specialized programs and classes for seniors and youth.',
  },
];

const AboutFAQs = () => {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase text-gray-400 tracking-widest">• FAQ’S</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          HAVE ANY QUESTIONS?
        </h2>
      </div>

      <div className="divide-y divide-white/10">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex flex-col md:flex-row md:items-start gap-6 py-8"
          >
            <div className="text-sm text-gray-400 w-full md:w-[60px] font-semibold">
              {faq.id}
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold mb-2">{faq.question}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFAQs;
