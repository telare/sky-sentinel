import { useVirtualizer } from "@tanstack/react-virtual";
import * as React from "react";
import { useRef } from "react";

export function Virtualizer({ children }: { children: React.ReactNode[] }) {
  // The scrollable element for your list
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childrenArray = React.Children.toArray(children);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: childrenArray.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
  });

  return (
    <>
      {/* The scrollable element for your list */}
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: "auto", // Make it scroll!
        }}
        className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map(virtualItem => (
            <div
              key={virtualItem.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {childrenArray[virtualItem.index]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
