export default function Controls({ onNext, onPrev }) {
  return (
    <div className="control_buttons">
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
