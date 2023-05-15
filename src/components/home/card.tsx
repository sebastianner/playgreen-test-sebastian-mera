import { MotionValue, motion } from "framer-motion";

type Props = {
  card: {
    text: string;
  };
  style: {
    x?: MotionValue<number>;
    y?: MotionValue<number>;
    zIndex?: number;
    scale?: MotionValue<number>;
    boxShadow?: MotionValue<string>;
  };
  onDirectionLock: (axis: string) => void;
  onDragEnd: (
    _: unknown,
    info: {
      offset: {
        x: number;
        y: number;
      };
    }
  ) => void;
  animate: {
    x: number;
    y: number;
  };
};

export const Card = ({
  card,
  style,
  onDirectionLock,
  onDragEnd,
  animate,
}: Props) => (
  <motion.div
    className="card"
    drag="x"
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{
      ...style,
    }}
    transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    whileTap={{ scale: 0.85 }}
    onClick={() => console.log("click")}
  >
    <p>{card.text}</p>
  </motion.div>
);
