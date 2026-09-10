import small_folder from "../assets/small_folder.svg"

const contactDetails = [
  { label: 'Email', value: 'hello@leadandfang.com', href: 'mailto:hello@leadandfang.com' },
  { label: 'Phone', value: '+1 (415) 555-0189', href: 'tel:+14155550189' },
  { label: 'Instagram', value: '@leadandfang', href: 'https://instagram.com' },
  { label: 'Location', value: 'San Francisco, CA', href: '#' },
]


export default function ContactPage() {
  return (
    <main className="contact-page mx-auto w-full max-w-6xl px-6 lg:px-10">
      <section
        className="flex flex-col gap-27 items-center w-full svgbackground min-h-[646px] bg-no-repeat bg-center"
      >
            <div className="flex flex-col gap-2 justify-center max-w-228.75 w-full pt-10 h-full">
              <p
                className="text-9xl stroke-text z-10"
                style={{ fontFamily: '"AZKIA", sans-serif' }}
              >
                New project?
              </p>
              <p
                className="text-[217px] font-bold z-1"
                style={{ fontFamily: '"DRUKCYR", sans-serif'}}
              >
                GET IN TOUCH
              </p>
            </div>
            <div className="">
              <div className="flex flex-row gap-4 px-11">
                <div className="max-w-17 border-2">
                    123     
                </div>
              </div>
            </div>
      </section>
    </main>
  )
}