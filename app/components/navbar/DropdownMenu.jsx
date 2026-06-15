import Link from "next/link";

export default function DropdownMenu({ item, isOpen }) {
  if (!isOpen) return null;

  const groups = item.groups?.length
    ? item.groups
    : [{ label: null, items: item.items ?? [] }];

  const isGrouped = item.groups?.length > 0;

  return (
    <div
      className={`absolute top-full left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-150 rounded-b-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${
        isGrouped
          ? "w-[min(100vw-2rem,760px)] p-6"
          : "min-w-[240px] py-3"
      }`}
    >
      <div
        className={
          isGrouped
            ? "grid grid-cols-[1fr_1fr_1.35fr] gap-8"
            : "flex flex-col"
        }
      >
        {groups.map((group) => (
          <div key={group.label ?? "default"} className="min-w-0">
            {group.label && (
              <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-500">
                {group.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map((subItem) => (
                <li key={subItem.href}>
                  <Link
                    href={subItem.href}
                    className={`block rounded-lg text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-orange-500 ${
                      isGrouped
                        ? "whitespace-nowrap px-3 py-2.5"
                        : "px-6 py-2.5"
                    }`}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
