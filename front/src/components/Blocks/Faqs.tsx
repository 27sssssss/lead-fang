import { useState } from "react";

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


interface FAQ {
    question: string;
    answers: string[];
}

export default function faqAccordion ({faqs} : {faqs: FAQ[]}) {
    const [selected, setSelected] = useState<number | null>(null);
    return(
        <ul>
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} selected={selected} setSelected={setSelected} index={index}></AccordionItem>
            ))}
        </ul>
    )
}

interface AccordionItemProps{
    faq: FAQ,
    selected: number | null;
    setSelected: (index: number | null) => void;
    index: number;
}

const AccordionItem = ({faq, selected, setSelected, index}: AccordionItemProps) => {
    return(
        <li>
            <button className="">{faq.question}</button>
            <div className="">

            </div>
        </li>
    );
}