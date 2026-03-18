"use client";

import { useEffect } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  identifier: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector<HTMLElement>(
      `.glow-container-${identifier}`,
    );

    const CARDS = document.querySelectorAll<HTMLElement>(
      `.glow-card-${identifier}`,
    );

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: PointerEvent) => {
      CARDS.forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        // 🔥 exact proximity logic
        if (
          event.clientX > CARD_BOUNDS.left - CONFIG.proximity &&
          event.clientX <
            CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.clientY > CARD_BOUNDS.top - CONFIG.proximity &&
          event.clientY <
            CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity.toString());
        }

        // 🔥 exact center + angle logic
        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(
            event.clientY - CARD_CENTER[1],
            event.clientX - CARD_CENTER[0],
          ) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", ANGLE.toString());
      });
    };

    // 🔥 apply container variables (IMPORTANT for exact look)
    if (CONTAINER) {
      CONTAINER.style.setProperty("--gap", `${CONFIG.gap}`);
      CONTAINER.style.setProperty("--blur", `${CONFIG.blur}`);
      CONTAINER.style.setProperty("--spread", `${CONFIG.spread}`);
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row",
      );
    }

    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container glow-container-${identifier}`}>
      <article
        className={`glow-card glow-card-${identifier} relative h-fit w-full cursor-pointer rounded-xl border border-[#2a2e5a] bg-[#101123] text-gray-200 transition-all duration-300 hover:border-transparent`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
