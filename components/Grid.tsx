import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div>
      {/* Uncomment this section if needed */}
      <section id="about">
        <BentoGrid className="w-full mt-3 py-20">
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
