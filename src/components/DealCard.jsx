import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function DealCard({
  deal,
  index
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index !== undefined ? index * 0.1 : 0 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-2xl hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-500 w-full"
    >
      {/* Top side: Logo image container (explicitly white background) */}
      <div className="w-full h-32 bg-white border-b border-slate-100 flex items-center justify-center p-4 relative shrink-0">
        <img
          src={deal.logo}
          alt={deal.name}
          className="max-h-12 max-w-[100px] object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3.5 right-3.5 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
          {deal.discountBadge}
        </div>
      </div>

      {/* Bottom side: Text information container (compact layout) */}
      <div className="p-4 flex flex-col gap-3">
        {/* Upper Side: Category + Timer + Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest leading-none">
            {deal.category}
          </span>
          <div className="scale-90 origin-right">
            <CountdownTimer hours={deal.timerHours} mins={deal.timerMins} />
          </div>
        </div>

        <div className="flex items-center gap-1 leading-none">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-[10px] font-bold text-slate-700">{deal.rating}</span>
          <span className="text-[10px] text-slate-400 font-semibold">({deal.reviewCount})</span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-base font-extrabold text-slate-800 mb-0.5 group-hover:text-blue-600 transition-colors line-clamp-1">
            {deal.name}
          </h3>
          <p className="text-[10px] text-slate-450 line-clamp-1 font-medium">
            {deal.tagline}
          </p>
        </div>

        {/* Price Line */}
        <div className="flex items-end gap-1.5 pt-1 leading-none">
          <span className="text-lg font-black text-slate-800">{deal.salePrice}</span>
          <span className="text-[10px] text-slate-400 line-through font-semibold mb-0.5">
            {deal.originalPrice}
          </span>
        </div>

        {/* Action Button */}
        <Link
          href={`/deal/${deal.id}`}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold rounded-xl py-2.5 px-4 text-xs transition-all border border-slate-200/50 group-hover:border-blue-600 shadow-sm"
        >
          View Deal <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}