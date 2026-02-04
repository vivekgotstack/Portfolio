import { Typewriter } from "@/components/ui/typewriter";

function Preview() {
  return (
    <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden p-16 pt-48">
      <p className="whitespace-pre-wrap">
        <span>{"I build software to "}</span>
        <Typewriter
          text={[
            "solve real problems",
            "build scalable systems",
            "design clean APIs",
            "create reliable web apps",
          ]}
          speed={70}
          className="text-blue-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar="_"
        />
      </p>
    </div>
  );
}

export { Preview };
