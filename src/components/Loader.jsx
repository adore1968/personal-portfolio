import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner className="animate-spin w-28 h-full mx-auto" />
    </div>
  );
}

export default Loader;
