interface FloralDecorationProps {
  className?: string;
  variant?: "rose" | "leaf" | "sprig";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-8 h-8 sm:w-10 sm:h-10",
  md: "w-12 h-12 sm:w-16 sm:h-16",
  lg: "w-16 h-16 sm:w-24 sm:h-24",
};

export default function FloralDecoration({
  className = "",
  variant = "rose",
  size = "md",
}: FloralDecorationProps) {
  const sizeClass = sizes[size];

  if (variant === "leaf") {
    return (
      <svg
        className={`${sizeClass} ${className}`}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M32 4C32 4 8 20 8 40C8 52 18 58 32 58C46 58 56 52 56 40C56 20 32 4 32 4Z"
          fill="#a8a890"
          opacity="0.35"
        />
        <path
          d="M32 12V52"
          stroke="#8b7355"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    );
  }

  if (variant === "sprig") {
    return (
      <svg
        className={`${sizeClass} ${className}`}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M32 58V20"
          stroke="#8b7355"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <ellipse
          cx="24"
          cy="28"
          rx="8"
          ry="5"
          fill="#a8a890"
          opacity="0.3"
          transform="rotate(-30 24 28)"
        />
        <ellipse
          cx="40"
          cy="36"
          rx="8"
          ry="5"
          fill="#a8a890"
          opacity="0.25"
          transform="rotate(30 40 36)"
        />
        <ellipse
          cx="26"
          cy="44"
          rx="7"
          ry="4"
          fill="#e8cfc4"
          opacity="0.35"
          transform="rotate(-20 26 44)"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`${sizeClass} ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="10" fill="#e8cfc4" opacity="0.5" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="32"
          cy="18"
          rx="6"
          ry="10"
          fill="#e8cfc4"
          opacity="0.4"
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="4" fill="#d4b5a8" opacity="0.6" />
    </svg>
  );
}
