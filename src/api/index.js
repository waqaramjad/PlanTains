import * as offline from './offlineApi'
import * as online from './onlineApi'

import config from 'config'

let api

if (config.api === 'online') {
	api = online
} else {
	api = offline
}

export default api