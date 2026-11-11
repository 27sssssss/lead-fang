// форма «Get in touch» только для мобильной версии главной — в мобильном макете она стоит вместо отзывов
const field = 'w-full min-h-14 rounded-[111px] border bg-transparent px-6 text-[13px] font-normal outline-none placeholder:text-current'

export default function MobileContact() {
    return (
        <section className="md:hidden px-2.5">
            <div className="border-2 border-[#F0EEE6] rounded-[10vw] px-3 pt-8 pb-3">
                <div className="relative flex flex-col items-center pb-6">
                    <p className="text-[12vw] text-[#FFBF00] stroke-text2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 whitespace-nowrap z-10" style={{ fontFamily: '"AZKIA", sans-serif', lineHeight: 1 }}>
                        New project?
                    </p>
                    <p className="text-[21vw] font-bold leading-none pt-[5vw]" style={{ fontFamily: '"DRUKCYR", sans-serif' }}>
                        GET IN TOUCH
                    </p>
                </div>
                <form className="flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
                    <input name="name" type="text" placeholder="Your name" required className={field} />
                    <textarea name="message" placeholder="Message" required className="min-h-40 w-full resize-none rounded-[30px] border bg-transparent p-6 text-[13px] font-normal outline-none placeholder:text-current" />
                    <input name="email" type="email" placeholder="Your email" required className={field} />
                    <select name="budget" defaultValue="" className={`${field} appearance-none`}>
                        <option value="" disabled>Choose a budget</option>
                        <option value="2k-5k">$2k - $5k</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-plus">$25k+</option>
                    </select>
                    <input name="company" type="text" placeholder="Company or website" className={field} />
                    <input name="project" type="text" placeholder="What do you need built?" className={field} />
                    <button type="submit" className="min-h-14 w-full rounded-[111px] bg-[#F0EEE6] text-[#181716] text-[13px]">
                        Start my project
                    </button>
                </form>
            </div>
        </section>
    )
}
