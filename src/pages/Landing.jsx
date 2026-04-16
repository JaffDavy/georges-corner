import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* NAV */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">George’s Corner 🍷</h1>
      </nav>

      <div className="flex flex-col items-center justify-center text-center flex-1">
        <h2 className="text-5xl font-bold">
          A Taste of Luxury
        </h2>

        <p className="text-gray-400 mt-4 max-w-md">
          Order premium meals and drinks directly from your phone.
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="cursor-pointer mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
        >
          Order Now
        </button>
      </div>

    </div>
  );
}

export default Landing;