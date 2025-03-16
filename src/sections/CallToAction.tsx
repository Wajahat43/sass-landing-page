export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <div className="flex flex-none gap-16 font-medium">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-16 text-7xl md:text-8xl"
            >
              <span className="text-7xl text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
