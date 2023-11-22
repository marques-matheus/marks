
export default function Banner() {
        return (
                <section className="flex justify-around items-center p-10 h-screen">
                        <div className="lg:w-2/4">
                                <p className="text-6xl md:text-5xl  2xl:text-7xl font-bold text-black">
                                        Estrategia e Soluções com foco nos <strong className="text-marks-400 underline">
                                                Resultados!
                                        </strong>
                                </p>
                        </div>
                        <img src="/active-support-animate.svg" alt="Suporte" className="w-1/3 hidden md:block" />
                </section>

        );

}