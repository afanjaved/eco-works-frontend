import Image from 'next/image';
import ecoTest from '../assets/ecoworks_slide_blk_Excel_Dryer_Xlerator_XLC2.jpg';

export default function Slider() {
    return (
        <div className="relative w-full">
            <Image 
                src={ecoTest} // Path to the image in public folder
                alt="Background" 
                priority // Optional: Load the image immediately for better performance
            />
        </div>
    );
}
