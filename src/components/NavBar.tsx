"use client";

import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import HamburgerButton from "@/components/HamburgerButton";
import MenuButton from "@/components/MenuButton";
import MenuHeader from "@/components/MenuHeader";
import MenuItem from "@/components/MenuItem";
import MobileMenuHeader from "@/components/MobileMenuHeader";
import MobileMenuItem from "@/components/MobileMenuItem";
import MobileMenuButton from "@/components/MobileMenuButton";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
  Popover,
  PopoverBackdrop,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Menu } from "@/types/Menu";
import { clsx } from "clsx";
import { Palette } from "@/types/Palette";
import { userPaletteClasses } from "@/utils/globals";
import { PortableTextBlock } from "sanity";
import AlertBar from "@/components/AlertBar";
import { AlertPalette } from "@/types/Header";

type NavBarProps = {
  menus: Menu[];
  pagePalette: Record<string, Palette>;
  alert?: {
    message: PortableTextBlock[];
    palette: AlertPalette;
  };
};

// TODO: Use https://popper.js.org/react-popper/v2/hook/ to ensure menu stays in view

export default function NavBar({ menus, pagePalette, alert }: NavBarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const palette = pagePalette[pathname] || "white";

  return (
    <>
      {alert && <AlertBar message={alert.message} palette={alert.palette} />}

      <Container className={clsx("py-3", userPaletteClasses[palette].block)}>
        <nav className="flex items-center justify-between" aria-label="Global">
          <Link href="/">
            <span className="sr-only">WSCAH</span>
            <img
              alt="WSCAH"
              className="inline-block h-[78px] w-auto"
              src={
                palette === "blue"
                  ? "/logo-full-light.svg"
                  : "/logo-full-color.svg"
              }
            />
          </Link>
          <div className="flex items-center">
            <PopoverGroup className="hidden items-center xl:flex">
              {menus.map((m, mi) => (
                <span key={m._key}>
                  {m.action === "link" ? (
                    <MenuButton
                      submenu={false}
                      palette={palette}
                      href={m.href}
                      name={m.name}
                      variant={m.variant}
                    />
                  ) : (
                    <Popover className="relative">
                      <PopoverBackdrop className="fixed inset-0" />
                      <MenuButton
                        submenu={true}
                        palette={palette}
                        name={m.name}
                        variant={m.variant}
                      />

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <PopoverPanel
                          className={clsx(
                            "absolute top-full z-10 mt-3 rounded-3xl bg-grape-700 p-6 shadow-lg ring-1 ring-gray-900/5",
                            mi < menus.length / 2 ? "left-0" : "right-0",
                          )}
                        >
                          {({ close }) => (
                            <>
                              {m.items.map((itm) =>
                                itm.header ? (
                                  <MenuHeader key={itm._key} name={itm.name} />
                                ) : (
                                  <MenuItem
                                    key={itm._key}
                                    href={itm.href}
                                    name={itm.name}
                                    onClick={close}
                                  />
                                ),
                              )}
                            </>
                          )}
                        </PopoverPanel>
                      </Transition>
                    </Popover>
                  )}
                </span>
              ))}
            </PopoverGroup>
            <div className="flex xl:hidden">
              <HamburgerButton
                palette={palette}
                onClick={() => setMobileMenuOpen(true)}
              />
            </div>
          </div>
        </nav>
      </Container>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogPanel className="fixed inset-0 z-10 w-full overflow-y-auto bg-grape-600">
          {alert && (
            <AlertBar message={alert.message} palette={alert.palette} />
          )}
          <div className="p-6">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-sm inline-flex items-center justify-center bg-grape-700 p-[10px] text-white hover:bg-white hover:text-grape-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className={"h-6 w-6"} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 flex flex-col items-center space-y-6">
              {menus.map((m) =>
                m.action === "link" ? (
                  <MobileMenuButton
                    key={m._key}
                    name={m.name}
                    menu={false}
                    href={m.href}
                    variant={m.variant}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <div key={m._key}>
                    <Disclosure as="div">
                      {({ open }) => (
                        <div className="flex flex-col items-center">
                          <MobileMenuButton
                            name={m.name}
                            open={open}
                            menu={true}
                            variant={m.variant}
                          />
                          <DisclosurePanel className="mb-8 mt-8">
                            {m.items.map((itm) =>
                              itm.header ? (
                                <MobileMenuHeader
                                  key={itm._key}
                                  name={itm.name}
                                />
                              ) : (
                                <MobileMenuItem
                                  key={itm._key}
                                  name={itm.name}
                                  href={itm.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                />
                              ),
                            )}
                          </DisclosurePanel>
                        </div>
                      )}
                    </Disclosure>
                  </div>
                ),
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
