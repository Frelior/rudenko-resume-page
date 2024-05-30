import { StyledOrbit } from "./StyledOrbit"

export default function Orbit({ children, ...props }) {
  return (
    <StyledOrbit
      className="solar_orbit"
      {...props}
    >
      {children}
    </StyledOrbit>
  )
}
