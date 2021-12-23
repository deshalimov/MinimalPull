import { configure } from '@storybook/react'

// function loadStories() {
//   require('../stories/index.js')
// }

// configure(loadStories, module)


configure(require.context('../stories', true, /\.story\.js$/), module);