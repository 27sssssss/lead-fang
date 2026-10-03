
import { useState } from 'react'

const faqs = [
    {
        question: 'We start with understanding',
        answers: [
            'Before we design, we get to the core of the business — what you’re building, who you’re speaking to, where you want to go, and what’s getting in the way.',
            'Because the strongest creative work doesn’t begin with a style.',
            'It begins with the right question.'
        ]
    },

    {
        question: 'We think beyond the brief',
        answers: [
            'Sometimes what a client asks for isn’t what the brand actually needs.',
            'We question assumptions, challenge familiar solutions, and explore directions that may not have been obvious at the start.',
            'We’re not here to simply execute a brief.',
            'We’re here to find what works.'
        ]
    },

    {
        question: 'We design for the real world.',
        answers: [
            'Aesthetics matter. A lot.',
            'But great design has a job to do.',
            'It should build recognition. Clarify communication. Strengthen perception.Support growth. And give people a reason to choose you.',
            'Whether it’s seen for three seconds on a billboard or held in someone’s hands, every element should earn its place.'
        ]
    },

    {
        question: 'Details are the difference',
        answers: [
            'The kerning in a logo. The stock of a business card. The rhythm of a presentation. The movement of an animated mark. The scale of a sign across a building.',
            'People may not notice every decision.',
            'But they feel the difference when every decision is right',
        ]
    },

]


export default function QasAccordion () {
    const [selected, setSelected] = useState<number | null>(0)

    return (
        <section className="pt-5">
            <p className="text-[4vw] text-[#FFBF00] -rotate-3 stroke-text2 relative left-[3%] text-left" style={{ fontFamily: '"Azkia", sans-serif', lineHeight: 1 }}>
                The manifesto
            </p>
            <div className="border-[0.27vw] border-[#F0EEE6] pt-[3.5vw] pb-[1.5vw] pl-[1.5vw] grid grid-cols-[33%_60%]">
                <div className=''>
                    <p className="text-[clamp(3.5rem,8vw,9.5vw)] text-left uppercase" style={{ fontFamily: '"DRUKCYR", sans-serif', lineHeight: 0.91 }}>
                        THE RULES OF ENGAGEMENT FOR BUILDING DOMINANT BRANDS.
                    </p>
                </div>

                <ul className="text-left">
                    {faqs.map((faq, index) => {
                        const isOpen = selected === index
                        const answerId = `manifesto-answer-${index}`

                        return (
                            <div className='outline-blocknew p-5'>
                                <li key={faq.question} className="">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-5 py-5 text-left text-[clamp(1rem,1.5vw,1.5rem)] uppercase"
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() => setSelected(isOpen ? null : index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span aria-hidden="true" className="text-[#FFBF00] text-2xl">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <ul id={answerId} className=" space-y-3 pb-6 pr-8 text-[clamp(0.9rem,1.1vw,1.125rem)] leading-relaxed">
                                            {faq.answers.map((answer) => (
                                                <li key={answer}>{answer}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}