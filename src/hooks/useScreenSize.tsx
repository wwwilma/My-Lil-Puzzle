import { useEffect, useState } from "react";

/**
 * Hook to track the screen size.
 * @returns An object containing width and height of screen.
 */
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({ // State to store current screen size
        width: window.innerWidth, // Initial width of window
        height: window.innerHeight, // Initial height of window
    });

    // Effect to update size when the window gets resized
    useEffect(() => { 
        const handleResize = () => { // Function to handle resize event
            setScreenSize({ // Updating screenSize state with new width and height
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Dependency array to ensure effect only runs once

    return screenSize;
};

export default useScreenSize;