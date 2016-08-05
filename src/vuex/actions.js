// Onboarding
export const toggleHubAvailability = ({ dispatch }, index, hub) => {
  dispatch('EDIT_APP_HUBS', index, !hub.status)
}

export const updateActiveApp = ({ dispatch }, app) => {
  dispatch('SET_ACTIVE_APP', app)
}
