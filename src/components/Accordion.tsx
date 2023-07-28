import * as React from "react";
import throttle from "lodash.throttle";

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

  React.useEffect(() => setInitialHeight, []);

  const setInitialHeight = () => {
    itemsRef.current.forEach(
      (itm, i) => isOpened[i] && (itm.style.height = `${itm.scrollHeight}px`)
    );
  };

  if (typeof window !== `undefined`) {
    window.addEventListener("resize", throttle(setInitialHeight, 300));
  }

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
            className={`border border-sandyAccent transition first-of-type:rounded-t-md last-of-type:rounded-b-md -mt-[1px] first-of-type:mt-0 ${
              isOpened[i] ? "bg-white shadow-activeCard" : ""
            }`}
          >
            <div
              className={`flex gap-[15px] transition-all px-7 lg:pl-12 pt-[41px] ${
                isOpened[i] ? "pb-[19px] lg:pb-[35px]" : "pb-[39px]"
              } pr-7 lg:pr-[34px] justify-between items-start`}
            >
              <p className="h4">{item.title}</p>
              <button
                className="bg-orange rounded-full flex items-center justify-center"
                onClick={(e) => onClickHandler(e, i)}
                aria-label="Arrow down"
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
              <p className="text px-7 lg:px-[50px] pb-[37px] lg:pb-[44px] opacity-[0.64]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
