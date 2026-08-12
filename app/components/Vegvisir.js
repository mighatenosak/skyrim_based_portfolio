export default function Vegvisir({ className }) {
  const cx = 70;
  const cy = 70;

  // Eight staves: four "cardinal" arms with a forked tip, four "diagonal"
  // arms with an arrowed tip — alternating every 45°, echoing the
  // traditional wayfinder stave without tracing any single reference image.
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  const ticks = Array.from({ length: 32 }, (_, i) => i * (360 / 32));

  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      <circle cx={cx} cy={cy} r={63} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx={cx} cy={cy} r={50} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {ticks.map((deg) => (
        <line
          key={deg}
          x1={cx}
          y1={cy - 63}
          x2={cx}
          y2={cy - 68}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          transform={`rotate(${deg} ${cx} ${cy})`}
        />
      ))}

      {angles.map((deg, i) => {
        const cardinal = i % 2 === 0;
        return (
          <g key={deg} transform={`translate(${cx} ${cy}) rotate(${deg})`} stroke="currentColor" strokeWidth="1.5" fill="none">
            <line x1="0" y1="-16" x2="0" y2={cardinal ? "-46" : "-40"} />
            <line x1="-4.5" y1="-28" x2="4.5" y2="-28" opacity="0.7" />
            {cardinal ? (
              <>
                <line x1="0" y1="-46" x2="-8" y2="-58" />
                <line x1="0" y1="-46" x2="8" y2="-58" />
              </>
            ) : (
              <>
                <line x1="-6" y1="-34" x2="0" y2="-40" />
                <line x1="6" y1="-34" x2="0" y2="-40" />
              </>
            )}
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r="3" fill="currentColor" />
    </svg>
  );
}
