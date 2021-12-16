// import {useState, useEffect} from 'react'
// import ImageItem from './ImageItem'

const Tabs = props => {
  const {tabsList, activeTab, setActiveTab} = props
  return (
    <li
      className={activeTab === tabsList.tabId ? 'active-tab' : 'inactive-tab'}
      onClick={() => {
        setActiveTab(tabsList.tabId)
      }}
    >
      {tabsList.displayText}
    </li>
  )
}

export default Tabs
