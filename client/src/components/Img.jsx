export default function Img({ src, alt, className, style }) {
  return (
    <div>
      <img src={src} alt={alt} className={className} style={style}/>
    </div>
  );
}
