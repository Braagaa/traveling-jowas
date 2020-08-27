import {useMutation} from '@apollo/client';
import {
	TravelList, TravelInput, TravelCategory, IDInput,
	TRAVEL_LIST, CREATE_CATEGORY, DELETE_CATEGORY, CREATE_DESTINATION, DESTINATION_LIST, DELETE_DESTINATION,
	DestinationList, Destination, DestinationInput
} from '../gql/'; 

type F<T> = (arg: T) => void;
type Loading = boolean;

export const useAddCategory = function(): [F<string>, Loading] {
	const [addCategory, {loading}] = useMutation<{createCategory: TravelCategory}, TravelInput>(CREATE_CATEGORY);
	
	const wrapper = (name: string) => {
		 addCategory({
			variables: {name},
			update(cache, {data}) {
				try {
					const travelData = cache.readQuery<TravelList>({query: TRAVEL_LIST});
					cache.writeQuery<TravelList>({
						query: TRAVEL_LIST,
						data: {
							categories: [...travelData!.categories, data!.createCategory]
						}
					});
				} catch {
					console.error('Could not update category');
				}
			}
		});
	}

	return [wrapper, loading];
}

export const useDeleteCategory = function(): [F<string>, Loading] {
	const [deleteCategory, {loading}] = useMutation<{removeCategory: boolean}, IDInput>(DELETE_CATEGORY);

	const wrapper = (id: string) => {
		deleteCategory({
			variables: {id},
			update(cache, {data}) {
				try {
					if (data!.removeCategory) {
						const travelData = cache.readQuery<TravelList>({query: TRAVEL_LIST});
						cache.writeQuery<TravelList>({
							query: TRAVEL_LIST,
							data: {
								categories: travelData!.categories.filter(cat => cat.id !== id)
							}
						});
					}
				} catch {
					console.error('Could not delete category');
				}
			}
		});	
	}

	return [wrapper, loading];
}

export const useAddDestination = function(): [F<DestinationInput>, Loading, Error | undefined] {
	const [addDestination, {loading, error}] = useMutation<{createDestination: Destination}, DestinationInput>(CREATE_DESTINATION);

	const wrapper = (variables: DestinationInput) => {
		addDestination({
			variables,
			update(cache, {data}) {
				try {
					if (data!.createDestination) {
						const destinationData = cache.readQuery<DestinationList>({query: DESTINATION_LIST});
						cache.writeQuery<DestinationList>({
							query: DESTINATION_LIST,
							data: {
								destinations: [...destinationData!.destinations, data!.createDestination]
							}
						});
					}
				} catch {
					console.error('Could not create destination');
				}
			}
		});
	};

	return [wrapper, loading, error];
};


export const useDeleteDestination = function(): [F<string>, Loading]{
	const [deleteDestination, {loading}] = useMutation<{removeDestination: Destination}, IDInput>(DELETE_DESTINATION);
	
	const wrapper = (id: string ) => {
		deleteDestination({
			variables: {id},
			update(cache, {data}) {
				try {
					if (data!.removeDestination) {
						const destinationData = cache.readQuery<DestinationList>({query: DESTINATION_LIST});
						cache.writeQuery<DestinationList>({
							query: DESTINATION_LIST,
							data: {
								destinations: destinationData!.destinations.filter(des => des.id !== id)
							}
						})
					}
				} catch (e) {
					console.error(e);
				}
			}
		});
	};

	return [wrapper, loading];
}
