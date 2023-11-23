import errorImg from "../../assets/images/error/error_image.avif"

const ErrorPage = () => {
    return (
        <div>
            <img className="h-screen w-screen object-contain" src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;