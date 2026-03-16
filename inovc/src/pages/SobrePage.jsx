import PageHero from "../components/PageHero";
import CTA from "../components/CTA";

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Sobre o INOVC"
        description="Saiba mais sobre a visão, a rede de cooperação e o papel do projeto na valorização do conhecimento e na inovação aplicada."
      />
      <CTA />
    </>
  );
}
