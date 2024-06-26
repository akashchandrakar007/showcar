"use client";
import { Fragment } from "react";
import Image from "next/image";

import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Dialog
      as="div"
      open={isOpen}
      className="relative z-10"
      onClose={closeModal}
    >
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
            <button
              type="button"
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              onClick={closeModal}
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src="/hero.png"
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-semibold text-xl capitalize">
                {car.make} {car.model}
              </h2>

              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h4 className="text-grey capitalize">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </>
);

export default CarDetails;
