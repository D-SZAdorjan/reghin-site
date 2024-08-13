const GridRow = ({ children, className = "" }: Readonly<{ children?: React.ReactNode; className?: string | "" }>) => {
  return (
    <div className={`row -gap-1.5 flex flex-wrap mx-[calc(30px*-0.5)] justify-between items-center ${className}`}>
      {children}
    </div>
  );
};

export default GridRow;