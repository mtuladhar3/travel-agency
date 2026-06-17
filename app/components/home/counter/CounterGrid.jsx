import CounterItem from "./CounterItem";
import { counterStats } from "./counterData";

export default function CounterGrid() {
  return (
    <div className="counter-all-items grid w-full grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-4 md:gap-y-0 lg:gap-x-8">
      {counterStats.map((stat, index) => (
        <CounterItem
          key={stat.id}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          index={index}
        />
      ))}
    </div>
  );
}
