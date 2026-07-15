export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Vivek Nigam">
      <span className="relative grid h-9 w-11 shrink-0 place-items-center overflow-hidden rounded-[0.8rem] border border-[#c7ff38]/45 bg-[#c7ff38] text-[#080a08] shadow-[0_0_24px_rgba(199,255,56,.12)]">
        <span className="absolute -left-3 top-1/2 h-px w-16 -rotate-[28deg] bg-black/20" />
        <span className="relative font-mono text-[12px] font-black tracking-[-0.16em]">V/N</span>
        <span className="absolute bottom-1.5 right-1.5 h-1 w-1 rounded-full bg-black" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold tracking-[-0.03em]">VIVEK NIGAM</span>
          <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.22em] text-white/35">Build / Ship / Scale</span>
        </span>
      )}
    </span>
  );
}
