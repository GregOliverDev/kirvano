import React, { useState } from "react";
import styles from "./HomePageComp.module.css";

// Define o tipo para os links
interface Link {
  imagem: string;
  title: string;
  url: string;
}

const App: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([
    {
      imagem: "/assets/",
      title: "20x",
      url: "add link",
    },
  ]);

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src="/assets/" alt="Logo" className={styles.imgHome} />
        <h1 className={styles.h1Title}>Bem vindo</h1>
      </header>
      <main className={styles.divMenu}>
        {links.map((link, index) => (
          <div key={index} className={styles.divMaps}>
            <img
              src={link.imagem}
              alt={link.title}
              className={styles.iconMaps}
            />
            <div className={styles.divbt}>
              <h3 className={styles.linkTitle}>{link.title}</h3>
              <button
                className={styles.participateButton}
                onClick={() => window.open(link.url, "_blank")}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
