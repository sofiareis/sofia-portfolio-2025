import { technologies } from "@/content/technologies";

const Technologies = () => {
  return (
    <div className="flex items-center justify-center relative mt-10 bg-[linear-gradient(180deg,rgba(172,98,111,0)_0%,rgba(172,98,111,0.3)_50%,rgba(172,98,111,0)_100%)]">
      <div className="w-full max-w-[1400px] mx-15 my-10">
        <h2 className="mb-5 md:mb-8 text-center text-primary">
          Technologies I work with
        </h2>
        <div className="flex justify-center items-center gap-10">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className=" bg-white rounded-2xl w-20 h-20 flex items-center justify-center">
                <img
                  src={technology.img}
                  alt={`${technology.tech}`}
                  className="max-w-[50px]"
                />
              </div>
              <p className="mt-1">{technology.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

/*
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 49px;
gap: 40px;

width: 1728px;
height: 323px;

background: linear-gradient(180deg, rgba(172, 98, 111, 0) 0%, rgba(172, 98, 111, 0.2) 50%, rgba(172, 98, 111, 0) 100%);

flex: none;
order: 4;
flex-grow: 0;
*/

//background: linear-gradient(180deg, rgba(172, 98, 111, 0) 0%, rgba(172, 98, 111, 0.2) 50%, rgba(172, 98, 111, 0) 100%);
