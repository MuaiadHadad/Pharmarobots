import PageHero from "../components/PageHero";
import CTA from "../components/CTA";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Fale connosco"
        description="Entre em contacto para saber mais sobre o projeto, oportunidades de colaboração e iniciativas promovidas pelo INOVC."
      />
      <CTA />
    </>
  );
}
