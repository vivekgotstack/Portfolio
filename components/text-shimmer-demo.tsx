import { TextShimmer } from "@/components/ui/text-shimmer";

function TextShimmerBasic() {
  return (
    <TextShimmer className="font-mono text-sm" duration={1}>
      Generating code...
    </TextShimmer>
  );
}

function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className="text-xl font-medium [--base-color:var(--color-blue-600)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]"
    >
      Hi, how are you?
    </TextShimmer>
  );
}

export default {
  TextShimmerBasic,
  TextShimmerColor,
};
