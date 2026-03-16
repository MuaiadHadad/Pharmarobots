import PageHero from "../components/PageHero";
import Areas from "../components/Areas";

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas"
        title="Áreas de atuação"
        description="Conheça os principais eixos em que o INOVC atua para aproximar ciência, inovação, empreendedorismo e desenvolvimento regional."
      />
      <Areas />
    </>
  );
}
