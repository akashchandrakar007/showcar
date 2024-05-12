"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const router = useRouter();
  const [selected, setSelected] = useState(options?.[0]); // State for storing the selected option

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected?.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </ListboxButton>
          <ListboxOptions className="custom-filter__options">
            {options?.map((option) => (
              <ListboxOption
                key={option.title}
                className={
                  "relative cursor-default select-none py-2 px-4 data-[focus]:bg-primary-blue data-[focus]:text-white text-gray-900"
                }
                value={option}
              >
                {({ focus, selected }) => (
                  <>
                    <span
                      className={`flex gap-2 ${
                        focus ?? "bg-blue-100"
                      } block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
