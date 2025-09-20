import { useState } from "react";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function ImageSlider({
  images,
  type,
}: {
  images: string[];
  type?: string;
}) {
  const [current, setCurrent] = useState(0);

  const groupedImages =
    type === "phone" ? chunkArray(images, 2) : images.map((img) => [img]);

  const prev = () =>
    setCurrent((c) => (c === 0 ? groupedImages.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === groupedImages.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="overflow-hidden w-full flex justify-center gap-4 py-2">
        {groupedImages[current].map((img, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={img}
            alt={`Slide ${current}-${idx}`}
            className={`h-auto ${
              type === "phone"
                ? "max-h-[400px] max-w-[300px]"
                : "max-h-[450px] max-w-[500px]"
            } rounded-lg shadow-md transition-transform duration-500`}
          />
        ))}
      </div>
      {groupedImages.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 text-black/40 p-2 rounded-full hover:text-black/60 transition"
          >
            <span className="iconify lucide--circle-chevron-left size-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 text-black/40 p-2 rounded-full hover:text-black/60 transition"
          >
            <span className="iconify lucide--circle-chevron-right size-6" />
          </button>
        </>
      )}
    </div>
  );
}
