const Quote = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-12 flex flex-col items-center">
      <blockquote className="max-w-3xl text-center text-pureWhite italic text-base md:text-lg font-light relative">
        <p>
          "None of us move on without a backward look.
          <br />
          We move on always carrying with us those we have lost."
        </p>
        <span className="block mt-4 text-sm text-softLilac/70">— Leigh Bardugo, Six of Crows</span>
      </blockquote>
    </section>
  );
};

export default Quote;
