export const handleMouseMove = (
  e: React.MouseEvent, 
  containerRef: React.RefObject<HTMLDivElement>,
  setMousePosition: (pos: { x: number; y: number }) => void
) => {
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  }
};

export const getProjectTransform = (
  index: number, 
  hoveredCard: number | null, 
  projectId: number, 
  mousePosition: { x: number; y: number }
) => {
  return `
    translateY(${index % 2 === 0 ? '32px' : '-32px'}) 
    translateZ(0) 
    ${hoveredCard === projectId ? 
      `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(20px)` : 
      ''
    }
  `;
};

export const getAnimationClass = (index: number) => {
  return index === 0 ? 'animate-float' : 
         index === 1 ? 'animate-float-delayed' : 
         'animate-float-delayed-2';
};