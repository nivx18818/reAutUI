import clsx from "clsx";

function Section({ children, className }) {
  return (
    <div
      className={clsx(
        "max-w-5xl p-2.5 mx-auto rounded-xl bg-white bg-border-dashed",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Section;
