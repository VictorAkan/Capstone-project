import welcome from '../../../assets/images/welcome.png';

export const QuickInfo = () => {
    return (
        <div className="bg-red-500 h-full pt-10 pb-28 text-white">
            <img src={welcome} alt="info-img" />
            <div>
                <p className="text-[3rem] text-center">Sign up for deals <br /> ASAP</p>
            </div>
        </div>
    )
}