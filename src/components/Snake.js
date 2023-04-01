import Snake from "react-simple-snake";
import {useEffect} from "react";

const PlaySnake = () => {
    window.addEventListener("keydown", function(e) {
        if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
      <section id="snake">
        <div className="pt-10 overflow-hidden text-center h-full h-screen ">
          <h2 className="text-white text-3xl mb-1 font-medium mt-12">
            Use arrows or W/A/S/D keys to play:
          </h2>
          <Snake
            percentageWidth="50"
            startSnakeSize="5"
            appleColor="red"
            snakeColor="green"
          />
        </div>
      </section>
    );
};

export default PlaySnake;
