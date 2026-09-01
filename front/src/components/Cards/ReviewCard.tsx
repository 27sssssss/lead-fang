import commas from '../../assets/Vector.svg'


export default function ReviewCard(){
    return(
        <div className="max-w-130 min-w-130 bg-[#FFBF00] text-[#00211C] border rounded-3xl">
            <div className="flex flex-col justify-between px-5 py-3 min-h-60">
                <img src={commas} alt="" className="h-6 w-6 self-start" />
                    <div className=''>
                        <p className='text-3xl font-semibold' style={{ fontFamily: '"AzeretMono", sans-serif'}}>ALESSANDRO ROMANO</p>
                        <p className='font-light'>
                            Founder & CEO, Hospitality Group
                        </p>

                    </div>
                <img src={commas} alt="" className="self-end h-6 w-6 " />

            </div>

        </div>
    )
}