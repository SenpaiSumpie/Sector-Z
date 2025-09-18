export function ProgressBar() {
  return (
    <div 
      className="progress-bar" 
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar__fill" />
    </div>
  );
}