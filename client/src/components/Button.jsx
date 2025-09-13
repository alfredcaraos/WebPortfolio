export default function Button({
  type,
  value,
  className,
  icon,
  onClick,
  classValueIcon,
  disabled,
  children,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn text-white ${className}`}
      style={{backgroundColor: "#2b5679"}}
      type={type}
    >
      <span className={`flex items-center justify-center ${classValueIcon}`}>
        {value}
        <i className={`${icon} text-xl`}></i>
      </span>
      {children}
    </button>
  );
}
