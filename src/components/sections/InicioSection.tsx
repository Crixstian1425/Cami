import FloralDecoration from "@/components/ui/FloralDecoration";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InicioSection() {
  return (
    <section
      className="relative min-h-[calc(100dvh-var(--nav-height))] flex items-center justify-center paper-texture overflow-hidden"
    >
      {/* Flores decorativas alrededor */}
      <FloralDecoration
        variant="rose"
        size="lg"
        className="absolute top-[15%] left-[4%] sm:left-[8%] animate-float-slow opacity-50"
      />
      <FloralDecoration
        variant="sprig"
        size="md"
        className="absolute top-[20%] right-[5%] sm:right-[10%] animate-float-slower opacity-40"
      />
      <FloralDecoration
        variant="leaf"
        size="md"
        className="absolute bottom-[18%] left-[6%] sm:left-[12%] animate-float-slower opacity-35"
      />
      <FloralDecoration
        variant="rose"
        size="sm"
        className="absolute bottom-[25%] right-[8%] animate-float-slow opacity-45"
      />

      <div className="section-container relative z-10 py-20 sm:py-24">
        <ScrollReveal>
          {/* Carta abierta */}
          <div className="relative max-w-2xl mx-auto">
            {/* Sombra de la carta */}
            <div className="absolute -inset-2 bg-coffee/5 rounded-sm transform rotate-1" />

            <div
              className="relative bg-parchment shadow-letter p-8 sm:p-12 md:p-14
                          torn-edge-top torn-edge-bottom paper-texture"
            >
              {/* Línea decorativa superior */}
              <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
                <div className="w-8 h-[1px] bg-coffee/20" />
                <FloralDecoration variant="rose" size="sm" />
                <div className="w-8 h-[1px] bg-coffee/20" />
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-ink text-center mb-6 sm:mb-8 leading-snug">
                Hola Cami:)
              </h2>

              <div className="space-y-5 sm:space-y-6 font-cormorant text-base sm:text-lg md:text-xl text-ink-light leading-relaxed text-center">
                <p>
                Si estás leyendo esto, gracias por regalarme unos minutos de tu tiempo.
                </p>
                <p>
                No sabía muy bien cómo hacer un detalle para ti y, siendo sincero, esta fue
                la mejor idea que se me ocurrió. Quería dejar en algún lugar todo eso bonito
                que vivimos, porque aunque nuestra historia no haya sido muy larga, sí fue muy especial para mí
                </p>
                <p>
                Siempre voy a agradecer el haberte conocido. Gracias por las conversaciones,
                por las risas, por cada salida, por la tranquilidad que me transmitías y por
                hacerme sentir que podía ser yo mismo cuando estaba contigo.
                </p>
                <p>
                También quiero aprovechar para pedirte perdón. Si alguna vez alguno de mis chistes,
                mis comentarios o alguna actitud mía te hizo sentir incómoda, triste o te lastimó sin
                que esa fuera mi intención, de verdad lo siento. Nunca quise hacerte sentir mal y espero
                que puedas perdonarme por esos momentos.
                </p>
                <p>
                Hay algo más que quiero decirte. La última vez que hablamos me hablaste de cuidar más mi salud,
                de mejorar mi estilo de vida y de empezar a pensar un poco más en mí. Quiero que sepas que voy a
                intentar seguir ese consejo. Porque esas palabras se quedaron conmigo y me hicieron
                pensar. Ojalá, cuando la vida vuelva a cruzar nuestros
                caminos, puedas ver que al menos hice el intento.
                </p>
                <p>
                No sé qué vaya a pasar con nosotros más adelante. Tal vez dentro de unos años volvamos
                a coincidir, o tal vez la vida simplemente nos lleve por caminos diferentes.
                Y está bien. Hay personas que llegan para quedarse y otras que llegan para dejar
                algo bonito en nosotros. Tú hiciste eso conmigo.
                </p>
                <p>
                Lo que vas a encontrar en esta página son pequeños recuerdos que me
                hicieron pensar en ti. Algunas canciones, unas cuantas palabras y un
                espacio que quise hacer con mucho cariño. No para cambiar el pasado
                ni para pedirte que vuelvas, sino para agradecerte por el capítulo tan
                bonito que escribimos juntos.
                </p>
                <p>
                Ojalá te vaya muy bien en esta nueva etapa. Sé que vas a lograr
                muchas cosas y espero que nunca pierdas esa forma tan
                bonita que tienes de ver la vida.
                </p>
                <p>
                Gracias por coincidir conmigo.
                </p>
                <p>
                Con mucho cariño,
                </p>
                <p>
                Cristian.
                </p>
              </div>

              {/* Firma decorativa */}
              <div className="mt-10 sm:mt-12 text-center">
                <div className="w-16 h-[1px] bg-pastel-pink/50 mx-auto mb-4" />
                <p className="font-playfair text-sm sm:text-base text-coffee italic">
                  
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
