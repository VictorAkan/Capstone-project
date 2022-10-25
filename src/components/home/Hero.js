import { Link } from 'react-router-dom';
import preview from '../../assets/images/preview.png';

export const Hero = () => {
    return (
        <div className="px-10">
            <section className="flex items-center mt-16">
                <div>
                    <div>
                        <h2 className="text-red-900 font-bold tracking-wide text-[2.5rem]">Access the central database of <br />
                        dealership reviews across <br /> the country</h2>
                    </div>
                    <div className="mt-5">
                        <p>With access to car dealership reviews, you can make changes and mutate <br /> other 
                        processes as well as submit reviews and then carry on the business.</p>
                    </div>
                    <div className="mt-8">
                        <Link className="bg-red-600 hover:bg-red-700 p-3 text-white" to="/">Purchase Now</Link>
                    </div>
                </div>
                <div>
                    <img src={preview} alt="preview-image" />
                </div>
            </section>
        </div>
    )
}