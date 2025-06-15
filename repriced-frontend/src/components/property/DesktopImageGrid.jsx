const DesktopImageGrid = ({ imageUrl, title }) => (
  <div className="hidden md:flex gap-2 rounded-xl overflow-hidden">
    <div className="w-2/3">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[500px] object-cover"
      />
    </div>
    <div className="w-1/3 grid grid-cols-2 grid-rows-2 gap-2">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <img
            key={i}
            src={imageUrl}
            alt={`${i + 1} of ${title}`}
            className="w-full h-[245px] object-cover"
          />
        ))}
    </div>
  </div>
);
export default DesktopImageGrid;
