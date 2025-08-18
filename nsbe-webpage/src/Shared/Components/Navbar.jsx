/**
 * Navbar
 *
 * Responsive, sticky navigation that adapts its items based on the current route
 * and the sections visible in the viewport. Uses Headless UI for the mobile menu.
 *
 * Sizing conventions:
 * - Icons: prefer `.icon-sm|md|lg` classes for consistent icon sizing.
 * - Buttons: prefer `.btn` with `.btn-sm|md|lg` and color variants like `.btn-primary`.
 */
import { useState, useEffect, useRef, useMemo } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/TexasNSBE_logo_white.png";

/** Sections composing the Home page, in vertical order. */
const HOME_COMPONENTS = [
  { name: "Welcome", id: "hero" },
  { name: "Calendar", id: "calendar" },
  { name: "GBM", id: "meetings" },
  { name: "Points", id: "points" },
  { name: "Slack", id: "slack" },
  { name: "Dues", id: "dues" },
  { name: "Photos", id: "photos" },
];

/** Sections composing the Officers page, in vertical order. */
const OFFICERS_COMPONENTS = [
  { name: "President", id: "president" },
  { name: "Membership", id: "membership" },
  { name: "Communications", id: "communications" },
  { name: "Finance", id: "finance" },
  { name: "Programs", id: "programs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();

  const currentComponents = useMemo(() => {
    if (location.pathname === "/") {
      return HOME_COMPONENTS;
    }
    if (location.pathname === "/officers") {
      return OFFICERS_COMPONENTS;
    }
    return [];
  }, [location.pathname]);

  /**
   * Track how many target sections have scrolled past the navigation threshold,
   * so we only show links to sections that are already reachable in the viewport.
   */
  useEffect(() => {
    let rafId = null;

    const computeVisibleCount = () => {
      const offset = (navRef.current?.offsetHeight ?? 80) + 12; // navbar height + small buffer
      const ids = currentComponents.map((c) => c.id);
      let count = 0;

      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) break;
        const top = el.getBoundingClientRect().top; // relative to viewport
        if (top <= offset) {
          count = i + 1;
        } else {
          break;
        }
      }

      setVisibleCount(count);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(computeVisibleCount);
    };

    // initial compute and listeners
    computeVisibleCount();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // Re-run when route changes or component list changes
  }, [currentComponents]);

  const containerVisible = visibleCount > 0;

  return (
    <div className="sticky top-0 z-50 mb-6">
      <header
        ref={navRef}
        className="bg-black/90 backdrop-blur-md shadow-lg border-b-2 border-orange-600"
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-8 py-4"
        >
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img
                alt=""
                src={logo}
                className="h-15 w-auto transition-all hover:scale-125 duration-300 ease-out"
              />
            </Link>
          </div>

          {/* Dynamic navigation items that appear as sections are passed */}
          <div
            className={`hidden lg:flex lg:gap-x-8 transition-opacity duration-500 ease-out ${
              containerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {currentComponents.slice(0, visibleCount).map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-lg font-semibold leading-6 text-white hover:text-orange-400 transition-all hover:scale-110 duration-300 ease-out whitespace-nowrap"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="icon-lg" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-white"
            ></Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm" />
          <DialogPanel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-x-8" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="icon-md" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {currentComponents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        const el = document.getElementById(item.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left -mx-3 block px-3 py-3 text-base font-semibold leading-7 text-white transition-all hover:scale-[1.02] duration-200 ease-out hover:text-orange-400"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
