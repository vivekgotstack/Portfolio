export function BrandMark() {
  return (
    <span className="relative inline-flex items-center py-1" aria-label="Vivek Nigam">
      <span className="text-[19px] font-black tracking-[-0.075em] text-white sm:text-[22px]">
        Vivek<span className="text-[#c7ff38]"> Nigam</span>
      </span>
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gradient-to-r from-[#c7ff38] via-[#c7ff38]/45 to-transparent" />
      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7ff38] shadow-[0_0_10px_#c7ff38]" />
    </span>
  );
}
