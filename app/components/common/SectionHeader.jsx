"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";

export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
  labelClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  centered = false,
  layout = "default",
}) {
  const align = centered ? "center" : "left";
  const alignClass = centered ? "items-center text-center" : "items-start text-left";

  if (layout === "editorial") {
    return (
      <div className={`flex gap-2.5 ${className}`}>
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="mt-3.5 h-0.5 w-5 shrink-0 origin-left rounded-full bg-orange-500"
        />
        <div className="flex min-w-0 flex-col gap-3">
          {label ? (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`text-[16px] font-bold uppercase tracking-[0.22em] text-orange-950/70 ${labelClassName}`}
            >
              {label}
            </motion.span>
          ) : null}

          <SectionHeading title={title} align="left" className={titleClassName} />

          {subtitle ? (
            <p className={`section-heading-subtitle max-w-2xl ${subtitleClassName}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-12 flex flex-col gap-4 sm:mb-16 ${alignClass} ${className}`}>
      {label ? (
        <SectionLabel
          label={label}
          className={`${centered ? "justify-center" : ""} ${labelClassName}`}
        />
      ) : null}

      <SectionHeading title={title} align={align} className={titleClassName} />

      {subtitle ? (
        <p className={`section-heading-subtitle max-w-2xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
