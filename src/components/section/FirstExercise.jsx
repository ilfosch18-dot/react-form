import { useState } from "react";
import { Mailbox } from "lucide-react";

export default function MainContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="main-content">
      <div className="container">
        <h4 className="text-center mb-4 text-bg-success p-3 rounded">
          <b>Esercizio 1</b>
          <br />
          Gestisci l'iscrizione alla newsletter nascondendo il form
          e mostrando un messaggio di ringraziamento dopo l'invio
        </h4>
      </div>

      <section className="container">
        <div className="mb-3">
          {!isSubmitted ? (
            <>
              <h3 className="mb-4">
                Iscriviti alla nostra newsletter <Mailbox />
              </h3>

              <form onSubmit={handleSubmit}>
                <label htmlFor="nome" className="form-label">
                  Nome e cognome
                </label>

                <input
                  id="nome"
                  type="text"
                  className="form-control"
                  required
                />

                <label htmlFor="email" className="mt-3 form-label">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  className="form-control"
                  required
                />

                <div className="mt-3 mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="privacy"
                    required
                  />

                  <label
                    className="form-check-label"
                    htmlFor="privacy"
                  >
                    Accetto l'informativa sulla privacy
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Iscriviti ora
                </button>
              </form>
            </>
          ) : (
            <div className="alert alert-success text-center">
              <h3>Grazie per esserti iscritto! 🎉</h3>
              <p>
                La tua iscrizione alla newsletter è stata completata
                con successo.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}