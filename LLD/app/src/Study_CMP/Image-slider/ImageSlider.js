import { useEffect, useState } from "react";

const ImageSlider = () => {
    const images = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
        "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
        "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
    ];
    
    const [active, setActive] = useState(0)

    useEffect(() => {

        const sliderInterval = setInterval(()=>{
            loadNextImage()
        }, 3000);

        return ()=>{
            clearInterval(sliderInterval);
        }

    }, []);

    const loadPreviousImage = () => {
            setActive((active) => (active+1) % images.length)
    }
    const loadNextImage = () => {
            setActive((active) => (active-1) < 0 ? images.length-1 : active-1)
    }

    
    return (
        <div>
            <div className="m-2 p-2 flex justify-center items-center">
                <img className="w-20 h-20 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="left arrow" onClick={loadPreviousImage}></img>
                <img className="w-[800px]" src={images[active]} alt="Image"></img>
                <img className="w-20 h-20 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="Right arrow" onClick={loadNextImage}></img>
            </div>
        </div>
    )
}
export default ImageSlider;