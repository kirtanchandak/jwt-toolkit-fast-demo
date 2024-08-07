import Navbar from './components/Navbar';
import { FaGithub } from 'react-icons/fa';

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="bg-gray-800">
        <section className="text-white font-poppins h-screen">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Testing for "jwt-toolkit-fast"
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Your one-stop solution for JWTs!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto flex gap-2"
                  href="https://github.com/kirtanchandak/jwt-toolkit"
                  target="_blank"
                >
                  Github <span className="mt-[2px]"><FaGithub size={16}/></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
