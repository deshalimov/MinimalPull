const DEFAULT_TOKEN = '50e00914-7179-42f8-8c73-24c297efc205'
// init localstorage with default data
saveState(getStoredStateOrDefault({token: DEFAULT_TOKEN}))

export function saveState(state) {
  localStorage.setItem('minipoll', JSON.stringify(state))
}

export function updateStateByKey(key, newValue) {
  const state = getStoredStateOrDefault({token: DEFAULT_TOKEN})
  state[key] = newValue
  saveState(state)
}

export function getStoredStateOrDefault(defaultState) {
  const stateAsStr = localStorage.getItem('minipoll')
  if (stateAsStr) {
    return JSON.parse(stateAsStr)
  } else {
    return defaultState
  }
}