"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoaderVisual from "@/components/animations/loaderVisual";

const mainRoutes = new Set([
  "/",
  "/about-us",
  "/services",
  "/case-studies",
  "/contact",
]);
const LOADER_MS = 900;

export default function RoutePreloader() {
  const pathname = usePathname();
  const previousPathRef = useRef(pathname);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const previousPath = previousPathRef.current;
    const shouldShow =
      previousPath !== pathname &&
      mainRoutes.has(previousPath) &&
      mainRoutes.has(pathname);

    if (shouldShow) {
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }

      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      showTimerRef.current = setTimeout(() => {
        setVisible(true);
      }, 0);

      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
      }, LOADER_MS);
    }

    previousPathRef.current = pathname;

    return () => {
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }

      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-10000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <LoaderVisual />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
