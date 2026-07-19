import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

export function CTA() {
  const telefone = '5561999743703'

  const mensagemInicial = encodeURIComponent(
    'Olá! Vi seu portfólio e gostaria de solicitar um orçamento para um site.'
  )

  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagemInicial}`

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div
          className="
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            px-8
            py-14
            text-center
            backdrop-blur-md

            md:px-16
            md:py-16
          "
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
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
              text-white

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
              lg:text-lg
              leading-8
              text-slate-300
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

              bg-green-500
              px-8
              py-4

              lg:text-lg
              font-semibold
              text-white

              shadow-xl

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-green-600
              hover:shadow-green-500/30
            "
          >
            <WhatsappLogoIcon size={28} weight="fill" />
            Solicitar orçamento
          </a>

          <p className="mt-6 text-sm text-slate-400">
            ✓ Resposta rápida &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Orçamento sem
            compromisso &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  )
}
