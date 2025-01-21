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
      imagem: "/assets/img1.jpg",
      title: "Programa Treinos Club",
      url: "https://pay.kirvano.com/18a7e6cd-0d5d-4fd3-8696-a56ef3206999?aff=34866179-8e57-40c9-8919-7a1a7f0dc74d",
    },
    {
      imagem: "/assets/img2.jpg",
      title: "Receitas Fit",
      url: "https://pay.kirvano.com/60f3d26e-28e0-48ce-9258-c53a05a7a5e9?aff=4656e337-2136-4221-aa90-fcc4a894bce6",
    },
    {
      imagem: "/assets/img3.jpg",
      title: "E-book Dicas Nutrição",
      url: "https://pay.kirvano.com/17a68d60-05c2-4c83-bb10-abe341fc495f",
    },
  ]);

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src="/assets/logo.jpg" alt="Logo" className={styles.imgHome} />
        <h1 className={styles.h1Title}>Nutrição é saúde</h1>
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
                Participar
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
