import React, { useState } from 'react'

function Faq() {

  const [openIndex, setOpenIndex] = useState(null)

  const faqsData  = [
  {
    question: 'Are these original branded shoes?',
    answer: 'No, we do not sell original branded shoes. We offer high-quality UA+ version shoes that look and feel very similar to the originals at a much more affordable price.'
  },
  {
    question: 'What is UA+ quality?',
    answer: 'UA+ quality refers to premium replica shoes made with high-quality materials, excellent finishing, and strong durability. They closely match the design and comfort of original branded shoes.'
  },
  {
    question: 'Are the shoes durable and comfortable?',
    answer: 'Yes, our shoes are made with high-quality materials to ensure good durability and comfort for daily use.'
  },
  {
    question: 'Do you offer size exchange?',
    answer: 'Yes, we provide size exchange if the shoe does not fit properly. Please contact us within the exchange period after delivery.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery usually takes 3–7 business days depending on your location.'
  }
]
  return (
    <div className='flex mt-20 flex-col items-center text-center text-slate-800 px-3'>


     <h1 className="text-3xl md:text-4xl font-semibold mt-2 tracking-wide text-center relative inline-block">
  Frequently Asked Questions
  <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mt-3 rounded-full mx-auto"></span>
</h1>

      <p className='text-sm text-slate-500 mt-4 max-w-sm'>
        Proactively answering FAQs boosts user confidence and cuts down on support tickets.
      </p>

      <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>

        {faqsData.map((faq, index) => (

          <div key={index} className='flex flex-col items-start w-full'>

            <div
              className='flex items-center justify-between w-full cursor-pointer bg-slate-50 border border-slate-200 p-4 rounded'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >

              <h2 className='text-sm'>{faq.question}</h2>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

            <p
              className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Faq