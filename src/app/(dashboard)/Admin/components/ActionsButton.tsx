import { AiOutlineMore } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  handleClick: any;
  itemId: number;
}

export default function ActionsButton({ handleClick, itemId }: Props) {
  return (
    <div className=" w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center border-2 border-base-200 dark:border-darkMode-base-200 rounded-md bg-base-100 dark:bg-darkMode-base-100 p-1 text-sm/6 font-semibold text-primary-content dark:text-darkMode-foreground  focus:outline-none data-[hover]:bg-base-200 dark:data-[hover]:bg-darkMode-base-200 data-[open]:bg-base-200 dark:data-[open]:bg-darkMode-base-200">
          <AiOutlineMore className="size-8 fill-primary-content dark:fill-darkMode-foreground" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right bg-base-100 dark:bg-darkMode-base-100 rounded-xl border border-base-200/80 dark:border-white/5 p-1 text-sm/6 text-primary-content dark:text-darkMode-foreground [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-info/20 dark:data-[focus]:bg-darkMode-info">
                <PencilIcon className="group-data-[focus]:fill-info-content size-4 fill-primary-content dark:fill-white/30" />
                Edit
              </button>
            </MenuItem>

            <div className="my-1 h-px bg-base-200  dark:bg-white/5" />

            <MenuItem>
              <button
                onClick={() => {
                  handleClick(itemId);
                }}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-error/20 dark:data-[focus]:bg-darkMode-error"
              >
                <TrashIcon className="group-data-[focus]:fill-error-content dark:group-data-[focus]:fill-darkMode-error-content size-4 fill-primary-content dark:fill-white/30" />
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
