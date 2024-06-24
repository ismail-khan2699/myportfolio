"use client";
import React, { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import ReactDOM from "react-dom";

interface ImagePopupProps {
    imageUrl: string;
    imageUrlFull: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, imageUrlFull }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="text-white" onClick={togglePopup}>
                <div className="w-full relative h-44 sm:h-52 group-hover:scale-105 overflow-hidden rounded-md duration-300 transition-all">
                    <img
                        className="min-w-full w-full h-auto min-h-full object-cover bg-white -z-10 cursor-pointer"
                        src={imageUrl}
                        alt="Thumbnail"
                    />
                    <div className="absolute h-full w-full opacity-0 group-hover:opacity-100 rounded-md transition-all flex justify-center items-center translate-y-10 group-hover:translate-y-0 duration-300 group-hover:bg-black/40 left-0 top-0">
                        <MdOutlineCameraAlt size={40} />
                    </div>
                </div>
            </button>

            {isOpen &&
                ReactDOM.createPortal(
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" >
                        <div className="p-4 flex justify-center w-full rounded shadow-lg relative">
                            <div className="w-11/12 md:w-9/12 flex justify-center items-center">
                                <div className="overflow-y-scroll max-h-[97vh] ">
                                    <img
                                        src={imageUrlFull}
                                        alt="Popup"
                                        className="w-auto"
                                    />
                                </div>
                            </div>
                            <div className="h-full mx-3">
                                <button className="text-3xl text-white" onClick={togglePopup}>
                                    &times;
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default ImagePopup;
