const GridRow = ({ children, className = "mx-[calc(30px*-0.5)] justify-between items-center" }: Readonly<{ children?: React.ReactNode; className?: string | "" }>) => {
  return (
    <div className={`row -gap-1.5 flex flex-wrap ${className}`}>
      {children}
    </div>
  );
};

export default GridRow;