import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import { ShimmerCard } from "./Shimmer";
const Body = () => {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);
  
    useEffect(() => {
      fetchMemes();
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      //scrollY - how much I have scrolled
      // innerHeight - heigh of the window(visible setion)
      // document.body.scrollHeight - total height of the web page
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
    
      // Check if the user has scrolled to the bottom of the page
      if (scrollY + innerHeight >= bodyHeight - 10) {
        fetchMemes();
      }
        };
  
    const fetchMemes = async () => {
      setShowShimmer(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      const json = await data.json();
  
      setShowShimmer(false);
      setMemes((memes) => [...memes, ...json.memes]);
    };
  
    return (
      <div className="flex flex-wrap">
        {memes.map((meme, i) => (
          <MemeCard key={i} data={meme} />
        ))}
  
        {showShimmer && <ShimmerCard />}
      </div>
    );
  };
  export default Body;
  