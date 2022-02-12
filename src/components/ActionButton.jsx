export default function ActionButton({ text }) {
  if (!text) {
    text = "Explore";
  }
  return (
    <button
      type="button"
      className="
        text-white 
        bg-gradient-to-r from-pink-primary to-light-blue-primary 
        hover:bg-gradient-to-r hover:from-light-blue-primary hover:to-pink-primary 
        hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
        font-bold rounded-full text-sm px-10 py-2.5 text-center mr-3 md:mr-0 
      "
    >
      {text}
    </button>
  );
}
