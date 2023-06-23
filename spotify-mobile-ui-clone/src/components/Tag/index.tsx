export type TagProps = {
  label: string;
  context?: "home" | "notifications";
};

export default function Tag({ label, context }: TagProps) {
  return (
    <div
      className={`${
        context === "home" ? "bg-white/10" : "bg-black border border-zinc-400"
      } flex w-fit rounded-s-3xl rounded-e-3xl p-2 px-4 mr-3 text-[8pt] font-semibold`}
    >
      <span>{label}</span>
    </div>
  );
}
