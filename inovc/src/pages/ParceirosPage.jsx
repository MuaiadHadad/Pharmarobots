import PageHero from "../components/PageHero";
import Projetos from "../components/Projetos";

export default function ParceirosPage() {
  return (
    <>
      <PageHero
        eyebrow="Parceiros"
        title="Rede de parceiros"
        description="O INOVC assenta numa lógica colaborativa que aproxima ensino superior, investigação, empresas e entidades do território."
      />
      <Projetos />
    </>
  );
}
