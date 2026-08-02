import Image from "next/image";
import FloralDecoration from "@/components/ui/FloralDecoration";
import TapeStrip from "@/components/ui/TapeStrip";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CartaSection() {
  return (
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] bg-bone paper-texture overflow-hidden">
      {/* Flores secas decorativas */}
      <FloralDecoration
        variant="sprig"
        size="lg"
        className="absolute top-[10%] right-[3%] sm:right-[6%] animate-float-slow opacity-40"
      />
      <FloralDecoration
        variant="leaf"
        size="md"
        className="absolute bottom-[12%] left-[3%] sm:left-[6%] animate-float-slower opacity-35"
      />

      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Carta</h2>
          <p className="section-subtitle">
            Mire el trend en TikTok y lo quise hacer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative max-w-2xl mx-auto mt-4 sm:mt-6">
            {/* Sombra */}
            <div className="absolute -inset-3 bg-coffee/5 rounded-sm transform -rotate-1" />
            <div className="absolute -inset-1 bg-coffee/3 rounded-sm transform rotate-0.5" />

            {/* Carta */}
            <div className="relative bg-parchment shadow-letter p-8 sm:p-10 md:p-14 torn-edge-top torn-edge-bottom paper-texture">

              <TapeStrip
                className="-top-3 left-1/2 -translate-x-1/2"
                rotation={-2}
              />

              <FloralDecoration
                variant="rose"
                size="sm"
                className="absolute -top-2 -right-1 sm:-right-3 opacity-50"
              />

              <div className="font-cormorant text-base sm:text-lg md:text-xl text-ink-light leading-[1.8] sm:leading-[1.9] space-y-5 sm:space-y-6">

                <p className="font-playfair text-xl sm:text-2xl text-ink mb-6 sm:mb-8">
                  Querida Lara Jean...
                </p>

                <p>
                  Me dijiste que escribiera algo memorable, así que aquí está:
                  mi recuerdo de la primera vez que te vi, o como te gusta
                  llamarlo, nuestro bello "clique".
                </p>

                <p>
                  Fue en LUAU. Estabas sentada en la mesa de al frente hablando
                  con alguien y riendo, y por eso no podía quitarte la vista de
                  encima. Como un amigo te conocía le pregunté tu nombre y luego,
                  cuando ibas saliendo y casi te golpeabas, sentí que era mi
                  única oportunidad para hablarte y hacerte reír. Entonces,
                  con todos los nervios, te hablé, dije tu nombre y tú me
                  sonreíste. Sentí como el corazón dio un gran salto. No sabía
                  que eso fuera posible.
                </p>

                <p>
                  En ese entonces, no tenía ni idea de que te convertirías en
                  quien eres ahora: una de las personas más importantes de mi
                  vida. A veces no puedo creer lo afortunado que soy de que me
                  eligieras y la suerte que tuve de coincidir contigo.
                </p>

                <p>
                  Hemos pasado por muchas cosas juntos, Camilaaaoz, y nunca debí
                  dudar de que también superaríamos esto. Pero me asusté, me
                  lastimé y creo que también te lastimé. Lo siento muchísimo.
                  Muchísimo.
                </p>

                <p>
                  Claro que debes seguir tus estudios en Manizales. Deberías
                  hacer todas las cosas que quieras hacer. No quiero ser nunca
                  la persona que te detenga. Quiero ser el que esté al lado de
                  una gran arquitecta o mirándola de lejitos, porque si tú estás
                  bien, yo estoy bien.
                </p>

                <p>
                  No siempre será fácil, pero quiero hacer lo que sea necesario
                  para que funcione. Porque eso es lo que haces cuando amas a
                  alguien.
                </p>

                <p>
                  Si estás de acuerdo, por favor considera este nuestro nuevo
                  contrato.
                </p>

                <p>
                  Te amaré, Camilaaaoz (XxLinaZ). Ahora y para siempre.
                </p>

                {/* Firma */}
                <div className="pt-8 flex flex-col items-center">

                  <p className="font-playfair text-lg text-ink">
                    Cristian
                  </p>

                  <div className="mt-8">
                    <Image
                      src="/Cami/roblox.png"
                      alt="Nosotros en Roblox"
                      width={340}
                      height={340}
                      className="rounded-xl shadow-lg"
                    />
                  </div>

                  <p className="mt-6 max-w-sm text-center font-cormorant text-lg italic text-coffee/70 leading-relaxed">
                    Incluso aquí encontramos una forma de coincidir.
                  </p>

                </div>

              </div>

              <TapeStrip
                className="-bottom-3 left-[20%] sm:left-[25%]"
                rotation={3}
              />

              <FloralDecoration
                variant="sprig"
                size="sm"
                className="absolute -bottom-1 -left-2 opacity-40"
              />

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}