interface TapeStripProps {
  className?: string;
  rotation?: number;
}

export default function TapeStrip({
  className = "",
  rotation = -3,
}: TapeStripProps) {
  return (
    <div
      className={`absolute w-16 sm:w-20 h-6 sm:h-7 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        background:
          "linear-gradient(180deg, rgba(232, 223, 211, 0.7) 0%, rgba(232, 223, 211, 0.45) 100%)",
        boxShadow: "0 1px 3px rgba(74, 64, 54, 0.08)",
        borderRadius: "1px",
      }}
      aria-hidden="true"
    />
  );
}
