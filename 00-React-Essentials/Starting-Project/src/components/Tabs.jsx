export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
  // Setting Component Types Dynamically
  const ButtonsContainer = buttonsContainer
  return <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
  </>
}
