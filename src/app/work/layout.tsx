export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="max-w-3xl mx-auto px-4 mb-24">
      <div className={
        `prose prose-headings:mt-8 
          prose-headings:font-semibold 
          prose-h1:text-5xl 
          prose-h2:text-4xl 
          prose-h3:text-3xl 
          prose-h4:text-2xl 
          prose-h5:text-xl 
          prose-h6:text-lg
          prose-a:text-pink-600 
          prose-a:hover:text-pink-800 
          prose-img:rounded-lg
        `}>
        {children}
        <div className="text-pink-600 hover:text-pink-800 space-x-1">
          <span>&#8592;</span>
          <a href="/">Go back</a>
        </div>
      </div>
    </div>
  )
}