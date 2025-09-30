export const posts = Object.entries(import.meta.glob('./*.svx', { eager: true })).map(
	([path, module]) => {
		return {
			slug: path.split('/').pop().replace('.svx', ''),
			meta: module.metadata,
			component: module.default
		}
	}
)
