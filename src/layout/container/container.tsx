type Props = {
  children?: React.ReactNode;
  className?: string;
  width?: string;
};

export default function Container({
  children,
  className = "",
  width = "max-w-5xl",
}: Props) {
  return (
    <div className={`${className && className + " "}${width} mx-auto`}>
      {children}
    </div>
  );
}
