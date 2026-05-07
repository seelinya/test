"use client";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export default function MarqueeText({ items, speed = 30, className = "" }: Props) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track inline-flex"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 inline-block">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
