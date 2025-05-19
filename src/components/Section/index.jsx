import clsx from "clsx";

function Section({ children, heading, className }) {
  return (
    <div
      className={clsx(
        "max-w-5xl p-2.5 mx-auto rounded-xl bg-white bg-border-dashed",
        className
      )}
    >
      {heading && (
        <h2 className="m-4 text-lg font-semibold leading-none">{heading}</h2>
      )}
      {children}
    </div>
  );
}

export default Section;
