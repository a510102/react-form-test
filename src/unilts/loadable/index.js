import React, { lazy, Suspense } from 'react';

export default function loadable(importFnc, { fallback = null } = { fallback: null }) {
	const LazyComponent = lazy(importFnc);

	return props => (
		<Suspense fallback={fallback}>
			<LazyComponent {...props} />
		</Suspense>
	)
}
