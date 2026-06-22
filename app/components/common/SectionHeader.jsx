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
      <div className={`flex gap-3 ${className}`}>
        <div className="flex min-w-0 flex-col gap-2">
          {label ? (
            <SectionLabel 
              label={label} 
              centered={false} 
              className={labelClassName} 
            />
          ) : null}

          <SectionHeading title={title} align="left" className={titleClassName} />

          {subtitle ? (
            <p className={`mt-2 max-w-xl text-sm text-slate-600 font-sans leading-relaxed tracking-wide ${subtitleClassName}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-12 flex flex-col gap-2 sm:mb-16 ${alignClass} ${className}`}>
      {label ? (
        <SectionLabel
          label={label}
          centered={centered}
          className={labelClassName}
        />
      ) : null}

      <SectionHeading title={title} align={align} className={titleClassName} />

      {subtitle ? (
        <p className={`mt-2 max-w-xl text-sm text-slate-600 font-sans leading-relaxed tracking-wide ${subtitleClassName}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}