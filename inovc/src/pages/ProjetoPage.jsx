import PageHero from "../components/PageHero";
import Projetos from "../components/Projetos";

export default function ProjetoPage() {
  return (
    <>
      <PageHero
        eyebrow="Projeto"
        title="Projeto INOVC"
        description="Uma plataforma de articulação para a inovação, orientada para transferência de conhecimento, capacitação e impacto no território."
      />
      <Projetos />
    </>
  );
}
