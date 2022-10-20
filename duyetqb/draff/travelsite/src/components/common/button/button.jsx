import "./button.css";

const Button = ({ className, classNameDefault, children, ...props }) => {
  if (classNameDefault)
    return (
      <button className="button-default" {...props}>
        {children}
      </button>
    );

  const handleRoundClassName = () => {
    switch (className) {
      case undefined:
        return "button-default";
        break;
      default:
        return `${className} button-default`;
        break;
    }
  };
  return (
    <>
      <button className={handleRoundClassName()} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
