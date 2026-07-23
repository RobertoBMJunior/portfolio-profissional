import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

export function CTA() {
  const telefone = '5561999743703'

  const mensagemInicial = encodeURIComponent(
    'Olá! Fiquei interessado nos seus serviços, vamos conversar?'
  )

  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagemInicial}`

  return (
    <section
      id="contacts"
      className="scroll-mt-25 relative overflow-hidden bg-slate-50 py-12"
    >
      {/* Glow azul */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

      {/* Glow roxo */}
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div
          className="
            rounded-[36px]
            border
            border-slate-200
            bg-white
            px-8
            py-14
            text-center
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]

            md:px-16
            md:py-16
          "
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Vamos conversar?
          </span>

          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              text-slate-900

              lg:text-5xl
            "
          >
            Seu negócio merece um site que transmita confiança e conquiste novos
            clientes.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600

              lg:text-lg
            "
          >
            Se você deseja um site moderno, rápido e profissional para sua
            clínica ou empresa, entre em contato. Será um prazer entender o seu
            projeto e apresentar a melhor solução.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3

              rounded-2xl

              bg-emerald-600
              px-8
              py-4

              font-semibold
              text-white

              shadow-lg
              shadow-emerald-600/20

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-emerald-700
              hover:shadow-xl
              hover:shadow-emerald-600/30

              lg:text-lg
            "
          >
            <WhatsappLogoIcon size={28} weight="fill" />
            Solicitar orçamento
          </a>

          <p className="mt-6 text-sm text-slate-500">
            ✓ Resposta rápida &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Orçamento sem
            compromisso &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  )
}
