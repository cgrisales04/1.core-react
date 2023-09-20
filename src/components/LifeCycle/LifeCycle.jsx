import { useEffect, useState } from "react";

console.log("Pre-render");
const LifeCycle = () => {
  console.log("Logic-render");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * 1. Sin dependencias
   * - Siempre se llama
   */
  useEffect(() => {
    console.log("useEffect Default");
    return () => {
      console.log("Componente desmontado");
    };
  });
  /**
   * 2. Se envias dependencias vacias
   * - Se llama solo cuando se carga el componente
   */
  useEffect(() => {
    console.log("useEffect dependencias vacias []");
  }, []);
  /**
   * 3. Se envian Dependencias [Cunter 1, Counter 2].
   * - Se llama cuando uno de los 2 cambien
   */
  useEffect(() => {
    console.log("useEffect con dependencias [Cunter 1, Counter 2]");
  }, [counter1, counter2]);

  return (
    <div>
      {console.log("Return render")}
      <h2 className="text-center">LifeCycle</h2>
      <h4>Counter 1: {counter1}</h4>
      <h4>Counter 2: {counter2}</h4>

      <button
        className="btn btn-warning me-2"
        onClick={() => setCounter1(counter1 + 1)}
      >
        Counter 1+
      </button>
      <button
        className="btn btn-warning me-2"
        onClick={() => setCounter2(counter2 + 1)}
      >
        Counter 2+
      </button>
    </div>
  );
};

export default LifeCycle;
