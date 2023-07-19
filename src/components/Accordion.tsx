import * as React from "react";
import ArrowDown from "./icons/ArrowDown";

interface Item {
  title: string;
  text: string;
}

interface Props {
  data: Item[];
}

const Accordion = ({ data }: Props) => {
  const [isOpened, setIsOpened] = React.useState(data.map((_, i) => !i));
  const itemsRef = React.useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, data.length);
  }, [data]);

  const onClickHandler = (e: React.MouseEvent<HTMLElement>, idx: number) => {
    setIsOpened(
      isOpened.map((is, i) => {
        if (idx === i) {
          itemsRef.current[idx].style.height = !is
            ? `${itemsRef.current[idx]?.scrollHeight}px`
            : "";

          return !is;
        }
        return is;
      })
    );
  };

  return (
    <div>
      <ul className="flex flex-col">
        {data.map((item, i) => (
          <li
            key={i}
            className={`border border-sandyAccent transition ${
              isOpened[i] ? "bg-white" : ""
            }`}
          >
            <div
              className={`flex transition-all pl-12 pt-[41px] ${
                isOpened[i] ? "pb-[35px]" : "pb-[40px]"
              } pr-[34px] justify-between`}
            >
              <h3 className="h4">{item.title}</h3>
              <button
                className="bg-orange rounded-full"
                onClick={(e) => onClickHandler(e, i)}
              >
                <ArrowDown
                  className={`${isOpened[i] ? "rotate-180" : ""} transition`}
                />
              </button>
            </div>
            <div
              ref={(el) => (itemsRef.current[i] = el)}
              className={`${
                isOpened[i] ? "" : "h-0"
              } overflow-hidden transition-all`}
            >
              <p className="text px-[50px] pb-[44px] opacity-[0.64]">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
