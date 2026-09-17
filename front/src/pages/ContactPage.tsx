import small_folder from "../assets/small_folder.svg"
import CustomerReviews from "../components/blocks/CustomerReviews"
import Footer from "../components/blocks/Footer"
import CustomCursor from "../components/cursor/CustomCursor_Pencil"
import { useRef } from "react"

const contactDetails = [
  { label: 'Email', value: 'hello@leadandfang.com', href: 'mailto:hello@leadandfang.com' },
  { label: 'Phone', value: '+1 (415) 555-0189', href: 'tel:+14155550189' },
  { label: 'Instagram', value: '@leadandfang', href: 'https://instagram.com' },
  { label: 'Location', value: 'San Francisco, CA', href: '#' },
]



export default function ContactPage() {
  const formRef  = useRef<HTMLDivElement>(null)
  return (
    <main className="contact-page w-full pt-25">
      <section
      ref={formRef}
        className="flex cursor-none flex-col gap-27 mx-auto items-center max-w-6xl w-full svgbackground min-h-[646px] bg-no-repeat bg-center"
      >
            <CustomCursor containerRef={formRef} />
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
            <form className="flex cursor-none w-full flex-col gap-4 px-16 pb-11" onSubmit={(event) => event.preventDefault()}>

              <div className="flex w-full flex-row justify-center gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full cursor-none backdrop-blur-[3px] bg-transparent  min-h-17 rounded-[111px] border px-8 text-[13px] font-normal outline-none placeholder:text-current"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full cursor-none backdrop-blur-[3px] bg-transparent  min-h-17 rounded-[111px] border px-8 text-[13px] font-normal outline-none placeholder:text-current"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company or website"
                  className="w-full cursor-none min-h-17 rounded-[111px] border backdrop-blur-[3px] bg-transparent px-8 text-[13px] font-normal outline-none placeholder:text-current"
                />
              </div>
              <div className="flex gap-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="min-h-41 cursor-none min-w-[371px] resize-none rounded-[30px] border backdrop-blur-[3px] bg-transparent p-8 text-[13px] font-normal outline-none placeholder:text-current"
                />
                <div className="flex w-full flex-col gap-4">
                  <div className="flex w-full gap-4">
                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full cursor-none min-h-17 appearance-none rounded-[111px] border backdrop-blur-[3px] bg-transparent px-8 text-[13px] font-normal outline-none"
                    >
                      <option value="" disabled>What is your budget?</option>
                      <option value="2k-5k">$2k - $5k</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-plus">$25k+</option>
                    </select>
                    <input
                      name="project"
                      type="text"
                      placeholder="What do you need built"
                      className="w-full cursor-none min-h-17 rounded-[111px] border backdrop-blur-[3px] bg-transparent px-8 text-[13px] font-normal outline-none placeholder:text-current"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-full hover:cursor-none isolate pointer-events-auto overflow-hidden bg-[#F0EEE6] text-[#181716] 
                    transition-colors duration-400 before:absolute 
                    before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#FFBF00]
                    before:transition-transform before:duration-700 before:content-[''] hover:text-[#181716] 
                    hover:before:scale-x-100 min-h-17 w-full flex items-center justify-center rounded-[111px] 
                    border-2 backdrop-blur-[3px] px-8 text-left"
                  >
                    Start my project
                  </button>
                </div>
              </div>
            </form>
      </section>
      <section className="pt-20">
        <CustomerReviews></CustomerReviews>
      </section>
      <Footer>

      </Footer>
    </main>
  )
}