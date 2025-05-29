import bannerLeftImage from '@/assets/images/banner-left.png';
import bannerRightImage from '@/assets/images/banner-right.png';
import mainImage from '@/assets/images/main.png';
import googleIcon from '@/assets/images/google.png';
import microsoftIcon from '@/assets/images/microsoft.png';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGooleLogin = async() => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user =  result.user

    if(user.uid && user.accessToken) {
      navigate("/project")
    }
  }
  // return (
  //   <>
  //     <button onClick={handleGooleLogin}>Login with Google</button>
  //   </>
  // )
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-pink-200 px-2 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl gap-8 z-10">
        {/* Login Form */}
        <div className="w-full md:w-1/3 bg-white bg-opacity-80 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center mx-auto">
          <img src={mainImage} alt="Pcollab logo" className="w-16 h-16 mb-2 mx-auto" />
          <h2 className="text-2xl font-bold text-center mb-2 text-black/60">Plan. Collaborate. Succeed.</h2>
          <form className="w-full flex flex-col gap-4 mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <input
              type="password"
              placeholder="Your password"
              className="border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg py-2 transition-colors w-full"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex gap-4 w-full mb-2">
            <button onClick={handleGooleLogin} className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 bg-white hover:bg-gray-100">
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 bg-white hover:bg-gray-100">
              <img src={microsoftIcon} alt="Microsoft" className="w-5 h-5" />
              Microsoft
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Already have PCollab?{' '}
            <a href="#" className="text-[#76B7E0] hover:underline">Log in</a>
          </p>
        </div>
      </div>
      {/* Banners hai bên dưới */}
      <img src={bannerLeftImage} alt="teamwork" className="hidden md:block absolute left-0 bottom-5 w-1/4 max-w-xs h-auto object-contain z-0" />
      <img src={bannerRightImage} alt="meeting" className="hidden md:block absolute right-0 bottom-5 w-1/4 max-w-xs h-auto object-contain z-0" />
    </div>
  );
};

export default Login; 