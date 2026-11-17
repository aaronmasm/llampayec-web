/** Decorative Andean-style border, drawn with CSS (see `.greca` in index.css). */
export default function Greca({ className = '' }) {
  return <div className={`greca ${className}`} aria-hidden="true" />
}