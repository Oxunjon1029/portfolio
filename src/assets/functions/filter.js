import { setItem } from './localStorage';
export default function filter(cards, setCards, buttonId) {
  let Cards = [...cards]
  let filteredCards = Cards?.filter((item) => item?.id === buttonId);

  setItem('buttonId', buttonId)
  if (buttonId === 0) {
    setCards([...Cards])
  } else {
    setCards([...filteredCards])
  }
}
