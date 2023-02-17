import services from "../../../Mocks/services.js";
import Heading from "../../Atoms/Heading/Heading";
export default function ServiceCard() {
  return (
    <section className="px-80 py-10" id="services">
      <Heading text="Nossos Serviços" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-96 h-64 flex flex-col  gap-5 border-t-2 border-gray-200 p-5 hover:bg-gray-50 transition-all"
          >
            <div className="flex flex-row space-x-3 items-center h-fit w-full text-marks-700">
              {service.icon}
              <h2 className="text-lg font-medium">{service.name}</h2>
            </div>
            <p className="text-marks-400 font-light ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
