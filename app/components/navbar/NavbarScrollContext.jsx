"use client";

import { createContext, useContext } from "react";

export const NavbarScrollContext = createContext(false);

export function useNavbarScrolled() {
  return useContext(NavbarScrollContext);
}
