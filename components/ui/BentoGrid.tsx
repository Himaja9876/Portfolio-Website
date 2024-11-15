import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("mx-auto w-full", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  description,
  img,
  imgClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
}) => {
  return (
    <div className="py-20">
      <div className="md:text-center">
        <h1 className="heading text-purple text-4xl md:mt-40 pb-14 font-bold relative z-[50]">
          About
        </h1>
      </div>

      <div
        className={cn(
          "row-span-1 group relative h-[800px] md:h-[500px] overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(18,19,28)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          height: "600px",
        }}
      >
        <div className="flex flex-col md:flex-row md:h-full">
          <div className="w-full md:w-1/2 h-max px-4 py-4 md:p-5 lg:p-10 flex flex-col justify-between">
            <div
              className="font-sans font-extralight text-xs md:text-lg text-[#cacbdb] text-justify transition duration-200"
              style={{ whiteSpace: "pre-line" }}
            >
              {description}
            </div>
          </div>
          {img && (
            <div className="w-full md:w-1/2 p-2 md:p-4 flex items-center justify-center">
              <img
                src={img}
                alt={img}
                className={cn(
                  imgClassName,
                  "w-full h-auto max-w-[80%] max-h-[90%] rounded-3xl object-cover object-center"
                )}
                style={{ margin: "auto" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
