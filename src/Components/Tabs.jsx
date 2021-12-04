const Tabs = ({tabDetails, setActiveTab, isActive}) => {
  const {displayText, tabId} = tabDetails
  const activeClass = isActive ? 'active-tab' : 'inactive-tab'
  return (
    <li
      className={activeClass}
      onClick={() => {
        setActiveTab(tabId)
      }}
    >
      {displayText}
    </li>
  )
}

export default Tabs
