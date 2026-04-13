const PixelFooter = () => {
  return (
    <footer className="border-t-4 border-black bg-black py-10 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="font-pixel text-sm mb-2" style={{ color: '#70ff00' }}>
          LIETHUEIS FOUNDATION
        </p>
        <p className="font-body text-xs" style={{ color: '#70ff00', opacity: 0.6 }}>
          © {new Date().getFullYear()} All rights reserved. Built with pixels and passion.
        </p>
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2"
              style={{ background: i % 2 === 0 ? '#70ff00' : '#f500ff' }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
