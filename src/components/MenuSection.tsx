import { useState } from 'react';
import { menuCategories } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const activeCategory = menuCategories[activeTab];

  return (
    <section id="menu" className="py-24 sm:py-32 lg:py-40 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-2xl mb-12">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance">
            Something for Every Kind of Morning.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-espresso-300/50 mb-10" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 sm:px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeTab === i
                  ? 'text-espresso-900'
                  : 'text-espresso-400 hover:text-espresso-700'
              }`}
            >
              {cat.tabLabel}
              {activeTab === i && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-espresso-900" />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          key={activeCategory.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0"
          style={{ animation: 'fadeIn 0.4s ease forwards' }}
        >
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-baseline gap-4 py-5 border-b border-espresso-200/50"
            >
              <div className="flex-1">
                <h3 className="font-serif text-espresso-900 text-xl sm:text-2xl leading-tight">
                  {item.name}
                </h3>
                <p className="mt-1 text-espresso-500 text-sm leading-relaxed">{item.description}</p>
              </div>
              <span className="text-espresso-600 text-sm font-medium tabular-nums whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
