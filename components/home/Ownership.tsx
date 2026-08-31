import Reveal from "./Reveal";

export default function Ownership() {
  return (
    <section id="ownership" className="bg-aubergine text-cloud">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,3vw,40px)] py-[clamp(64px,7vw,112px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,4vw,56px)] items-end mb-[clamp(36px,5vw,60px)]">
          <h2 className="font-display font-bold text-[clamp(30px,3.8vw,54px)] leading-[1.03] tracking-[-.032em] m-0">
            You own it.
            <br />
            You approve it.
            <br />
            We <span className="text-violet">operate</span> it.
          </h2>
          <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-mist m-0 max-w-[46ch]">
            The business stays yours. Accounts, inventory and capital sit with
            you — the operating work sits with us.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(16px,2vw,24px)] mb-[clamp(28px,4vw,40px)]">
          <div className="border border-cloud/12 rounded-[18px] p-[clamp(20px,2.2vw,28px)] bg-ink/45">
            <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-lime mb-5">
              Client
            </div>
            <div className="grid gap-3.5 text-base">
              {[
                "Owns the business",
                "Owns the inventory",
                "Controls capital",
                "Owns marketplace accounts",
                "Approves purchases",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-lime">·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-cloud/12 rounded-[18px] p-[clamp(20px,2.2vw,28px)] bg-ink/45">
            <div className="text-[11px] font-semibold tracking-[.16em] uppercase text-aqua mb-5">
              Hyprr
            </div>
            <div className="grid gap-3.5 text-base">
              {[
                "Researches opportunities",
                "Builds the operation",
                "Executes the work",
                "Manages day-to-day operations",
                "Reports performance and recommends next actions",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-aqua">·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="border-t border-cloud/12 pt-[clamp(24px,3vw,34px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center mb-[clamp(40px,5vw,64px)]">
          <div className="flex items-center gap-3 text-[13px] tracking-[.1em] uppercase text-cloud">
            <span className="w-[9px] h-[9px] rounded-full bg-violet shadow-[0_0_12px_#6947FF] flex-none" />
            Client decision
          </div>
          <div className="flex items-center gap-3 text-[13px] tracking-[.1em] uppercase text-fog">
            <span className="w-[9px] h-[9px] rounded-full bg-aqua flex-none" />
            Hyprr execution
          </div>
          <div className="flex items-center gap-3 text-[13px] tracking-[.1em] uppercase text-fog">
            <span className="w-[9px] h-[9px] rounded-full bg-lime flex-none" />
            Documented result
          </div>
        </Reveal>

        <div className="border-t border-cloud/12 pt-[clamp(34px,4vw,54px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,4vw,56px)] items-center">
          <div>
            <h3 className="font-display font-bold text-[clamp(26px,2.8vw,40px)] leading-[1.05] tracking-[-.03em] m-0 mb-[18px]">
              You own the business.
              <br />
              We can <span className="text-violet">run the work</span>.
            </h3>
            <p className="text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-mist m-0 mb-6 max-w-[46ch]">
              You control the business and the capital. Hyprr can take
              responsibility for the execution, management and ongoing
              operation required to move it forward.
            </p>
            <div className="flex gap-2.5 flex-wrap text-[13px] text-mist">
              <span className="border border-cloud/18 rounded-lg px-3 py-[7px]">
                Managed ecommerce
              </span>
              <span className="border border-cloud/18 rounded-lg px-3 py-[7px]">
                Full-service execution
              </span>
              <span className="border border-cloud/18 rounded-lg px-3 py-[7px]">
                Ongoing management
              </span>
            </div>
          </div>
          <Reveal className="border border-cloud/12 rounded-[20px] p-[clamp(20px,2.4vw,30px)] bg-ink/50 grid gap-0">
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center pb-[18px]">
              <span className="font-mono text-[10.5px] text-dim">01</span>
              <span className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Strategy
              </span>
            </div>
            <div className="h-px bg-cloud/10" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center py-[18px]">
              <span className="font-mono text-[10.5px] text-dim">02</span>
              <span className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Execution
              </span>
            </div>
            <div className="h-px bg-cloud/10" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center py-[18px]">
              <span className="font-mono text-[10.5px] text-dim">03</span>
              <span className="font-display font-semibold text-[19px] tracking-[-.02em]">
                Management
              </span>
            </div>
            <div className="h-px bg-cloud/10" />
            <div className="grid grid-cols-[34px_1fr] gap-4 items-center pt-[18px]">
              <span className="font-mono text-[10.5px] text-violet">04</span>
              <span className="font-display font-semibold text-[19px] tracking-[-.02em] text-violet">
                Optimization ↺
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
