



import vector from '../../assets/footerleadndfang.svg'

export default function Footer (){
    return(
        <footer>
            <section className="px-10 w-full ">
                <div className="flex flex-col">
                    <div className='flex flex-row'>
                        <a>example@mail.com</a>
                        <a>x/twitter</a>
                        <a>instagram</a>
                        <a>linkedin</a>
                    </div>
                    <img src={vector}>
                    </img>
                </div>
            </section>
        </footer>
    )
}