import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {

    const url = import.meta.env.VITE_URL;

    const googleAuth = () => {
        window.open(
            `${url}/auth/google`,
            "_self"
        );
    };

    const facebookAuth = () => {
        window.open(
            `${url}/auth/facebook`,
            "_self"
        );
    };

    return (
        <div className="flex flex-col justify-center items-center w-5/6 h-[80vh] m-auto md:w-2/4 lg:w-1/5">
            <GoogleLoginButton onClick={googleAuth} />
            <FacebookLoginButton onClick={facebookAuth} />
        </div>
    )
}

export default Login;