export default function  TabButton({ children, onSelect, isSelected }) {
  // Vanilla JS event listner (imperative)
  // document.querySelector('button').addEventListener('çlick', () => {
  // })

  // props.children return text inbetween the Component open and closing tags
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  )
}
