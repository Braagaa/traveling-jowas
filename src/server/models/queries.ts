export const cleanUpDeleteQuery = [
   {'$set': {length: {'$size': '$categories'}}},
   {'$set': {status: {'$cond': {
		   if: {'$and': [
			   {'$eq': ['$length', 0]},
			   {'$eq': ['$destination', null]}
		   ]},
		   then: 'DRAFT',
		   else: '$status'
   }}}},
   {'$unset': ['length']}
];
