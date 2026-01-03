import React from "react";
import { CalendarDays, Package, Info, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    food_image,
    food_name,
    additional_notes,
    food_quantity,
    expire_date,
    food_status,
    _id,
  } = food;

  const shortNote = additional_notes
    ? additional_notes.split(" ").slice(0, 12).join(" ") +
      (additional_notes.split(" ").length > 12 ? "..." : "")
    : "No additional notes provided.";

  return (
    <div
      className="
        group relative flex flex-col h-full overflow-hidden rounded-2xl
        bg-base-200
        shadow-md hover:shadow-xl
        transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Status */}
        <div
          className="
            absolute top-4 left-4 flex items-center gap-2
            rounded-full px-3 py-1 text-[11px] font-semibold
            backdrop-blur shadow
          "
        >
          <span
            className={`h-2 w-2 rounded-full ${
              food_status === "available"
                ? "bg-emerald-500"
                : "bg-rose-500"
            }`}
          />
          <span className="capitalize">{food_status}</span>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            View <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white line-clamp-1">
          {food_name}
        </h3>

        {/* Notes */}
        <div
          className="
            mt-1 flex gap-2 rounded-xl p-3
            bg-slate-50 dark:bg-slate-800/70
            border border-dashed border-slate-200 dark:border-slate-700
          "
        >
          <Info size={14} className="text-orange-500 mt-0.5 shrink-0" />
          <p className="text-xs italic leading-relaxed text-slate-600 dark:text-slate-400">
            “{shortNote}”
          </p>
        </div>

        {/* Meta */}
        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Package size={14} />
            <span>
              Qty:{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                {food_quantity}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            <span>{expire_date}</span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/foods/${_id}`}
          className="
            mt-5 inline-flex items-center justify-center gap-2
            rounded-xl px-4 py-3 text-sm font-bold text-white
            bg-gradient-to-r from-orange-500 to-orange-600
            shadow-lg shadow-orange-500/30
            hover:from-orange-600 hover:to-orange-700
            transition-all active:scale-[0.97]
          "
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
