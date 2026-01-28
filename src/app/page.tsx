import Image from "next/image";
import { CTAButton } from "./components/CTAButton";
import Reveal from "./components/Reveal";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">{children}</div>;
}

function Section({
  children,
  subtle = false,
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <section className={subtle ? "bg-slate-50/70 py-12 sm:py-16" : "py-12 sm:py-16"}>
      <Container>
        {/* entrata sobria per ogni sezione */}
        <div className="animate-fade-up [animation-delay:80ms]">
          {children}
        </div>
      </Container>
    </section>
  );
}

function Logo() {
  return (
    <div className="relative h-12 w-12 xl:h-14 xl:w-14">
      <Image
        src="/sdt-w.png"
        alt="SDT Sales & Copywriting Agency"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

/** BOX FORTE (coerente + premium) */
function BlueBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-[#1E3A5F]/85 shadow-lg shadow-black/10 backdrop-blur",
        "p-6 sm:px-10 sm:py-8",
        "transition-transform duration-300 hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      <div className="text-white/90">{children}</div>
    </div>
  );
}

/** BOX LEGGERO (coerente + premium) */
function SoftBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal inViewClassName="animate-fade-down" delay={100}>
    <div
      className={[
        "rounded-3xl border border-slate-200/60 bg-[#EEF3F8]/80 shadow-sm backdrop-blur",
        "p-6 sm:px-10 sm:py-8",
        "transition-transform duration-300 hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      <div className="text-slate-900">{children}</div>
    </div>
    </Reveal>
  );
}

/** Divider premium */
function PremiumDivider() {
  return (
    <div className="my-6 h-px w-full bg-linear-to-r from-transparent via-slate-200/70 to-transparent" />
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
 <section className="relative isolate min-h-screen overflow-hidden">
  {/* Background image layer */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/sfondo-1.png"
      alt=""
      fill
      priority
      className="object-cover object-center "
    />
  </div>

  {/* Overlay premium */}
  <div className="absolute inset-0 z-10">
    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-black/65" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.78))]" />
    <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
  </div>

        {/* Contenuto */}
        <div className="relative py-6 lg:py-12 px-4  z-20">
          {/* TOP: Logo + Banner */}
          <header className="pb-4 lg:pb-10">
            <div className="mx-auto w-full max-w-full px-4">
              <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_3fr_1fr] lg:gap-6">
                {/* Logo */}
                <div className="flex justify-center lg:-pl-10 animate-fade-in">
                  <Logo />
                </div>

                {/* Banner */}
                <div className="flex justify-center mt-6 lg:mt-0 animate-fade-down-slow delay-1000 [animation-delay:120ms]">
                  <div className="w-full max-w-none">
                    <BlueBox className="p-6 lg:px-8">
                      <p className="mx-auto max-w-4xl font-sans text-base leading-relaxed italic lg:text-lg">
                        Se gestisci un <b>infobusiness o un’agenzia di servizi e consulenze</b> e stai
                        provando a scalare la tua attività ma le campagne marketing non riescono a
                        portare lead altamente qualificati, leggi qui
                        <span className="inline-flex w-[1.6em] justify-start align-baseline">
                          <span className="animate-dot-1">.</span>
                          <span className="animate-dot-2">.</span>
                          <span className="animate-dot-3">.</span>
                        </span>
                      </p>
                    </BlueBox>
                  </div>
                </div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </header>

          {/* SEZIONE 1 */}
          <section className="my-8 pb-8 lg:pb-10 w-full animate-fade-right ">
            <Container>
              <div className="mx-auto max-w-3xl xl:max-w-none">
                <div className="space-y-5 text-base leading-relaxed text-white lg:text-lg">
                  <h1 className="text-3xl font-serif font-semibold tracking-tight text-white lg:text-4xl">
                    Ennesima promessa non mantenuta..?
                  </h1>

                  <div className="font-sans space-y-5">
                    <p>Ti capisco.</p>
                    <p>La colpa non è di nessuno.</p>
                    <p>Nemmeno dei professionisti e dell’agenzia a cui hai deciso di delegare il tuo marketing.</p>
                    <p>D’altronde…</p>
                    <p>Hanno provato a fare del loro meglio, giusto? Eppure non è bastato.</p>

                    <p>
                      Il tuo obiettivo era quello di portare più vendite alla tua attività.
                      Seguire un sistema scalabile che porti profitti concreti.
                    </p>

                    <p>
                      Ma ti ritrovi con un’agenda intasata da curiosi che <b>non compreranno mai</b>, <u>budget bruciato</u> e venditori demoralizzati da <b>trattative impossibili</b>.
                    </p>

                    <p>Magari avrai pensato che il problema sia la tua offerta.</p>
                    <p>O addirittura il tuo servizio.</p>

                    <p className="font-semibold text-white">Ma non è così.</p>

                    <p>
                      La questione riguarda qualcosa di più profondo, di estremamente
                      importante, che determina il <b>successo</b> o il fallimento dell’intera
                      campagna marketing…
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </section>

      {/* SEZIONE 2 */}
      <Section subtle>
        <div className="mx-auto max-w-3xl xl:max-w-none">
          <div className="space-y-6 px-4 font-sans text-base leading-relaxed text-slate-800 sm:text-lg">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Il Paradosso del Volume
            </h2>

            <p>Si pensa che una campagna marketing profittevole debba avere grandi flussi di traffico.</p>
          <Reveal inViewClassName="animate-fade-in-up" delay={100}>
            <BlueBox className="text-center">
              <p className="text-xl font-semibold uppercase tracking-wide">Sbagliato.</p>
            </BlueBox>
          </Reveal>

            <p>
              Avere grandi quantità di lead fuori target, impossibilitati ad acquistare e senza la necessità del tuo servizio…
            </p>

            <p>
              Ti costa tre volte: <b>tempo perso</b> in chiamate inutili, <u>venditori svuotati</u> da trattative che saltano e <b>soldi bruciati in pubblicità.</b>
            </p>

            <p>
              E a quel punto la vera perdita non è il budget investito: <b>è tutto quello che ci perdi sopra.</b>
            </p>

            <p>
              Ma dopo aver lavorato dietro le quinte di realtà che fatturano oltre il milione di euro l’anno, gestendo campagne per agenzie e consulenti in decine di settori diversi e <b>generando decine di migliaia di euro...</b>
            </p>

            <p>
              Posso dirti che la vera <b>chiave</b> per abbattere i costi e servire ai tuoi venditori potenziali clienti che hanno già la carta di credito in mano è una sola: la <b><u>QUALITÀ</u></b>.
            </p>

            <p>Il marketing, oggi, è su un livello superiore.</p>

            <p>
              Non basta più realizzare delle semplici sponsorizzate, con un’offerta e una pagina di vendita per chiudere contratti.
            </p>

            <p>Hai bisogno di una strategia specifica. Dettagliata. Minuziosa.</p>

            <p>Come teorizzò Eugene Schwartz, leggenda del copywriting a risposta diretta:</p>

            <blockquote>
              
                <SoftBox>
                  <p><i>“I potenziali clienti non partono tutti dallo stesso livello”</i></p>
                </SoftBox>
            </blockquote>

            <div className="space-y-2">
              <p>* C’è chi è pronto ad acquistare subito</p>
              <p>* C’è chi ha bisogno di molti chiarimenti</p>
              <p>* C’è chi non acquisterà mai</p>
            </div>

            <p>È qui che entra in gioco la "Piramide della Consapevolezza":</p>

            <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur max-w-3xl mx-auto">
              <div className="relative aspect-[10.2/6] sm:aspect-[19.2/9.2] w-full">
                <Image
                  src="/consapevolezza.gif"
                  alt="Piramide della Consapevolezza"
                  fill
                  className="object-fill sm:object-contain"
                  priority
                />
              </div>
            </div>

            <p>Come vedi, ogni livello di consapevolezza è diverso dagli altri.</p>

            <p>
              Trattare un cliente che sta alla base della piramide (inconsapevole) come uno che sta in cima (pronto all'acquisto) è un suicidio economico.
            </p>

            <p>
              E allora perché sprecare budget con una singola strategia ideale per tutti (ma che non converte nessuno)?
            </p>

          </div>
        </div>
      </Section>

      {/* SEZIONE 3 */}
      <Section>
        <div className="mx-auto max-w-3xl xl:max-w-none">
          <div className="space-y-6 font-sans px-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 sm:text-3xl">
              <b><i>"Divide et Impera":</i></b> L'Antidoto al Marketing Generico
            </h2>

            <p>
              Mentre il mercato è saturo di "esperti" che gridano ai quattro venti sempre le stesse soluzioni standard:
            </p>
          <Reveal inViewClassName="animate-fade-in-up" delay={100}>
            <BlueBox>
              <div className="space-y-3">
                <p>* "Devi postare ogni giorno ed essere onnipresente" (trasformandoti in un impiegato dei social network).</p>
                <p>* “Devi spendere di più per battere la concorrenza" (l'unica soluzione che hanno quando le loro ads non convertono).</p>
                <p>* "Devi usare l'ultima strategia segreta" (che tra un mese sarà già vecchia e inutile).</p>
              </div>
            </BlueBox>
          </Reveal>
            <p>il vero profitto si ottiene facendo l'opposto.</p>
            <p><b>Si ottiene dividendo.</b></p>

            <p>
              Il protocollo <b>"Divide et Impera"</b> non si basa sulla speranza, ma su un framework di precisione che elimina le variabili che oggi ti stanno costando caro:
            </p>

            <div className="grid gap-4">
              <SoftBox className="p-6 sm:px-8 sm:py-8">
                <p>
                  *<b><u>Piano di Fattibilità:</u></b> Strategia di marketing studiata su misura per le tue esigenze seguendo un framework di analisi già testato (obiettivi, esigenze, risorse, ostacoli, budget, mercato, target, competitor), e non un template riciclato da usare come “strategia copia-incolla”
                </p>
              </SoftBox>

              <SoftBox className="p-6 sm:px-8 sm:py-8">
                <p>
                  * <b><u>Segmentazione della Consapevolezza:</u></b> Non esisterà un messaggio unico per tutti i livelli di consapevolezza. Ci saranno funnel appositi per chi è "freddo" e per chi è pronto all'acquisto.
                </p>
              </SoftBox>

              <SoftBox className="p-6 sm:px-8 sm:py-8">
                <p>
                  * <b><u>Costruzione dell'Asset:</u></b> Non riceverai semplici "ads" o “pagine di vendita”, ma un Dossier Strategico e un ecosistema di copy proprietario che resterà alla tua azienda come patrimonio, indipendentemente dalle piattaforme.
                </p>
              </SoftBox>
            </div>

            <p>
              In sintesi: mentre i tuoi competitor restano appesi a un unico messaggio, sperando che la fortuna li assista, tu avrai un <b>sistema che lavora simultaneamente su più livelli.</b>
            </p>

            <p className="underline decoration-slate-400 decoration-2 underline-offset-4">
              Una struttura ingegnerizzata per monetizzare ogni segmento di traffico, <b>eliminando il rischio</b> di dipendere da un'unica strategia che può crollare al primo imprevisto
            </p>

          </div>
        </div>
      </Section>

      {/* SEZIONE 4 — CTA #1 */}
      <Section subtle>
        <div className="mx-auto max-w-3xl xl:max-w-none">
          <div className="space-y-6 px-4 font-sans text-base leading-relaxed text-slate-800 sm:text-lg">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Vuoi ottenere più contatti di qualità dal tuo marketing e scalare la tua attività?
            </h2>

            <p>
              Se vuoi capire come approcciare il metodo <b><i>"Divide et Impera"</i></b> alle tue campagne marketing, clicca il tasto qui sotto per prenotare <b>un'analisi di Fattibilità</b> di 30 minuti.
            </p>
          <Reveal inViewClassName="animate-fade-in-up" delay={100}>
            <BlueBox>
              <p className="font-semibold">
                <b>ATTENZIONE:</b> Non accetto progetti a <i>"scatola chiusa"</i>. Il protocollo <b><i>"Divide et Impera"</i></b> è un amplificatore di risultati, non una bacchetta magica. Per questo motivo, non vendo nulla senza prima aver analizzato i numeri.
              </p>

              <p className="mt-4">
                La consulenza serve a verificare se il tuo business ha le fondamenta solide per reggere questo tipo di strategia. Se i presupposti ci sono, definiremo il piano d'azione. Se non ci sono, te lo dirò chiaramente, evitandoti un investimento inutile.
              </p>
            </BlueBox>
          </Reveal>
            <div className="pt-2 flex justify-center">
              <CTAButton
                href="https://calendly.com/tuo-link/analisi"
                openInNewTab
                
              />
            </div>

            <PremiumDivider />
          </div>
        </div>
      </Section>

      {/* SEZIONE 5 — CTA #2 */}
      <Section>
        <div className="mx-auto max-w-3xl xl:max-w-none">
          <div className="space-y-6 font-sans px-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Per chi è adatto il metodo <b><i>"Divide et Impera"</i></b>
            </h2>

            <SoftBox>
              <div className="space-y-3">
                <p>* Titolari di infobusiness o agenzia di servizi e consulenze che hanno già fatto marketing ma non riescono ad ottenere lead di qualità</p>
                <p>* Per attività con ticket medio di 1500€ per vendita</p>
                <p>* Per attività che hanno una struttura di venditori e consulenti</p>
              </div>
            </SoftBox>

            <div className="pt-2 flex justify-center">
              <CTAButton
                href="https://calendly.com/tuo-link/analisi"
                openInNewTab
              />
            </div>

            <PremiumDivider />
          </div>
        </div>
      </Section>

      {/* SEZIONE 6 — BIO */}
      <Section subtle>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-10 font-sans text-base leading-relaxed text-slate-800 sm:text-lg">
            <div className="space-y-2 mb-12">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Sono Salvatore Di Tommaso
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] lg:items-center">
              {/* FOTO + TARGHETTA */}
              <Reveal inViewClassName="animate-fade-up lg:animate-fade-right" delay={500}>
              <div className="relative flex justify-center lg:justify-start max-w-full px-4 lg:-ml-8">
                <div className="relative w-full max-w-3xl sm:max-w-95 lg:sticky lg:top-1/2 -translate-y-1/12 lg:-translate-y-1/5">
                  <div className="relative aspect-4/5 w-full ml-1">
                    <Image
                      src="/salvatore.png"
                      alt="Salvatore Di Tommaso"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="relative mx-auto -mt-6 w-[90%] rounded-2xl bg-[#1E3A5F] px-3 py-3 text-center shadow-md shadow-black/25">
                    <p className="font-serif text-sm font-semibold tracking-wide text-white">
                      Salvatore Di Tommaso
                    </p>
                    <p className="mt-0.5 font-sans text-xs text-white/80">
                      Copywriter & Stratega a Risposta Diretta
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
              {/* TESTO */}
              <div className="space-y-6">
                <p>
                  Dal 2021 aiuto infobusiness e agenzie di servizi e consulenze a generare profitto dalle loro campagne marketing, portando leads di qualità ai venditori e facilitando loro le trattative di vendita.
                </p>

                <SoftBox>
                  <p>
                    Non vendo promesse di guadagni facili. Vendo protocolli di acquisizione prevedibili. E non metto mai a rischio la tua cassa su test azzardati.
                  </p>
                  <p className="mt-3">
                    Le mie strategie si basano solo su dati di fatto. Su certezze. Su numeri concreti.
                  </p>
                </SoftBox>

                <p>
                  Tutto parte da una scrupolosa analisi dell’attività, del servizio e del mercato.
                </p>

                <p>
                  Solo dopo aver analizzato tutto e prefissato l’obiettivo da raggiungere, si parte con la creazione della strategia e della campagna marketing (con tanto di messaggio pubblicitario).
                </p>

                <p>
                  Quello che faccio è seguire una struttura logica e razionale che minimizza il margine di errore.
                </p>

                <p>
                  Se vuoi scoprire come approcciare il metodo "Divide et Impera” alle tue campagne marketing e scalare la tua attività…
                </p>

                
              </div>
            </div>
          </div>
          {/* CTA distaccata + centrata */}
                <div className="pt-6 mt-4 flex justify-center">
                  <CTAButton
                    href="https://calendly.com/tuo-link/analisi"
                    openInNewTab
                    className="w-full"
                  />
                </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <Container>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} • Tutti i diritti riservati
          </p>
        </Container>
      </footer>
    </main>
  );
}
