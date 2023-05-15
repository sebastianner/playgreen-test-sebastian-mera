import { useState } from "react";
import { useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { Card } from "./card";

const Slider = () => {
  const [cards, setCards] = useState([
    { text: "Football" },
    { text: "Basket" },
    { text: "Tenis" },
  ]);
  const [dragStart, setDragStart] = useState({
    axis: "",
    animation: { x: 0, y: 0 },
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [1, 0.5, 1]
  );
  const shadowBlur = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 25, 0]
  );
  const shadowOpacity = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [0, 0.2, 0]
  );
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

  const onDirectionLock = () => {
    setDragStart({ ...dragStart, axis: "x" });
  };

  const animateCardSwipe = (animation: { x: number; y: number }) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: "", animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      setCards([
        {
          text: "The new",
        },
        ...cards.slice(0, cards.length - 1),
      ]);
    }, 200);
  };

  const onDragEnd = (info: { offset: { x: number; y: number } }) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) animateCardSwipe({ x: 175, y: 0 });
      else if (info.offset.x <= -100) animateCardSwipe({ x: -175, y: 0 });
    }
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <div className="ddd">
            <Card
              card={card}
              key={index}
              style={{ x, y, zIndex: index }}
              onDirectionLock={(axis: string) => onDirectionLock()}
              onDragEnd={(
                _: unknown,
                info: { offset: { x: number; y: number } }
              ) => onDragEnd(info)}
              animate={dragStart.animation}
            />
          </div>
        );
      } else
        return (
          <div className="ddd">
            <Card
              card={card}
              key={index}
              style={{
                scale,
                boxShadow,
                zIndex: index,
              }}
              onDirectionLock={(): void => {
                throw new Error("Function not implemented.");
              }}
              onDragEnd={(): void => {
                throw new Error("Function not implemented.");
              }}
              animate={{
                x: 0,
                y: 0,
              }}
            />
          </div>
        );
    });
  };
  return <div className="infinite-cards">{renderCards()}</div>;
};

export default Slider;
