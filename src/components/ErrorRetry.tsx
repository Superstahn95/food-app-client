/* eslint-disable react/require-default-props */
interface RetryProps {
  text?: string;
  callback: () => void;
}

function ErrorRetry({ callback, text = "click to retry" }: RetryProps) {
  return (
    <button
      type="button"
      onClick={callback}
      className="text-white bg-red-600 px-5 py-2 capitalize font-montserrat"
    >
      {text}
    </button>
  );
}

export default ErrorRetry;
