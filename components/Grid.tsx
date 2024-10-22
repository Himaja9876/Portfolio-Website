import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div>
      <section id="about" className="py-20">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-8 relative z-10"></h2>
        <BentoGrid className="w-full mt-3">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
