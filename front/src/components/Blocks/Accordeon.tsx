
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
            <div className="border-[0.27vw] border-[#F0EEE6] pt-[3.5vw] pb-[1.5vw] pl-[1.5vw] grid grid-cols-[33%_67.5%]">
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
                            <li key={faq.question} className='outline-blocknew p-5 flex py-10 flex-row items-start gap-8'>
                                <p className={`font-extralight uppercase transition-colors duration-500 ${isOpen ? 'text-[#FFBF00]' : ''}`}>Q{index}</p>
                                <div className="w-full">
                                    <button
                                        type="button"
                                        id={`manifesto-question-${index}`}
                                        className="group flex w-full items-center justify-between gap-5  text-left text-[clamp(1rem,1.5vw,1.5rem)] uppercase"
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() => setSelected(isOpen ? null : index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-sm p-1">
                                            <span
                                                className={`relative flex size-full items-center justify-center rounded-[1px] transition-[background-color,rotate,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-90 motion-reduce:transition-none ${
                                                    isOpen ? 'rotate-180 bg-[#FFBF00]' : 'rotate-0 bg-[#F0EEE6]'
                                                }`}
                                            >
                                                <span className="absolute h-[2px] w-3 bg-black" />
                                                <span
                                                    className={`absolute h-3 w-[2px] bg-black transition-[rotate,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                                        isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                                    }`}
                                                />
                                            </span>
                                        </span>
                                    </button>
                                    <div
                                        id={answerId}
                                        role="region"
                                        aria-labelledby={`manifesto-question-${index}`}
                                        aria-hidden={!isOpen}
                                        className={`grid transition-[grid-template-rows] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                            isOpen ? 'grid-rows-[1fr] duration-700' : 'grid-rows-[0fr] duration-500'
                                        }`}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <ul className="space-y-3 pt-6 pr-8 text-[clamp(0.9rem,1.1vw,1.125rem)] leading-relaxed">
                                                {faq.answers.map((answer, answerIndex) => (
                                                    <li
                                                        key={answer}
                                                        className={`transition-[opacity,translate,filter] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                                            isOpen ? 'translate-y-0 opacity-100 blur-0 duration-700' : 'translate-y-3 opacity-0 blur-[4px] duration-300'
                                                        }`}
                                                        style={{ transitionDelay: isOpen ? `${150 + answerIndex * 80}ms` : '0ms' }}
                                                    >
                                                        {answer}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}