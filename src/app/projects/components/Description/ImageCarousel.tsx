/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDots";

export default function ImageCarousel({
  images,
  color,
}: {
  images: string[];
  color: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla mx-auto max-w-[900px]">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <div key={index} className="embla__slide ">
              <img
                src={img}
                alt={`slide-${index}`}
                className="embla__slide__img h-auto md:max-h-[400px] max-h-[300px] w-auto shadow-lg rounded-lg "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className={`flex items-center justify-center hover:cursor-pointer border-2 rounded-xl`}
            onClick={scrollPrev}
            style={{ color: color }}
          >
            <span className="iconify lucide--chevron-left md:size-7 size-5" />
          </button>
          <button
            className="flex items-center justify-center hover:cursor-pointer border-2 rounded-xl"
            onClick={scrollNext}
            style={{ color: color }}
          >
            <span className="iconify lucide--chevron-right md:size-7 size-5" />
          </button>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              style={{ "--dot-color": color } as React.CSSProperties}
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>

      {/**<div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
