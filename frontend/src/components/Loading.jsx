function Loading() {
    return (
        <div
            id="loading-wave"
            className=" w-40 h-14 fixed top-[48%] left-[40%] md:left-[45%] z-50 flex justify-center items-end"
        >
            <div className="w-3 md:w-4 h-3 mx-2 bg-custom-gradient rounded-md animate-loading-1"></div>
            <div className="w-3 md:w-4 h-3 mx-2 bg-custom-gradient rounded-md animate-loading-2"></div>
            <div className="w-3 md:w-4 h-3 mx-2 bg-custom-gradient rounded-md animate-loading-3"></div>
            <div className="w-3 md:w-4 h-3 mx-2 bg-custom-gradient rounded-md animate-loading-4"></div>
        </div>
    );
}

export default Loading;
