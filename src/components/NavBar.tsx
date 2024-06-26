"use client";

import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  Popover,
  PopoverPanel,
  PopoverGroup,
  PopoverBackdrop,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu } from "@/types/Menu";
import { twJoin } from "tailwind-merge";
import { clsx } from "clsx";
import { NavButton, NavLink } from "@/components/NavButton";
import { Palette } from "@/types/Palette";
import { userPaletteClasses } from "@/utils/globals";

type Props = {
  menus: Menu[];
  pagePalette: Record<string, Palette>;
};

// TODO: Use https://popper.js.org/react-popper/v2/hook/ to ensure menu stays in view

export default function NavBar({ menus, pagePalette }: Props) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const palette = pagePalette[pathname] || "white";

  return (
    <>
      <Container className={clsx("py-3", userPaletteClasses[palette].block)}>
        <nav className="flex items-center justify-between" aria-label="Global">
          <Link href="/">
            <span className="sr-only">WSCAH</span>
            <img
              alt="WSCAH"
              className="inline-block h-[64px] w-auto xl:h-[78px]"
              src={
                palette === "blue"
                  ? "/logo-full-light.svg"
                  : "/logo-full-dark.svg"
              }
            />
          </Link>
          <div className="flex items-center">
            <PopoverGroup className="hidden lg:flex">
              {menus.map((m) => (
                <span key={m._key}>
                  {m.action === "link" ? (
                    <NavLink palette={palette} href={m.href} name={m.name} />
                  ) : (
                    <Popover className="relative">
                      <PopoverBackdrop className="fixed inset-0" />
                      <NavButton palette={palette} name={m.name} />

                      {/* <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      > */}
                      <PopoverPanel className="absolute left-0 top-full z-10 mt-3 rounded-[30px] bg-grape-700 p-6 shadow-lg ring-1 ring-gray-900/5">
                        {m.items.map((itm) =>
                          itm.header ? (
                            <div
                              className="select-none px-4 pb-1.5 pt-8 text-xs font-bold text-grape-300"
                              key={itm._key}
                            >
                              {itm.name}
                            </div>
                          ) : (
                            <a
                              key={itm._key}
                              href={itm.href}
                              className="block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-white hover:bg-grape-500"
                            >
                              {itm.name}
                            </a>
                          ),
                        )}
                      </PopoverPanel>
                      {/* </Transition> */}
                    </Popover>
                  )}
                </span>
              ))}
            </PopoverGroup>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className={"h-6 w-6"} aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </Container>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grape-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">St. Peter&amp;s Kitchen</span>
              <img
                alt={"WSCAH"}
                className="inline-block h-10 w-auto"
                src={"/logo-light.svg"}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className={"h-6 w-6"} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menus.map((m) =>
                  m.action === "link" ? (
                    <Link
                      key={m._key}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-gray-50"
                      href={m.action === "link" ? m.href : "#"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {m.name}
                    </Link>
                  ) : (
                    <div key={m._key}>
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-gray-50">
                              {m.name}
                              <ChevronDownIcon
                                className={twJoin(
                                  open ? "rotate-180" : "",
                                  "h-6 w-6 flex-none",
                                )}
                                aria-hidden="true"
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 space-y-2">
                              {m.items.map((itm) =>
                                itm.header ? (
                                  <span className="select-none" key={itm._key}>
                                    {itm.name}
                                  </span>
                                ) : (
                                  <Link
                                    key={itm._key}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-white hover:bg-gray-50"
                                    href={itm.href || "#"}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {itm.name}
                                  </Link>
                                ),
                              )}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
