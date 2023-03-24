import Heading from "@/components/Atoms/Heading";
import levels from "../../../Mocks/levels";
export default function Levels() {
  return (
    <section className="px-2 mx-auto lg:px-4 xl:px-32 2xl:px-80 py-10" id="services">
      <Heading text="Níveis de atendimento" />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3  lg:gap-5 sm:my-6  ">
        {levels.map((level) => (
          <div
            key={level.id}
            className="w-full h-72 flex flex-col gap-3  sm:my-6 hover:bg-gray-50 transition-all"
          >
            <img
              src={level.img}
              alt={level.description}
             
            />
            <p className="text-marks-400 text-sm sm:text-base md:font-normal px-2  ">{level.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
