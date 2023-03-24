import Heading from "@/components/Atoms/Heading";

export default function About() {
  return (
    <section className="px-2 mx-auto lg:px-4 xl:px-32 2xl:px-80" id="about">
      <Heading text="Sobre nós" />
      <p className="text-marks-100">
        Somos uma empresa nova, porém com muita experiência agregada, formada
        por profissionais capacitados que estão sempre acompanhando as novas
        técnologias e tendências do mercado. Acreditamos na confiança, na
        honestidade e na transparência ,mesmo em tempos tão difíceis, pois estes
        elementos são os princípios básicos para um relacionamento de sucesso! A 
         <span className="text-marks-400 font-bold space-x-1"> MARKS </span> oferece
        consultoria aliada à soluções tecnológicas, que visam a redução de
        custos e riscos e o aumento da produtividade da sua empresa.
      </p>
    </section>
  );
}
