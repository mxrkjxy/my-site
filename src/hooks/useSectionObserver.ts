import { useEffect, useState } from 'react';

export default function useSectionObserver(sectionIds: string[], isBlocked: boolean) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!isBlocked && visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          setActiveId(id);
          window.history.replaceState(null, '', `#${id}`);
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
