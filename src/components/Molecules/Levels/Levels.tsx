import Heading from "@/components/Atoms/Heading";
import Image from "next/image";
import levels from "../../../Mocks/levels";
export default function Levels() {
  return (
    <section className="px-80 py-10" id="services">
      <Heading text="Níveis de atendimento" />
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {levels.map((level) => (
          <div
            key={level.id}
            className="w-96 h-72 flex flex-col  gap-5  p-5 hover:bg-gray-50 transition-all"
          >
            <Image
              src={level.img}
              alt={level.description}
              width={360}
              height={135}
            />
            <p className="text-marks-400 font-normal ">{level.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
