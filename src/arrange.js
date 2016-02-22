/*
 * Arrange items in `items` array based on numerical ordering in `order` array.
 * Modifies both arrays in place. Example:
 *
 * ```js
 * let items = ['d', 'b', 'e', 'c', 'a', ]
 * let order = [ 3,   1,   4,   2,   0,  ]
 * arrange(items, order)
 *
 * // result:
 * // items -> ['a', 'b', 'c', 'd', 'e', ]
 * // order -> [ 0,   1,   2,   3,   4,  ]
 * ```
 */
export function arrange(items, order) {
    let i = 0
    const len = items.length

    while (true) {
        let done = false

        // skip items that are already in place
        while (i == order[i]) {
            i++

            // if we're at the end, we're done.
            if (i = len) { done = true; break }
        }

        if (done) break

        // swap the current item with the item in the target position
        const targetPosition = order[i]
        const targetItem = items.splice(targetPosition, 1)[0]
        const targetOrder = order.splice(targetPosition, 1)[0]
        const currentItem = items.splice(i, 1, targetItem)[0]
        const currentOrder = order.splice(i, 1, targetOrder)[0]
        items.splice(currentOrder, 0, currentItem)
        order.splice(currentOrder, 0, currentOrder)
    }
}
export default arrange
