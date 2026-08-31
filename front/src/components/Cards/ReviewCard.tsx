import commas from '../../assets/Vector.svg'


export default function ReviewCard(){
    return(
        <div className="max-w-210 min-w-210 bg-[#FFBF00] text-[#00211C] border rounded-3xl flex-col">
            <div className="px-5 py-3">
            <img src={commas} alt="" className="h-6 w-6" />
                <p>
                    this is our new card!
                </p>
            
            <img src={commas} alt="" className="right-0 h-6 w-6" />

            </div>

        </div>
    )
}