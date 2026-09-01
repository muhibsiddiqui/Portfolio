export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-page" />
      <div className="fx-grid absolute inset-0" />
      <div className="fx-orb fx-orb-cyan absolute -left-24 top-[8%] h-[28rem] w-[28rem]" />
      <div className="fx-orb fx-orb-blue absolute right-[-6%] top-[42%] h-[22rem] w-[22rem]" />
    </div>
  )
}
