import { useState } from "react";

const Views = () => {
  /**
   * Hooks: Pertenecen a los componentes, TIENE que estar adentro
   * [Valor, Funcion que lo modifica] = useState(0)
   */
  let [amount, setAmount] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-primary position-relative"
      onClick={() => setAmount(amount + 1)}
    >
      Likes
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {amount}+<span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default Views;
