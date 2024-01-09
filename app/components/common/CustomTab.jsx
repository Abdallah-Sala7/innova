"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "nextjs13-progress";

const CustomTab = ({ items, tab }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedTab = searchParams.get(tab);

  const handleTab = (val) => {
    const newUrlParams = new URLSearchParams(searchParams.toString());
    newUrlParams.set(tab, val);

    router.push(`${pathname}?${newUrlParams}`, {
      scroll: false,
    });
  };

  return (
    <div
      className="flex items-center gap-2 flex-wrap justify-center mb-8"
      data-aos="fade-up"
    >
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => handleTab(item.key)}
          className={`px-5 py-2 rounded-full text-clr2 border border-clr2 hover:bg-clr2 hover:text-white transition-colors duration-500 ${
            (selectedTab === item.key || (!selectedTab && item.isActive)) &&
            "bg-clr2 text-white"
          }`}
        >
          {item.icon && item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CustomTab;
