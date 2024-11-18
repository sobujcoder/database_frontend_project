
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <section className=" bg-gray-50" >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <form action="">
            <div className="mb-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"><strong>Email</strong></label>
                <input type="email"  placeholder="Enter Email" className="border-2 border-black-300 rounded"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900"><strong>Password</strong></label>
                <input type="password"  placeholder="Enter password" className="border-2 border-black-300 rounded"/>
            </div>
            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-red-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
            <p className="text-sm font-bold text-black mt-3"> Don’t have an account yet?
            <Link to="/signup" className=" gap-3 px-3 border-black rounded font-medium text-black hover:underline ">Create Account</Link>
            </p>
            
            
        </form>
      </div>
    </section>
  )
}

export default Login
