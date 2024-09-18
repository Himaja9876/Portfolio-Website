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
  title,
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
      <div className="text-center mb-10">
        <h1 className="heading">
          <span className="text-purple">About</span>
        </h1>
      </div>

      <div
        className={cn(
          "row-span-1 group relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          height: "400px",
        }}
      >
        <div className="flex h-full">
          <div className="w-1/2 p-5 lg:p-10 flex flex-col justify-between">
            <div
              className="font-sans font-extralight text-xl md:text-xl lg:text-lg text-[#cacbdb] z-10 group-hover/bento:translate-x-2 transition duration-200"
              style={{ whiteSpace: "pre-line" }} // Apply inline style for text wrapping
            >
              {description}
            </div>
            <div className={`font-sans text-lg lg:text-3xl font-bold z-10`}>
              {title}
            </div>
          </div>
          {img && (
            <div className="w-1/2 p-4 flex items-center justify-center">
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
