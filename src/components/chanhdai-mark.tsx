export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 139"
      aria-label="Fuad Tesfaye logo"
      {...props}
    >
      <image
        href="/flogo.png"
        width="256"
        height="139"
        className="brightness-0 dark:invert"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 139"><image href="/flogo.png" width="256" height="139"/></svg>`
}
