/*
 * https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence
 * serial executes Promises sequentially.
 * @param {funcs} An array of funcs that return promises.
 * @example
 * const urls = ['/url1', '/url2', '/url3']
 * serial(urls.map(url => () => $.ajax(url)))
 *     .then(console.log.bind(console))
 */
const serial = funcs => funcs.reduce((promise, func) =>
        promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]))


// Add any Map or Set to another (modified for tradingview usage; add only if it exists in the target)
// const map = new Map(timeSeriesMap);
// addAll(map, new Map(valueSeriesMap));
function addAll(target, source) {
        const errors = [];
        if (target instanceof Map) {
                Array.from(source.entries()).forEach(it => target.has(it[0]) ? target.set(it[0], it[1]) : errors.push(it))
        } else if (target instanceof Set) {
                source.forEach(it => target.has(it[0]) ? target.add(it) : errors.push(it))
        }
        if (errors.length) {
                console.error('addAll() ~ source contains incorrect timestamp', errors);
        }
}


// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
const groupBy = (x,f)=>x.reduce((a,b,i)=>((a[f(b,i,x)]||=[]).push(b),a),{});

// https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/
const mapInGroups = (arr, iteratee, groupSize) => {
	const groups = groupBy(arr, (_v, i) => Math.floor(i / groupSize));

	return Object.values(groups)
		.reduce(async (memo, group) => [
			...(await memo),
			...(await Promise.all(group.map(iteratee)))
		], []);
};

const res = await mapInGroups(arr, async (v) => {
	console.log(`S ${v}`);
	await sleep(v);
	console.log(`F ${v}`);
	return v + 1;
}, 3);



// https://stackoverflow.com/questions/58615246/recursive-filter-on-nested-array
function recursiveFilter(array, fn) {
        return array.reduce((r, o) => {
            var children = filter(o.children || [], fn);
            if (fn(o) || children.length) r.push(Object.assign({}, o, children.length && { children }));
            return r;
        }, []);
    }
/*
var data = [{ name: 'bob', type: 1, children: [{ name: 'bob', type: 2, children: [{ name: 'mike', type: 3, children: [{ name: 'bob', type: 7 }, { name: 'same', typ: 9 }] }] }, { name: 'mike', type: 2 }] }],
result = filter(data, ({ name }) => name.toLowerCase() === 'bob');

console.log(result);
    */