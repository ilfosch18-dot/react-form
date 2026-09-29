import { useState } from "react";

export default function MainContent() {
  const [promo, setPromo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitPromo = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-5 main-content">
      <div className="container">
        <h4 className="text-center mb-4 text-bg-success p-3 rounded">
          <b>Esercizio 2</b>
          <br />
          valida un codice promozionale inserito dall'utente mostrando lo sconto
          applicato o segnalando l'invalidità del codice
        </h4>
      </div>

      <section className="container">
        <div className="mb-3">

          {!submitted ? (
            <>
              <h3 className="mb-4">
                Inserisci il tuo codice promozionale (cod.promo: 3Fk45BlAn26)
              </h3>

              <form onSubmit={handleSubmitPromo}>
                <label htmlFor="promo" className="mt-3 form-label">
                  Codice promozionale
                </label>

                <input
                  id="promo"
                  type="text"
                  className="form-control"
                  value={promo}
                  onChange={(event) => setPromo(event.target.value)}
                  required
                />

                <button type="submit" className="mt-3 btn btn-primary">
                  Sblocca l'offerta
                </button>
              </form>
            </>
          ) : promo === "3Fk45BlAn26" ? (
            <div className="alert alert-success text-center">
              <h3>Ecco il tuo sconto del 26% 🎉</h3>
              <p>
                Il codice promozionale è stato applicato al carrello.
              </p>
            </div>
          ) : (
            <div className="alert alert-danger text-center">
              <h3>Codice non valido ❌</h3>
              <p>
                Il codice promozionale inserito non è valido.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}