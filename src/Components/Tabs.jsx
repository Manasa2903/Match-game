import {useState, useEffect} from 'react'
import ImageItem from './ImageItem'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

const Tabs = ({imagesList}) => {
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId)
  const [filteredList, setFilteredList] = useState([])
  useEffect(() => {
    const imagesFiltered = imagesList.filter(
      eachImage => eachImage.category === activeTab,
    )
    setFilteredList(imagesFiltered)
  }, [activeTab, imagesList])

  return (
    <>
      <ul className="tabs-container">
        {tabsList.map(eachTab => (
          <li
            key={eachTab.id}
            className={
              activeTab === eachTab.tabId ? 'active-tab' : 'inactive-tab'
            }
            onClick={() => {
              setActiveTab(eachTab.tabId)
            }}
          >
            {eachTab.displayText}
          </li>
        ))}
      </ul>
      <ul className="images-container">
        {filteredList.map(eachImage => (
          <ImageItem key={eachImage.id} imageDetails={eachImage} />
        ))}
      </ul>
    </>
  )
}

export default Tabs
