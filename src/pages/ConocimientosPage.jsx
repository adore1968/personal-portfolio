import Conocimiento from "../components/Conocimiento";
import { conocimientos } from "../data/profile";

function ConocimientosPage() {
  return (
    <div>
      <h1 className="md:text-4xl mb-5 text-3xl font-bold text-center">
        Mis principales conocimientos
      </h1>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-5">
        {conocimientos.map((post, index) => (
          <Conocimiento key={index} conocimiento={post} />
        ))}
      </div>
    </div>
  );
}

export default ConocimientosPage;
