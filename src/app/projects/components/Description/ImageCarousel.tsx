"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./CarouselDots";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);

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
                className="h-auto max-h-[400px] w-auto shadow-lg rounded-lg "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className="flex items-center justify-center text-primary hover:text-secondary hover:cursor-pointer"
            onClick={scrollPrev}
          >
            <span className="iconify lucide--chevron-left size-10" />
          </button>
          <button
            className="flex items-center justify-center text-primary hover:text-secondary hover:cursor-pointer"
            onClick={scrollNext}
          >
            <span className="iconify lucide--chevron-right size-10" />
          </button>
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
