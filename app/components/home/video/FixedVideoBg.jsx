"use client";

export default function FixedVideoBg() {
  return (
    /* Using absolute inset-0 sets the boundaries to exactly match 
      the parent section, keeping the fixed video inside its frame.
    */
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="image_3bf8c0.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay Filter locked safely inside this section block wrapper */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black/40 to-neutral-900/60 z-[1]" /> */}
    </div>
  );
}